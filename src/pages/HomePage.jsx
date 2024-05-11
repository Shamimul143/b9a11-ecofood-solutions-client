import { useLoaderData } from "react-router-dom";
import Slider from "../components/Slider";
import FeaturedFoods from "../components/FeaturedFoods";


const HomePage = () => {

    const foodItems = useLoaderData()


    return (
        <div className="bg-base-100 max-w-7xl mx-auto">
            <Slider />
            <h2 className="text-3xl font-bold text-center my-10">Featured Foods</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 max-w-7xl mx-auto" >
            {
                foodItems.map(foods =>  <FeaturedFoods key={foods._id} food={foods}></FeaturedFoods> )
            }
            </div>
    
        </div>
    );
};

export default HomePage;