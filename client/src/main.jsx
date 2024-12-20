import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import Homepage from "./pages/Homepage";
import Signuppage from "./pages/Signuppage";
import Errorpage from "./pages/Errorpage";
import Loginpage from "./pages/Loginpage";
import ProtectedRoute from "./components/protectedRoute";
import Dashboard from "./pages/Dashboardpage";
import Weatherpage from "./pages/Weatherpage";
import Stockspage from "./pages/Stockspage";
import Cryptopage from "./pages/Cryptopage";
import Forecastpage from "./pages/Forcastpage";
import "../main.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <Errorpage />,
  },

  {
    path: "/signup",
    element: <Signuppage />,
  },

  {
    path: "/login",
    element: <Loginpage />,
  },

  {
    path: "/dashboard",
    element: <ProtectedRoute element={Dashboard} />,
    children: [
      {
        path: "/dashboard/weather",
        element: <ProtectedRoute element={Weatherpage} />,
      },
      
      {
        path: "/dashboard/forecast",
        element: <ProtectedRoute element={Forecastpage} />,
      },

      {
        path: "/dashboard/stocks",
        element: <ProtectedRoute element={Stockspage} />,
      },

      {
        path: "/dashboard/crypto",
        element: <ProtectedRoute element={Cryptopage} />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
