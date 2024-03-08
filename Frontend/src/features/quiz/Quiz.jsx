/* eslint-disable react/prop-types */
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useQuizContext } from "../../context/QuizContext";

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
      dispatch({ type: "DELETE_QUIZ", payload: quiz.id });
    }
  };

  return (
    <div className="quiz-details">
      <h4>{quiz.title}</h4>
      <p>{quiz.description}</p>
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
