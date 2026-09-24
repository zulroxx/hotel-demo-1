import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import RoomDetail from "./pages/RoomDetail";
import Checkout from "./pages/Checkout";
import Confirmation from "./pages/Confirmation";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "rooms", element: <Rooms /> },
      { path: "rooms/:slug", element: <RoomDetail /> },
      { path: "checkout", element: <Checkout /> },
      { path: "confirmation", element: <Confirmation /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);
