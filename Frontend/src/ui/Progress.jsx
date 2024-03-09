/* eslint-disable react/prop-types */
import { useQuizContext } from "../context/QuizContext";

function Progress({ quiz, numQuestions }) {
  const { index, points, answer } = useQuizContext();
  const maxPossiblePoints = quiz.questions.reduce(
    (prevValue) => prevValue + 10,
    0
  );
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> /{maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
