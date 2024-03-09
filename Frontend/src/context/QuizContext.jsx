/* eslint-disable no-case-declarations */
/* eslint-disable react/prop-types */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from "react";

export const QuizContext = createContext();

const initialState = {
  quizzes: [],
  // 'loading', 'error', 'ready', 'active', 'finished'
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
};

const SECS_PER_QUESTION = 30;

function quizReducer(state, action) {
  switch (action.type) {
    case "quiz/loaded":
      return {
        ...state,
        questions: action.payload,
        // status: "ready",
      };

    case "dataFailed":
      return { ...state, status: "error" };

    case "start":
      return {
        ...state,
        secondsRemaining: 5 * SECS_PER_QUESTION,
        status: "active",
        // secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      };

    case "newAnswer":
      const currentQuestion = state.questions[state.index];
      const selectedOption = currentQuestion.options[action.payload];
      const isCorrect = selectedOption.isCorrect;

      // Update answer, points, and highscore based on the selected option
      return {
        ...state,
        answer: action.payload,
        points: isCorrect ? state.points + 10 : state.points,
        highscore:
          isCorrect && state.points + 10 > state.highscore
            ? state.points + 10
            : state.highscore,
      };

    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };

    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };

    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };

    case "restart":
      return { ...initialState, quizzes: state.quizzes, status: "ready" };

    case "quizzes/loaded":
      return {
        ...state,
        quizzes: action.payload,
        status: "ready",
      };

    case "quiz/created":
      return {
        ...state,
        quizzes: [action.payload, ...state.quizzes],
      };

    case "quiz/deleted":
      return {
        ...state,
        quizzes: state.quizzes.filter((quid) => quid.id !== action.payload),
      };

    default:
      return state;
  }
}

export function QuizProvider({ children }) {
  const [
    {
      quizzes,
      questions,
      status,
      index,
      answer,
      points,
      highscore,
      secondsRemaining,
    },
    dispatch,
  ] = useReducer(quizReducer, initialState);

  useEffect(
    function () {
      fetch("http://localhost:8000/api/v1/quiz")
        .then((res) => res.json())
        .then((data) =>
          dispatch({ type: "quizzes/loaded", payload: data.data.rows })
        )
        .catch((error) => dispatch({ type: "dataFailed" }));
    },
    [dispatch]
  );

  const getQuiz = useCallback(async function getQuiz(id) {
    try {
      const res = await fetch(`http://localhost:8000/api/v1/quiz/${id}`);
      const data = await res.json();
      dispatch({ type: "quiz/loaded", payload: data.data.questions });
    } catch (error) {
      dispatch({
        type: "dataFailed",
      });
    }
  }, []);

  return (
    <QuizContext.Provider
      value={{
        quizzes,
        questions,
        status,
        index,
        answer,
        points,
        highscore,
        secondsRemaining,
        dispatch,
        getQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuizContext() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("QuizContext was used outside QuizProvider");
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { useQuizContext };
