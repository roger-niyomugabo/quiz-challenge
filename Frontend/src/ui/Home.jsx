/* eslint-disable react-refresh/only-export-components */
import { useQuizContext } from "../context/QuizContext";
import Quiz from "../features/quiz/Quiz";
import Loader from "./Loader";
// import Message from "./Message";

function Home() {
  const { status, quizzes } = useQuizContext();

  // if (!quizzes.length)
  //   return (
  //     <Message message="Add a quiz by clicking to the create quiz button in the top right corner! 😊" />
  //   );

  return (
    <div className="home">
      {status === "loading" && <Loader />}
      {quizzes !== null &&
        quizzes.map((quiz) => <Quiz key={quiz.id} quiz={quiz} />)}
    </div>
  );
}

export default Home;
