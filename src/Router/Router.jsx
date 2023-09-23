import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Fevorites from "../Pages/Fevorites/Fevorites";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Phone from "../Pages/Phone/Phone";


const myCustomRouter = createBrowserRouter([

    {

        path:"/",
        element:<MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            
        {

            path:"/",
            element:<Home></Home>,
            loader:()=> fetch('/phones.json')

        },{

            path:"/favorites",
            element:<Fevorites></Fevorites>,

        },{

            path:"/login",
            element:<Login></Login>,

        },{

            path:"/phones/:id",
            element:<Phone></Phone>

        }
    
    
    ]

    }

])

export default myCustomRouter;