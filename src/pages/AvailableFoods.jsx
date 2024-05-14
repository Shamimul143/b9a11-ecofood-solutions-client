import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, } from "react-router-dom";


const AvailableFoods = () => {

    const [availableFoodItems, setAvailableFoodItems] = useState([])

    const [layout, setLayout] = useState(3)
    const [sort, setSort] = useState("")

    const url = (`http://localhost:5000/food?sort=${sort}`)
    useEffect(() => {
        axios.get(url)
            .then(res => {
                setAvailableFoodItems(res.data)
            })

    }, [sort,url])

    console.log(availableFoodItems);
    const handlelayout = () => {
        if (layout === 3) {
            setLayout(2)
        } else {
            setLayout(3)
        }
    }

    return (
        <div className="max-w-7xl mx-auto">
            <Helmet><title>AvailableFoods</title></Helmet>
            <h2 className="text-center  text-2xl font-bold py-10 my-10 max-w-7xl mx-auto rounded-lg">Available Foods</h2>
            <div className="flex justify-center items-center gap-3 mb-3">
                <button onClick={() => handlelayout(!setLayout())} className="btn ">Change Layout </button>

                <div>
                    <select className="btn" onChange={e => {
                        setSort(e.target.value)
                    }}
                        value={sort}
                        name="sort"
                        id="sort"
                    >
                        <option value="">Sort by Expired Date</option>
                        <option value="dsc">Descending Order</option>
                        <option value="asc">Ascending Order</option>
                    </select>
                </div>
            </div>

            <div className={`grid ${layout === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3"} md:grid-cols-2 gap-4 max-w-7xl mx-auto`}>
                {
                    availableFoodItems.map(item => <>    <div className="card  bg-base-100 shadow-xl">
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
                            <div className=" ">
                                <Link to={`/food/${item._id}`}><button className="w-full py-1 px-4 rounded-lg text-white bg-[#478bca]">View Details</button></Link>
                            </div>
                        </div>
                    </div>
                    </>
                    )
                }
            </div>
        </div>
    );
};

export default AvailableFoods;