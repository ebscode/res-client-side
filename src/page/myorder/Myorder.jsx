import { useLoaderData } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

import { authcontext } from "../../Authprovider/Authprovider";

const Myorder = () => {
  const { user } = useContext(authcontext);
  // const loader = useLoaderData();
  const [cart, setcart] = useState([]);
  useEffect(() => {
    if (user) {
      fetch(
        `https://restaurant-server-side-three.vercel.app/purchase?email=${user?.email}`,
        { credentials: "include" }
      )
        .then((res) => res.json())
        .then((data) => setcart(data));
    }
  }, [user]);

  const handledelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://restaurant-server-side-three.vercel.app/purchasee/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            const remaining = cart && cart.filter((get) => get._id !== id);
            setcart(remaining);
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>my order</title>
      </Helmet>
      {cart &&
        cart.map((item) => (
          <div key={item._id}>
            <body>
              <div className=" bg-gray-100 pt-20">
                <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                  <div className="rounded-lg md:w-2/3">
                    <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                      <img
                        src={item.Image}
                        alt="product-image"
                        className="w-full rounded-lg sm:w-40"
                      />
                      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                        <div className="mt-5 sm:mt-0">
                          <h2 className="text-lg font-bold text-gray-900">
                            {item.foodname}
                          </h2>

                          <h2 className="text-base font-normal text-gray-900">
                            made by : {item.email}
                          </h2>

                          <h2 className="text-base font-normal text-gray-900">
                            date : {item.date}
                          </h2>
                        </div>
                        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                          <div className="flex items-center space-x-4">
                            <p className="text-sm">{item.price} </p>
                            <button onClick={() => handledelete(item._id)}>
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </body>
          </div>
        ))}
    </div>
  );
};

export default Myorder;
