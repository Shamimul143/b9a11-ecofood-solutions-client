import image1 from '../assets/image/Fast-Food-Restaurants.jpg'
import image2 from '../assets/image/intro-1709125773.jpg'
import image3 from '../assets/image/what-is-considered-fast-food.jpg'
import image4 from '../assets/image/1711526862362.jpg'
import image5 from '../assets/image/new-arrivals-from-the.jpg'
import image6 from '../assets/image/Untitled-design-67.jpg'

const PopularFastFoods = () => {
    return (
        <div>
            <div>
                <h2 className="text-3xl font-bold text-center my-5 mt-10">Popular Fast Foods</h2>
                <p className='text-center'>Indulge in the ultimate convenience and flavor with our Popular Fast Foods! From juicy burgers to crispy fries and everything in between, <br /> satisfy your hunger on-the-go with our crowd-pleasing favorites.</p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2'>
                <div className="card w-96 bg-base-100 shadow-xl my-10">
                    <figure><img className='h-[250px] rounded-lg' src={image1} alt="Shoes" /></figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl my-10">
                    <figure><img className='h-[250px] rounded-lg' src={image2} alt="Shoes" /></figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl my-10">
                    <figure><img className='h-[250px] rounded-lg' src={image3} alt="Shoes" /></figure>
                </div>
            </div>

            <div>
                <h2 className="text-3xl font-bold text-center my-5">~ New Arrivals ~</h2>
                <p className='text-center'>Excite your taste buds with our tantalizing New Arrivals! From vibrant flavors to delicious twists on classics, <br /> our latest culinary creations are sure to satisfy your cravings and leave you wanting more</p>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2'>
                <div className="card w-96 bg-base-100 shadow-xl my-10">
                    <figure><img className='h-[250px] rounded-lg' src={image4} alt="Shoes" /></figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl my-10">
                    <figure><img className='h-[250px] rounded-lg' src={image5} alt="Shoes" /></figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl my-10">
                    <figure><img className='h-[250px] rounded-lg' src={image6} alt="Shoes" /></figure>
                </div>
            </div>

        </div>
    );
};

export default PopularFastFoods;