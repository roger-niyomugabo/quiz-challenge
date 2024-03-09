/* eslint-disable react/prop-types */
import { useQuizContext } from "../context/QuizContext";

function NextQuestion({ quiz }) {
  const { answer, dispatch, index } = useQuizContext();
  const numQuestions = quiz.questions.length;

  if (answer === null) return null;
  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
}

export default NextQuestion;
