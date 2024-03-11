import { Link } from "react-router-dom";
import { useQuizContext } from "../context/QuizContext";

function PageFooter() {
  const { quizzes } = useQuizContext();

  return (
    <footer className="page-footer">
      <p>
        {quizzes.length
          ? `${quizzes.length} ultimate Quizzes to evaluate your skills!`
          : "No quiz to take! Start by creating one."}
      </p>
      <div>
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <Link to="https://quizchallenge2.netlify.app/">
          Link to the hosted App (At NETLIFY)
        </Link>
      </div>
    </footer>
  );
}

export default PageFooter;
