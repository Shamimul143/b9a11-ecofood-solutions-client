import Swal from "sweetalert2";
// import AllAuth from "../pages/AllAuth";
import { useLoaderData, useNavigate } from "react-router-dom";


const UpdateFood = () => {
    const navigate = useNavigate();
    const updateItems = useLoaderData()
    const { _id, foodName, imageUrl, foodQuantity, pickupLocation, expiredDateTime, additionalNotes } = updateItems;
    // const { user } = AllAuth()

    const handleAddFood = (e) => {
        e.preventDefault()
        const foodName = e.target.foodName.value;
        const imageUrl = e.target.imageUrl.value;
        const foodQuantity = e.target.foodQuantity.value;
        const pickupLocation = e.target.pickupLocation.value;
        const expiredDateTime = e.target.expiredDateTime.value;
        const additionalNotes = e.target.additionalNotes.value;

        const updatedFood = { foodName, imageUrl, foodQuantity, pickupLocation, expiredDateTime, additionalNotes }
        console.log(updatedFood);

        fetch(`https://b9a11-ecofood-solutions-server.vercel.app/food/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedFood)
        })
            .then(res => res.json())
            .then(data => {
                e.target.reset();
                console.log(data);
                if (data.modifiedCount > 0) {
                    navigate("/manageMyFoods")
                    Swal.fire({
                        title: 'success!',
                        text: 'Item update successfuly',
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
                    <h1 className="text-5xl font-bold">Add a Food </h1>
                </div>
                <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                    <form onSubmit={handleAddFood} className="card-body">
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
                            <input className="py-1 px-4 rounded-lg text-white bg-[#478bca]" type="submit" value="Update a Food" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateFood;