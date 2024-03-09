import { Link } from "react-router-dom";
import { useQuizContext } from "../context/QuizContext";

function PageFooter() {
  const { quizzes } = useQuizContext();

  return (
    <footer className="page-footer">
      <p>{quizzes.length} ultimate Quizzes to evaluate your skills!</p>
      <div>
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <Link to="https://mdbootstrap.com/">Link to the hosted App</Link>
      </div>
    </footer>
  );
}

export default PageFooter;
