import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Quiz Challenge</h1>
        </Link>
        <nav>
          <div>
            <Link to="/quiz/new">Create Quiz</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
