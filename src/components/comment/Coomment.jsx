import React, { useContext, useEffect } from 'react';
import { authcontext } from '../../Authprovider/Authprovider';
import Aos from 'aos';

const Coomment = () => {
    const{user}=useContext(authcontext)
    useEffect(()=>{

        Aos.init({duration: 1000});
    
    
    },[])
    return (
        <div data-aos="zoom-in-up">
            <section class="bg-white dark:bg-[#1D232A]">
    <div class="container px-6 py-10 mx-auto">
        <h1 class="text-2xl font-semibold text-center text-orange-500 capitalize lg:text-3xl dark:text-white">
            What customer saying
        </h1>

        <div class="flex justify-center mx-auto mt-6">
            <span class="inline-block w-40 h-1 bg-orange-500 rounded-full"></span>
            <span class="inline-block w-3 h-1 mx-1 bg-orange-500 rounded-full"></span>
            <span class="inline-block w-1 h-1 bg-orange-500 rounded-full"></span>
        </div>

        <div class="flex items-start max-w-6xl mx-auto mt-16">
            <button title="left arrow" class="hidden p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:block hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <div>
                <p class="flex items-center text-center text-gray-500 lg:mx-8">
                I recently dined at 'classico italiano,' a charming restaurant known for its delectable Italian cuisine. The meal was a true culinary delight, starting with a mouthwatering bruschetta appetizer that featured perfectly toasted bread topped with fresh tomatoes and basil. The main course, a rich and creamy fettuccine Alfredo, was a true standout, with its velvety sauce and perfectly cooked pasta. To end the meal on a sweet note, I savored a divine tiramisu, which was a perfect balance of coffee-soaked ladyfingers and mascarpone. The ambiance was cozy, and the service was impeccable. Savor Bistro is a hidden gem for those seeking an authentic Italian culinary experience
                </p>

                <div class="flex flex-col items-center justify-center mt-8">
                    {/* <img className='rounded-full w-12' src={user.photoURL} alt=""/> */}

                    <div class="mt-4 text-center">
                        {user?.displayName ?<h1 class="font-semibold text-gray-800 dark:text-white">{user?.displayName }</h1>:"gust"}
                        <span class="text-sm text-gray-500 dark:text-gray-400">{user?.email}</span>
                    </div>
                </div>
            </div>

            <button title="right arrow" class="hidden p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:block hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    </div>
</section>
        </div>
    );
};

export default Coomment;