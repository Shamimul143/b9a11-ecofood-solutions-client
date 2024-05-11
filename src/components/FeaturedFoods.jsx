
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FeaturedFoods = ({ food }) => {

    const { _id, foodName, imageUrl, foodQuantity, pickupLocation, expiredDateTime, additionalNotes, name, userimage } = food

    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img className='h-[300px] rounded-lg p-4' src={imageUrl} alt="Shoes" /></figure>           
            <div className="card-body">
            <div>
                <img className='w-10' src={userimage} alt="image" />
                <p>Donator Name: {name}</p>
            </div>
                <h2 className="card-title"> FoodName: {foodName}</h2>
                <p>FoodQuantity : {foodQuantity}</p>
                <p>Pickup Location: {pickupLocation}</p>
                <p>Expired Date/Time: {expiredDateTime}</p>
                <p>Additional Notes: {additionalNotes}</p>
                <div className=" ">
                    <Link to={`/food/${_id}`}><button className="w-full py-1 px-4 rounded-lg text-white bg-[#478bca]">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

FeaturedFoods.propTypes = {
    food: PropTypes.object

};

export default FeaturedFoods;