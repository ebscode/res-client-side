import img1 from '../../assets/Take Away-pana.png'
import img2 from '../../assets/Order food-bro.png'
import img3 from '../../assets/Service 24_7-bro.png'
import { useEffect } from 'react';
import Aos from 'aos';

const Feature = () => {
    useEffect(()=>{

        Aos.init({duration: 1000});
    
    
    },[])
    return (
        <div data-aos="zoom-in-up">
<section class="bg-white dark:bg-[#1D232A]">
    <div class="container px-6 py-12 mx-auto">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div>
               
                <img className='w-56' src={img1} alt="" />

                <h1 class="mt-4 text-xl font-bold text-orange-500 dark:text-white">fast delivery</h1>

                <p class="mt-2 text-gray-500 dark:text-gray-400">Couriers use various means of transportation, such as cars, motorcycles, bicycles, or even foot delivery for short distances.</p>
            </div>

            <div>
            <img className='w-56' src={img2} alt="" />

                <h1 class="mt-4 text-xl font-bold text-orange-500 dark:text-white">Online Ordering</h1>

                <p class="mt-2 text-gray-500 dark:text-gray-400">offers takeout or delivery services, provide an online ordering system with a menu and checkout process online services.</p>
            </div>

            <div>
            <img className='w-56' src={img3} alt="" />

                <h1 class="mt-4 text-xl font-bold text-orange-500 dark:text-white">24/7 Support</h1>

                <p class="mt-2 text-gray-500 dark:text-gray-400">What does 24/7 support mean? 24/7 customer support means customers can get help and find answers to questions </p>
            </div>
        </div>
    </div>
</section>
        </div>
    );
};

export default Feature;


