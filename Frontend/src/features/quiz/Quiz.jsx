/* eslint-disable react/prop-types */
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useQuizContext } from "../../context/QuizContext";
import { Link } from "react-router-dom";

function Quiz({ quiz }) {
  const { dispatch } = useQuizContext();
  const handleDelete = async () => {
    const response = await fetch(
      `http://localhost:8000/api/v1/quiz/${quiz.id}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      dispatch({ type: "quiz/deleted", payload: quiz.id });
    }
  };

  return (
    <div className="quiz-details">
      <Link to={`/quiz/${quiz.id}`}>
        <h4>{quiz.title}</h4>
        <p>{quiz.description}</p>
      </Link>
      <p className="date">
        {formatDistanceToNow(new Date(quiz.createdAt), { addSuffix: true })}
      </p>
      <span className="material-symbols-outlined" onClick={handleDelete}>
        delete
      </span>
    </div>
  );
}

export default Quiz;
