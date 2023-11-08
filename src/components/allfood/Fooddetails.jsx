import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { authcontext } from '../../Authprovider/Authprovider';
import { Helmet } from 'react-helmet';

const Fooddetails = () => {
    const loader=useLoaderData()
    const {_id,Name,Category,Image,Origin,Quantity,Price,Description,email}=loader

    const { user  } = useContext(authcontext);
    return (
        <div>
          <Helmet><title>food details</title></Helmet>
            <div className="flex items-center justify-center w-8full">
          
        <div className="w-full p-4">
          <div className="flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl card">
          <img src={Image} className="object-cover object-center w-auto" />

            <div className="prod-title">
              <p className="text-2xl mt-3 font-bold text-gray-900 uppercase">
                {Name}
              </p>
              <p className="text-2xl mt-3 font-medium text-gray-900 uppercase">
                {Category}
              </p>

              <p className="text-xl mt-3 font-medium text-gray-900 uppercase">
               origin: {Origin}
              </p>
              <p className="text-base mt-3 font-normal text-gray-900 uppercase">
               made by: {email? email:'classico italiano'}
              </p>
              <p className="text-sm text-gray-400 uppercase"></p>
            </div>
            <div className="prod-img flex flex-col md:flex-row  mt-3 gap-4 mb-7">
              {/* <img src={Image} className="object-cover object-center w-64" /> */}
              <p className=" ">{Description}</p>
            </div>
            <div className="grid gap-10 prod-info">
              
              <div className=" flex flex-col items-center justify-between text-orange-600 md:flex-row">
                <p className="text-xl font-bold">{Price} </p>
                <Link to={`/purchase/${_id}`}><button
            
            className=" px-6 py-2 uppercase transition duration-200 ease-in border-2 border-orange-500 rounded-full hover:bg-orange-600 hover:text-white focus:outline-none"
          >
            order
          </button>
          </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Fooddetails;