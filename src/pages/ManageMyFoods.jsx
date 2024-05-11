import { useEffect, useState } from "react";
import AllAuth from "./AllAuth";
import ManageMyFoodDetails from "../components/ManageMyFoodDetails";


const ManageMyFoods = () => {

    const { user } = AllAuth() || {};
    console.log(user);
    const [items, setItems] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/ManageMyFoods/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setItems(data);
            });
    }, [user]);




    return (
        <div className="max-w-7xl mx-auto"> 
        <h2 className="text-center bg-slate-100 text-2xl font-bold py-10 my-10 rounded-lg">Manage My Foods</h2>
        <div className="overflow-x-auto border-2">
            <table className=''>
                {/* head */}
                <thead>
                    <tr className="flex justify-evenly w-[900px] mb-3">
           
                        <th>Food Name</th>
                        <th>Food Quantity</th>
                        <th>Pickup Location</th>
                        <th>Expired Date Time</th>
                    </tr>
                </thead>
            </table>
        </div>
        {
            items.map(item => <ManageMyFoodDetails key={item._id} item={item} ></ManageMyFoodDetails>)
        }
    </div>
    );
};

export default ManageMyFoods;