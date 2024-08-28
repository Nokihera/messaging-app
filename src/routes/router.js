import { createBrowserRouter } from "react-router-dom";
import signIn from "../pages/signInPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <signIn/>
    },
]);

export default router