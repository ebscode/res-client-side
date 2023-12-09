import { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";
import Foodcard from "./Foodcard";
import { Helmet } from "react-helmet";

const Allfood = () => {
  const { count } = useLoaderData();
  const [search, setsearch] = useState("");
  const [currentpage, setcurrentpage] = useState(0);
  const [value, setvalue] = useState([]);
  const [itemperpage, setitemperpage] = useState(7);
  console.log(count);

  const numberOfpages = Math.ceil(count / itemperpage);

  const pages = [...Array(numberOfpages).keys()];

  const handleitemperpage = (e) => {
    console.log(e.target.value);
    const parse = parseInt(e.target.value);
    console.log(parse);
    setitemperpage(parse);
    setcurrentpage(0);
  };

  useEffect(() => {
    fetch(
      `https://restaurant-server-side-three.vercel.app/foods?page=${currentpage}&size=${itemperpage}`
    )
      .then((res) => res.json())
      .then((data) => setvalue(data));
  }, [currentpage, itemperpage]);
  return (
    <div>
      <Helmet>
        <title>all food</title>
      </Helmet>

      <div className="flex  justify-center items-center flex-col">
        <div className="w-full h-screen bg-[url('https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
          <div className="w-full h-full flex  justify-center items-center  bg-black/40 ">
            <span className="text-white text-4xl font-bold w-1/2 text-center">
              search your desire food
              <div className="relative flex mt-6">
                <input
                  onChange={(eve) => {
                    setsearch(eve.target.value);
                  }}
                  type="text"
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-orange-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                  required
                />
                <button
                  className="!absolute right-1 top-1 z-10 select-none rounded bg-orange-600 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md  transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
                  type="button"
                  data-ripple-light="true"
                >
                  search
                </button>
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-orange-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-orange-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-orange-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  search here
                </label>
              </div>
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-9">
        {value

          .filter((val) => {
            if (search == "") {
              return val;
            } else if (
              val.Category.toLowerCase().includes(search.toLowerCase())
            ) {
              return val;
            }
          })
          .map((val) => (
            <Foodcard key={val._id} val={val}></Foodcard>
          ))}
      </div>
      <div className="text-center m-6 flex justify-center gap-2">
        {pages.map((page) => (
          <button
            onClick={() => setcurrentpage(page)}
            className={
              currentpage == page && "btn btn-sm bg-orange-500 text-white"
            }
          >
            {page}
          </button>
        ))}
        <select value={itemperpage} onChange={handleitemperpage} name="" id="">
          <option value="4">4</option>
          <option value="6">6</option>
          <option value="7">7</option>
        </select>
      </div>
    </div>
  );
};

export default Allfood;
