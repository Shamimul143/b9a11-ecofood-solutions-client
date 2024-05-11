
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ManageMyFoodDetails = ({item}) => {
    const { _id, foodName, foodQuantity, pickupLocation, expiredDateTime} = item

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/food/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your item has been deleted.",
                                icon: "success"
                            });
                            // const remaining = coffees.filter(cof => cof._id !== _id);
                            // setCoffees(remaining);
                        }
                    })
            }
        });
    }



    return (
        <div>
        <table>
            <tbody>
                {/* row 1 */}
                <tr className="flex justify-evenly pb-1 space-y-3 border-2 lg:w-[1280px]"> 
                    <td>{foodName}</td>
                    <td>{foodQuantity}</td>
                    <td>{pickupLocation}</td>
                    <td>{expiredDateTime}</td>
                    <div className='flex gap-5 '>
                        <Link to={`/updatepage/${_id}`} className='py-1 px-4 rounded-lg text-white bg-[#478bca]'>Update</Link>
                        <button onClick={() => handleDelete(_id)} className='py-1 px-4 rounded-lg text-white bg-[#478bca]'>Delete</button>
                    </div>
                </tr>
            </tbody>
        </table>
    </div>
    );
};

ManageMyFoodDetails.propTypes = {
    item:PropTypes.object
    
};

export default ManageMyFoodDetails;