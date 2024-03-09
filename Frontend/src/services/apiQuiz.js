const API_URL = "http://localhost:8000/api/v1";

export async function getQuizzes() {
  const res = await fetch(`${API_URL}/quiz`);

  if (!res.ok) throw Error("Failed getting quizzes");

  const { data } = await res.json();
  return data.rows;
}

export async function getQuiz(quizId) {
  const res = await fetch(`${API_URL}/quiz/${quizId}`);

  if (!res.ok) throw Error(`Couldn't find Quiz #${quizId}`);

  const { data } = await res.json();
  return data;
}
