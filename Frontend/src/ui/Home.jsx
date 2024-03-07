/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import { getQuizzes } from "../services/apiQuiz";
import Quiz from "../features/quiz/Quiz";

function Home() {
  const quizzes = useLoaderData();

  return (
    <div className="home">
      {quizzes !== null &&
        quizzes.map((quiz) => <Quiz key={quiz.id} quiz={quiz} />)}
    </div>
  );
}

export async function loader() {
  const quizzes = await getQuizzes();
  return quizzes;
}

export default Home;
