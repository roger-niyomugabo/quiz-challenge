const API_URL = process.env.API_URL;

export async function getQuizzes() {
  const res = await fetch(`${API_URL}`);

  if (!res.ok) throw Error("Failed getting quizzes");

  const { data } = await res.json();
  return data.rows;
}

export async function getQuiz(quizId) {
  const res = await fetch(`${API_URL}/${quizId}`);

  if (!res.ok) throw Error(`Couldn't find Quiz #${quizId}`);

  const { data } = await res.json();
  return data;
}
