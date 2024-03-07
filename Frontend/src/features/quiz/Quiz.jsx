/* eslint-disable react/prop-types */
import formatDistanceToNow from "date-fns/formatDistanceToNow";

function Quiz({ quiz }) {
  return (
    <div className="quiz-details">
      <h4>{quiz.title}</h4>
      <p>{quiz.description}</p>
      <p className="date">
        {formatDistanceToNow(new Date(quiz.createdAt), { addSuffix: true })}
      </p>
    </div>
  );
}

export default Quiz;
