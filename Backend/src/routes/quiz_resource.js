import express from 'express';
import Joi from 'joi';
import output from '../utils/response';
import db from '../db';
import { Quiz } from '../db/models/Quiz.model';
import { Question } from '../db/models/Question.model';
import { Option } from '../db/models/Option.model';
import { validate } from '../middlewares/middleware';
const router = express.Router();

// schemas for options
const optionSchema = Joi.object({
  option: Joi.string().required(),
  isCorrect: Joi.boolean().required()
});

// schema for a question
const questionSchema = Joi.object({
  question: Joi.string().required(),
  options: Joi.array().items(optionSchema).min(1).required()
});

// create quiz validations
const quizValidations = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  questions: Joi.array().items(questionSchema).min(1).required()
});

// function to create a quiz
router.post('/', validate(quizValidations), async (req, res) => {
  try {
    const { title, description, questions } = req.body;

    const quizExists = await Quiz.findOne({ where: { title } });
    if (quizExists) return output(res, 409, 'Quiz already exists', null, 'CONFLICT_ERROR');

    // Iterate over each question
    const quiz = await db.transaction(async (t) => {
      const newQuiz = await Quiz.create({ title, description }, { transaction: t });
      const createdQuestions = await Promise.all(questions.map(async (questionData) => {
        const { question, options } = questionData;
        const newQuestion = await Question.create({ quizId: newQuiz.id, question }, { transaction: t });

        // Iterate over options for each question
        const createdOptions = await Promise.all(options.map(async (optionData) => {
          const { option, isCorrect } = optionData;
          return Option.create({ questionId: newQuestion.id, option, isCorrect }, { transaction: t });
        }));

        return { ...newQuestion.dataValues, options: createdOptions };
      }));

      return { ...newQuiz.dataValues, questions: createdQuestions };
    });

    return output(res, 201, 'Quiz created successfully', quiz, null);
  } catch (error) {
    return output(res, 500, error.message || error, null, 'SERVER_ERROR');
  }
});

// function to get all quizes
router.get('/', async (req, res) => {
  try {
    const quizzes = await Quiz.findAndCountAll({ order: [['createdAt', 'DESC']] });
    return output(res, 200, 'Quizzes retrieved successfully', quizzes, null);
  } catch (error) {
    return output(res, 500, error.message || error, null, 'SERVER_ERROR');
  }
});

export default router;
