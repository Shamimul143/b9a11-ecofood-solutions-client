import { useContext } from "react";
import { AuthContax } from "../AuthContaxProvider";



const AllAuth = () => {
    const all = useContext(AuthContax)
    return all
};

export default AllAuth;