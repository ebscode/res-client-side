import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Myproductcard from './Myproductcard';

const Myaddedproduct = () => {
    const loader=useLoaderData()
    const {Name,Category,Image,Origin,Quantity,Price,Description,email}=loader
    return (
        <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4'>
            {
                loader?.map(item=><Myproductcard key={item._id} data={item}></Myproductcard>)
            }
        </div>
    );
};

export default Myaddedproduct;