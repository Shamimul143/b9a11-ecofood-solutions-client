import { Link, useLoaderData } from "react-router-dom";


const VewFoodDetails = () => {
    const foodDetails = useLoaderData()

    const {_id, foodName, imageUrl, foodQuantity, pickupLocation, expiredDateTime, additionalNotes, name } = foodDetails



    return (



        <div>
            <h2 className="text-center bg-slate-100 text-2xl font-bold py-10 my-10 max-w-7xl mx-auto rounded-lg">Single Food details</h2>
            <div className="card lg:card-side bg-base-100 shadow-xl max-w-7xl mx-auto mt-10">
                <div className="w-1/2 mr-10">
                    <img src={imageUrl} alt="Album" />
                </div>
                <div className="space-y-2 w-1/2">                    
                    <h2 className="card-title"> Donor Information:</h2>
                    <p>Donator Name: {name}</p>
                    <p>Pickup Location: {pickupLocation}</p>
                    <h2 className="card-title mt-8"> Food details:</h2>
                    <h2> Food Name: {foodName}</h2>                    
                    <p>Food Quantity : {foodQuantity}</p>                    
                    <p>Expired Date/Time: {expiredDateTime}</p>
                    <p>Additional Notes: {additionalNotes}</p>
                    <Link to={`/singleFoodDeteils/${_id}`}><button className="btn mt-5" >Request Foods</button></Link>
                </div>
                
            </div>
        </div>
    );
};

export default VewFoodDetails;