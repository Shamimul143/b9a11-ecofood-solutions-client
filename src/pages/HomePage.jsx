import { useLoaderData } from "react-router-dom";
import Slider from "../components/Slider";
import FeaturedFoods from "../components/FeaturedFoods";
import { Helmet } from "react-helmet";
import PopularFastFoods from "../components/PopularFastFoods";


const HomePage = () => {

    const foodItems = useLoaderData()


    return (
        <div className="bg-base-100 max-w-7xl mx-auto">
            <Helmet><title>Home</title></Helmet>
            <Slider />
            <div>
                <h2 className="text-3xl font-bold text-center my-5 mt-10">Featured Foods</h2>
                <p className="text-center">Discover our handpicked selection of Featured Foods, curated to tantalize your taste buds and ignite your culinary adventures. <br /> From savory delights to sweet sensations,  each dish is a masterpiece waiting to be savored and celebrated</p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 max-w-7xl mx-auto" >
                {
                    foodItems.map(foods => <FeaturedFoods key={foods._id} food={foods}></FeaturedFoods>)
                }
            </div>
            <PopularFastFoods></PopularFastFoods>
        </div>
    );
};

export default HomePage;