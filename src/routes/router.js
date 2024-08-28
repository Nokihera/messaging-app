import { createBrowserRouter } from "react-router-dom";
import mainLayout from "../components/mainLayout";
const router = createBrowserRouter([
    {
        path: "/",
        element: <mainLayout/>,
        children:[
            {
                
            }
        ]
    },
]);
export default router