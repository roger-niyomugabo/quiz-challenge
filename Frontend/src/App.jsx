import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import CreateQuiz from "./features/quiz/CreateQuiz";
import StartScreen, { loader as quizLoader } from "./ui/StartScreen";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/quiz/new",
        element: <CreateQuiz />,
      },
      {
        path: "/quiz/:quizId",
        element: <StartScreen />,
        loader: quizLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
