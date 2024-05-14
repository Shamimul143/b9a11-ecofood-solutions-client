import { Link } from "react-router-dom";
import image from "../assets/image/404-error-page-templates.jpg"
import { Helmet } from "react-helmet";
const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen max-w-7xl mx-auto">
            <Helmet><title>Error page</title></Helmet>
            <Link to="/"><img src={image} alt="" /></Link>
            
        </div>
    );
};

export default ErrorPage;