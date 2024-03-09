import { useQuizContext } from "../context/QuizContext";
import { getQuiz } from "../services/apiQuiz";
import { Link, useLoaderData } from "react-router-dom";
import Progress from "./Progress";
import Question from "./Question";
import Footer from "./Footer";
import Timer from "./Timer";
import NextQuestion from "./NextQuestion";
import FinishScreen from "./FinishScreen";
import Loader from "./Loader";
import ErrorQuiz from "./ErrorQuiz";
import Main from "./Main";

function StartScreen() {
  const quiz = useLoaderData();
  const { status, dispatch } = useQuizContext();
  const numQuestions = quiz.questions.length;
  const maxPossiblePoints = quiz.questions.reduce(
    (prevValue) => prevValue + 10,
    0
  );

  return (
    <div className="app">
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <ErrorQuiz />}
        {status === "ready" && (
          <div className="start">
            <h2>Welcome to the {quiz.title}</h2>
            <h3>{numQuestions} questions to test your mastery</h3>
            <h4>The Quiz carries {maxPossiblePoints} Marks!</h4>
            <button
              className="btn btn-ui"
              onClick={() => dispatch({ type: "start" })}
            >
              Get started!
            </button>
            <Link to="/">Back to Home page</Link>
          </div>
        )}
        {status === "active" && (
          <>
            <Progress quiz={quiz} numQuestions={numQuestions} />
            <Question quiz={quiz} />
            <Footer>
              <Timer />
              <NextQuestion quiz={quiz} />
            </Footer>
          </>
        )}
        {status === "finished" && <FinishScreen quiz={quiz} />}
      </Main>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params }) {
  const quiz = await getQuiz(params.quizId);
  return quiz;
}

export default StartScreen;
