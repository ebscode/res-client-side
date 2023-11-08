import { Helmet } from "react-helmet";
import Banner from "../components/banner/Banner";
import Weprovide from "../components/weprovide/Weprovide";
import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import Topselling from "../components/topselling/Topselling";
import Feature from "../components/feature/Feature";
import Tablebooking from "../components/tablebooking/Tablebooking";
import Coomment from "../components/comment/Coomment";
import Gallery from "../components/gallery/Gallery";


const Home = () => {
const loader=useLoaderData();
const [data,setdata]=useState(loader.slice(0,6))
    return (
        <div>
            <Helmet>
                {/* <title>home</title> */}
            </Helmet>
           <Banner></Banner>
           <Weprovide></Weprovide>
           <div className="flex justify-center text-orange-500 font-bold dark:text-white text-4xl  m-8"><h1>Best selling</h1></div>
           <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
           
            {
data?.map(value=><Topselling key={value._id} value={value}></Topselling>)
            }
           
           </div>
           <div className="text-center">
              <Link to={'/allfood'}>
              <button type="button" className="focus:outline-none m-8 btn btn-md text-white bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-600 dark:focus:ring-orange-600">show all</button></Link>
                </div>
                <Tablebooking></Tablebooking>
                <Feature></Feature>
                <Coomment></Coomment>
                <Gallery></Gallery>
        </div>
    );
};

export default Home;