/* eslint-disable react-refresh/only-export-components */
import { useQuizContext } from "../context/QuizContext";
import Quiz from "../features/quiz/Quiz";
import { useEffect } from "react";

function Home() {
  const { quizzes, dispatch } = useQuizContext();
  useEffect(() => {
    const fetchQuizzes = async () => {
      const res = await fetch("http://localhost:8000/api/v1/quiz", {});
      const { data } = await res.json();
      if (res.ok) {
        dispatch({ type: "SET_QUIZ", payload: data.rows });
      }
    };

    fetchQuizzes();
  }, [dispatch]);

  return (
    <div className="home">
      {quizzes !== null &&
        quizzes.map((quiz) => <Quiz key={quiz.id} quiz={quiz} />)}
    </div>
  );
}

export default Home;
