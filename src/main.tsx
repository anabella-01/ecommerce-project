import '/index.css'
import { createBrowserRouter, RouterProvider } from "react-router";
import ReactDOM from "react-dom/client";
import { routes } from "./routes/routes"




const router = createBrowserRouter(routes);

const root = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(root).render(
    <RouterProvider router={router} />
)

