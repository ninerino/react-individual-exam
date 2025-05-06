import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SingleEventPage from "./pages/SingleEventPage/SingleEventPage";
import MainSwiper from "./components/MainSwiper/MainSwiper";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import ConfirmOrderPage from "./pages/ConfirmOrderPage/ConfirmOrderPage";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainSwiper />,
      errorElement: <ErrorPage />
    },
    {
      path: '/events',
      element: <MainSwiper initialSlide={1} />
    },
    {
      path: '/event/:eventId',
      element: <SingleEventPage />,
    },
    {
    path: '/checkout',
    element: <ConfirmOrderPage />
    },
    {
    path: '/orders',
    element: <MainSwiper initialSlide={2} />
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
