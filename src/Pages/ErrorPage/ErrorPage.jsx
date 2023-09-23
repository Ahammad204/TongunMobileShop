import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="h-screen flex justify-center items-center ">
            <div className="hero bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Error.....404</h1>
                        <p className="py-6">Sorry For This Error</p>

                      <Link to={"/"}>

                      <button className="btn btn-primary rounded-lg text-yellow-50 p-3 bg-slate-500">Return Home</button>

                      </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;