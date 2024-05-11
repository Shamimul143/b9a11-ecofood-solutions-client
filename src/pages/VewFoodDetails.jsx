import { useLoaderData } from "react-router-dom";


const VewFoodDetails = () => {
    const foodDetails = useLoaderData()

    const { foodName, imageUrl, foodQuantity, pickupLocation, expiredDateTime, additionalNotes, name } = foodDetails



    return (



        <div>
            <h2 className="text-center bg-slate-100 text-2xl font-bold py-10 my-10 max-w-7xl mx-auto rounded-lg">Single Food details</h2>
            <div className="card lg:card-side bg-base-100 shadow-xl max-w-7xl mx-auto mt-10">
                <div className="w-1/2 mr-10">
                    <img src={imageUrl} alt="Album" />
                </div>
                <div className="space-y-2 w-1/2">
                    <h2 className="card-title"> FoodName: {foodName}</h2>
                    <p>Donator Image & Name: {name}</p>
                    <p>FoodQuantity : {foodQuantity}</p>
                    <p>Pickup Location: {pickupLocation}</p>
                    <p>Expired Date/Time: {expiredDateTime}</p>
                    <p>Additional Notes: {additionalNotes}</p>
                    <button >request foods</button>
                </div>
                
            </div>
        </div>
    );
};

export default VewFoodDetails;