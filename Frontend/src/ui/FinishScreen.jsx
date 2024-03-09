/* eslint-disable react/prop-types */
import { useQuizContext } from "../context/QuizContext";

function FinishScreen({ quiz }) {
  const { points, highscore, dispatch } = useQuizContext();
  // derived state
  const maxPossiblePoints = quiz.questions.reduce(
    (prevValue) => prevValue + 10,
    0
  );
  const percenatge = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percenatge === 100) emoji = "🥇";
  if (percenatge >= 50 && percenatge < 80) emoji = "🎉";
  if (percenatge >= 80 && percenatge < 100) emoji = "😊";
  if (percenatge >= 0 && percenatge < 50) emoji = "😔";
  if (percenatge === 0) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ({Math.ceil(percenatge)}%)
      </p>
      <p className="highscore">(high score: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
