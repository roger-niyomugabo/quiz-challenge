/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useQuizContext } from "../context/QuizContext";

function Question({ quiz }) {
  const { index, questions, getQuiz, dispatch, answer } = useQuizContext();
  const question = questions.at(index);

  useEffect(() => {
    const getQuestions = async () => {
      await getQuiz(quiz.id);
    };

    getQuestions();
  }, [quiz.id, getQuiz]);

  return (
    <div>
      {question && (
        <>
          <h4>{question?.question}</h4>
          <div className="options">
            {question?.options?.map((option, index) => (
              <button
                key={option.id}
                className={`btn btn-option ${
                  index === answer ? "answer" : ""
                } ${
                  answer !== null && option.isCorrect
                    ? "correct"
                    : answer !== null
                    ? "wrong"
                    : ""
                }`}
                disabled={answer !== null}
                onClick={() => dispatch({ type: "newAnswer", payload: index })}
              >
                {option.option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Question;
