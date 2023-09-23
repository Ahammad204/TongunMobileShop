import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Fevorites from "../Pages/Fevorites/Fevorites";
import Login from "../Pages/Login/Login";


const myCustomRouter = createBrowserRouter([

    {

        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            
        {

            path:"/",
            element:<Home></Home>

        },{

            path:"/favorites",
            element:<Fevorites></Fevorites>,

        },{

            path:"/login",
            element:<Login></Login>,

        }
    
    
    ]

    }

])

export default myCustomRouter;