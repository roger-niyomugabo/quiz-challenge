import { useEffect } from "react";
import { useQuizContext } from "../context/QuizContext";

function Timer() {
  const { dispatch, secondsRemaining } = useQuizContext();
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(() => {
    const id = setInterval(function () {
      dispatch({ type: "tick" });
    }, 1000);
    //   cleanup function to stop time when comp unmounts
    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;
