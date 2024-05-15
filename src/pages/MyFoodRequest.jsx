import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";


const MyFoodRequest = () => {
    const requestedFoodItems = useLoaderData()

    return (
        <div>
            <Helmet><title>My food request</title></Helmet>
            <h2 className="text-center  text-2xl font-bold py-10 my-10 max-w-7xl mx-auto rounded-lg">Requested Foods</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 max-w-7xl mx-auto">
                {
                    requestedFoodItems.map(item => <>  <div className="card  bg-base-100 shadow-xl">
                        <figure><img className='h-[300px] rounded-lg p-4' src={item.imageUrl} alt="Shoes" /></figure>
                        <div className="card-body">
                            <div>
                                <img className='w-10 rounded-full' src={item.userimage} alt="image" />
                                <p>Donator Name: {item.name}</p>
                            </div>
                            <h2 className="card-title"> FoodName: {item.foodName}</h2>
                            <p>FoodQuantity : {item.foodQuantity}</p>
                            <p>Pickup Location: {item.pickupLocation}</p>
                            <p>Expired Date/Time: {item.expiredDateTime}</p>
                            <p>Additional Notes: {item.additionalNotes}</p>
                        </div>
                    </div>
                    </>
                    )
                }
            </div>
        </div>
    );
};

export default MyFoodRequest;