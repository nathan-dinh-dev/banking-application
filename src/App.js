import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/dashboard", element: <Dashboard /> },
]);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
