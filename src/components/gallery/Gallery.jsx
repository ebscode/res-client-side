import Aos from 'aos';
import React, { useEffect } from 'react';

const Gallery = () => {
    
    useEffect(()=>{

        Aos.init({duration: 1000});
    
    
    },[])
    return (
        <div data-aos="zoom-in-up">
            <section className="py-6 dark:dark:bg-[#1D232A]">
	<div className="container flex flex-col justify-center p-4 mx-auto">
		<div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
			<img className="object-cover w-full dark:dark:bg-gray-500 aspect-square" src="https://i.ibb.co/Mg7YGv3/photo-1518133683791-0b9de5a055f0-auto-format-fit-crop-q-80-w-1470-ixlib-rb-4-0.jpg" />
			<img className="object-cover w-full dark:dark:bg-gray-500 aspect-square" src="https://i.ibb.co/SxyDqXV/photo-1631206689891-4ea94638d88b-auto-format-fit-crop-q-80-w-1452-ixlib-rb-4-0.jpg" />
			<img className="object-cover w-full dark:dark:bg-gray-500 aspect-square" src="https://i.ibb.co/TwsLYw4/photo-1595295333158-4742f28fbd85-auto-format-fit-crop-q-80-w-1480-ixlib-rb-4-0.jpg" />
			<img className="object-cover w-full dark:dark:bg-gray-500 aspect-square" src="https://i.ibb.co/F30z7KL/photo-1616501268826-ee9731c915d4-auto-format-fit-crop-q-80-w-1470-ixlib-rb-4-0.jpg" />
		</div>
	</div>
</section>
        </div>
    );
};

export default Gallery;