import "./App.css";
import { HomePage, ItemsPage, ItemPage, CartPage } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "items",
        element: <ItemsPage />,
      },
      {
        path: "items/:itemId",
        element: <ItemPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
