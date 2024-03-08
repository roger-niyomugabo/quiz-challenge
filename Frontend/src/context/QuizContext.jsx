/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";

export const QuizContext = createContext();

function quizReducer(state, action) {
  switch (action.type) {
    case "SET_QUIZ":
      return {
        quizzes: action.payload,
      };

    case "CREATE_QUIZ":
      return {
        quizzes: [action.payload, ...state.quizzes],
      };

    case "DELETE_QUIZ":
      return {
        quizzes: state.quizzes.filter((quid) => quid.id !== action.payload),
      };
    default:
      return state;
  }
}

export function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(quizReducer, { quizzes: null });

  return (
    <QuizContext.Provider value={{ ...state, dispatch }}>
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
