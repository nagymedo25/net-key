import { ThemeProvider } from "./context/ThemeContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}