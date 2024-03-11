import { useState, useEffect } from "react";
import { Form, useNavigate, useParams } from "react-router-dom";
import { useQuizContext } from "../../context/QuizContext";

const API_URL = process.env.API_URL;

function UpdateQuiz() {
  const { quizId } = useParams();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    questions: [
      {
        question: "",
        options: [{ option: "", isCorrect: false }],
      },
    ],
  });
  const { dispatch } = useQuizContext();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await fetch(`${API_URL}/${quizId}`);
        const { data } = await response.json();
        if (response.ok) {
          setFormData(data);
        }
      } catch (error) {
        dispatch({ type: "dataFailed" });
      }
    };
    fetchQuizData();
  }, [quizId, dispatch]);

  const handleInputChange = (e, questionIndex) => {
    const { name, value } = e.target;
    const updatedQuestions = [...formData.questions];
    updatedQuestions[questionIndex][name] = value;
    setFormData({ ...formData, questions: updatedQuestions });
  };

  const handleOptionChange = (e, questionIndex, optionIndex) => {
    const { checked } = e.target;
    const updatedOptions = [...formData.questions[questionIndex].options];
    updatedOptions[optionIndex] = {
      ...updatedOptions[optionIndex],
      isCorrect: checked,
    };
    const updatedQuestions = [...formData.questions];
    updatedQuestions[questionIndex].options = updatedOptions;
    setFormData({ ...formData, questions: updatedQuestions });
  };

  const handleOptionTextChange = (e, questionIndex, optionIndex) => {
    const { value } = e.target;
    const updatedOptions = [...formData.questions[questionIndex].options];
    updatedOptions[optionIndex] = {
      ...updatedOptions[optionIndex],
      option: value,
    };
    const updatedQuestions = [...formData.questions];
    updatedQuestions[questionIndex].options = updatedOptions;
    setFormData({ ...formData, questions: updatedQuestions });
  };

  const addQuestion = () => {
    setFormData({
      ...formData,
      questions: [
        ...formData.questions,
        { question: "", options: [{ option: "", isCorrect: false }] },
      ],
    });
  };

  const addOption = (questionIndex) => {
    const updatedQuestions = [...formData.questions];
    updatedQuestions[questionIndex].options.push({
      option: "",
      isCorrect: false,
    });
    setFormData({ ...formData, questions: updatedQuestions });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/${quizId}`, {
        method: "PATCH",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const { data } = await response.json();
        console.log(data);
        dispatch({ type: "quiz/updated", payload: data });
        navigate("/");
      } else {
        dispatch({ type: "dataFailed" });
      }
    } catch (error) {
      dispatch({ type: "dataFailed" });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        required
      />
      <br />
      <label>Description:</label>
      <textarea
        name="description"
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
        required
      />
      <br />
      {formData.questions.map((question, questionIndex) => (
        <div key={questionIndex}>
          <label>Question:</label>
          <textarea
            name="question"
            value={question.question}
            onChange={(e) => handleInputChange(e, questionIndex)}
            required
          />
          <br />
          <label>Mark any of the options as the right answer</label>
          {question.options.map((option, optionIndex) => (
            <div key={optionIndex}>
              <input
                placeholder="Option..."
                type="text"
                name="option"
                value={option.option}
                onChange={(e) =>
                  handleOptionTextChange(e, questionIndex, optionIndex)
                }
                required
              />
              <input
                type="checkbox"
                checked={option.isCorrect}
                onChange={(e) =>
                  handleOptionChange(e, questionIndex, optionIndex)
                }
              />
            </div>
          ))}
          <button type="button" onClick={() => addOption(questionIndex)}>
            Add Option
          </button>
        </div>
      ))}
      <div className="button-group">
        <button type="button" onClick={addQuestion}>
          Add Question
        </button>
        <button type="submit">Update Quiz</button>
      </div>
    </Form>
  );
}

export default UpdateQuiz;
