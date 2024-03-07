import express from 'express';
import output from '../utils/response';
import { Quiz } from '../db/models/Quiz.model';

const router = express.Router({ mergeParams: true });

// function to delete a quiz
router.delete('/', async (req, res) => {
  try {
    const { quizId } = req.params;
    const quizExists = await Quiz.findOne({ where: { id: quizId } });
    if (!quizExists) {
      return output(res, 400, 'Quiz does not exist', null, 'BAD_REQUEST');
    }
    await quizExists.destroy();
    return output(res, 200, 'Quiz deleted successfully', null, null);
  } catch (error) {
    return output(res, 500, error.message || error, null, 'SERVER_ERROR');
  }
});

// function to update a quiz
router.patch('/update', async (req, res) => {

});

export default router;
