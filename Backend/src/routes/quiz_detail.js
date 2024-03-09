import express from 'express';
import Joi from 'joi';
import output from '../utils/response';
import { Quiz } from '../db/models/Quiz.model';
import { validate } from '../middlewares/middleware';
import { Question } from '../db/models/Question.model';
import { Option } from '../db/models/Option.model';
import db from '../db';

const router = express.Router({ mergeParams: true });

// function to delete a quiz
router.delete('/', async (req, res) => {
  try {
    const { quizId } = req.params;
    const quizExists = await Quiz.findOne({ where: { id: quizId } });
    if (!quizExists) {
      return output(res, 404, 'Quiz does not exist', null, 'NOT_FOUND');
    }
    await quizExists.destroy();
    return output(res, 200, 'Quiz deleted successfully', null, null);
  } catch (error) {
    return output(res, 500, error.message || error, null, 'SERVER_ERROR');
  }
});

// function to get a single quiz
router.get('/', async (req, res) => {
  try {
    const { quizId } = req.params;
    const quiz = await Quiz.findOne({ where: { id: quizId }, include: [{ model: Question, include: Option }] });
    if (!quiz) {
      return output(res, 404, 'Quiz does not exist', null, 'NOT_FOUND');
    }
    return output(res, 200, 'Quiz retrieved successfully', quiz, null);
  } catch (error) {
    return output(res, 500, error.message || error, null, 'SERVER_ERROR');
  }
});

const optionSchema = Joi.object({
  option: Joi.string().required(),
  isCorrect: Joi.boolean().required()
});

const questionSchema = Joi.object({
  question: Joi.string().required(),
  options: Joi.array().items(optionSchema).min(1).required()
});

const quizUpdateValidations = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  questions: Joi.array().items(questionSchema).min(1).required()
});
// function to update a quiz
router.patch('/', validate(quizUpdateValidations), async (req, res) => {
  try {
    const { title, description, questions } = req.body;
    const { quizId } = req.params;

    const quizExists = await Quiz.findOne({ where: { id: quizId } });
    if (!quizExists) {
      return output(res, 404, 'Quiz not found', null, 'NOT_FOUND');
    }

    // Update the quiz
    await db.transaction(async (t) => {
      await quizExists.update({ title, description }, { transaction: t });

      // Update or create questions
      await Promise.all(questions.map(async (questionData) => {
        const { question, options } = questionData;
        let existingQuestion = await Question.findOne({ where: { quizId, question } });

        if (existingQuestion) {
          await existingQuestion.update({ question }, { transaction: t });

          await Promise.all(options.map(async (optionData) => {
            const { option, isCorrect } = optionData;
            const existingOption = await Option.findOne({ where: { questionId: existingQuestion.id, option } });

            if (existingOption) {
              await existingOption.update({ option, isCorrect }, { transaction: t });
            } else {
              await Option.create({ questionId: existingQuestion.id, option, isCorrect }, { transaction: t });
            }
          }));
        } else {
          existingQuestion = await Question.create({ quizId, question }, { transaction: t });

          await Promise.all(options.map(async (optionData) => {
            const { option, isCorrect } = optionData;
            await Option.create({ questionId: existingQuestion.id, option, isCorrect }, { transaction: t });
          }));
        }
      }));
    });

    return output(res, 200, 'Quiz updated successfully', null, null);
  } catch (error) {
    return output(res, 500, error.message || error, null, 'SERVER_ERROR');
  }
});

export default router;
