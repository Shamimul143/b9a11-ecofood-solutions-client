import Swal from "sweetalert2";
import AllAuth from "../pages/AllAuth";
import { Link, useLoaderData } from "react-router-dom";


const SingleFoodDeteils = () => {

    const { user } = AllAuth()
    const updateItems = useLoaderData()
    const { _id, foodName, imageUrl, foodQuantity, pickupLocation, expiredDateTime, additionalNotes } = updateItems;

    const handleFoodRequest = (e) => {
        e.preventDefault()
        const foodName = e.target.foodName.value;
        const imageUrl = e.target.imageUrl.value;
        const foodQuantity = e.target.foodQuantity.value;
        const pickupLocation = e.target.pickupLocation.value;
        const expiredDateTime = e.target.expiredDateTime.value;
        const additionalNotes = e.target.additionalNotes.value;
        const email = user.email;
        const name = user.displayName;
        const userimage = user.photoURL;

        const requestedFood = { foodName, imageUrl, foodQuantity, pickupLocation, expiredDateTime, additionalNotes, email, name, userimage }
        console.log(requestedFood);

        fetch("https://b9a11-ecofood-solutions-server.vercel.app/foodrequest", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(requestedFood)
        })
            .then(res => res.json())
            .then(data => {
                e.target.reset();
                fetch(`https://b9a11-ecofood-solutions-server.vercel.app/food/${_id}`, {
                    method: 'DELETE'
                })
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Item request successfuly',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }



    return (
        <div className="hero min-h-screen bg-base-200 py-10 ">
            <div className=" flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left py-5">
                    <h1 className="text-5xl font-bold">Food Request</h1>
                </div>
                <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                <Link to={"/myFoodRequest"}>
                    <form onSubmit={handleFoodRequest} className="card-body">
                        {/* input fill 1 */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Food Name</span>
                            </label>
                            <input type="text" name="foodName" defaultValue={foodName} placeholder=" Food Name" className=" input input-bordered" />
                        </div>
                        {/* input fill 2 */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Food image</span>
                            </label>
                            <input type="url" name="imageUrl" defaultValue={imageUrl} placeholder=" Image Url" className=" input input-bordered" />
                        </div>

                        {/* input fill 3 */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Food Quantity</span>
                            </label>
                            <input type="number" name="foodQuantity" defaultValue={foodQuantity} placeholder="Food Quantity" className=" input input-bordered" />
                        </div>
                        {/* input fill 4 */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Pickup Location</span>
                            </label>
                            <input type="text" name="pickupLocation" defaultValue={pickupLocation} placeholder="Pickup Location" className=" input input-bordered" />
                        </div>
                        {/* input fill 5 */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Expired Date/Time</span>
                            </label>
                            <input type="datetime-local" name="expiredDateTime" defaultValue={expiredDateTime} placeholder="Expired Date/Time" className=" input input-bordered" />
                        </div>
                        {/* input fill 6 */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Additional Notes</span>
                            </label>
                            <input type="text" name="additionalNotes" defaultValue={additionalNotes} placeholder="Additional Notes" className=" input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input className="py-1 px-4 rounded-lg text-white bg-[#478bca]" type="submit" value="Food Request" />
                        </div>
                    </form>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleFoodDeteils;