import React, { useContext } from "react";

import { authcontext } from "../../Authprovider/Authprovider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Updateproduct = () => {
  const loader = useLoaderData();

  const {
    _id,
    Name,
    Category,
    Image,
    Origin,
    Quantity,
    Price,
    Description,
    email,
  } = loader;

  const handleupdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const Name = form.Name.value;
    const Image = form.Image.value;
    const Category = form.Category.value;
    const Quantity = form.Quantity.value;
    const Price = form.Price.value;
    const Origin = form.Origin.value;
    const Description = form.Description.value;
    const email = form.email.value;

    const item = {
      Name,
      Category,
      Image,
      Origin,
      Quantity,
      Price,
      Description,
      email,
    };
    console.log(item);

    fetch(`https://restaurant-server-side-three.vercel.app/update/${_id}`, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire("Good job!", "product updated!", "success");
        console.log(data);
      });
  };
  return (
    <div>
      <div className="  mt-6 overflow-hidden bg-white h-[80vh]  items-center flex justify-center dark:bg-gray-800 lg:">
        <form onSubmit={handleupdate}>
          <h1 className="font-semibold text-2xl text-center mb-3">
            update item
          </h1>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="mt-4">
              <input
                defaultValue={Name}
                className=" w-96 px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                name="Name"
                placeholder=" food name"
                required
                type="name"
              />
            </div>

            <div className="mt-4">
              <input
                placeholder="image url"
                defaultValue={Image}
                className="w-96  px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                name="Image"
                type="url"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="mt-4">
              <input
                placeholder="Category"
                defaultValue={Category}
                className="w-96 px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                name="Category"
                type="text"
              />
            </div>

            <div className="mt-4">
              <input
                placeholder="Quantity"
                defaultValue={Quantity}
                className="w-96  px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                name="Quantity"
                type="text"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="mt-4">
              <input
                placeholder="Price"
                defaultValue={Price}
                className="w-96  px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                name="Price"
                type="text"
              />
            </div>

            <div className="mt-4">
              <input
                placeholder="Origin"
                defaultValue={Origin}
                className="w-96  px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                name="Origin"
                type="text"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="mt-4">
              <input
                placeholder="Description"
                defaultValue={Description}
                className="w-96  px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                name="Description"
                type="text"
              />
            </div>

            <div className="mt-4">
              <input
                placeholder="email"
                defaultValue={email}
                className="w-96  px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                name="email"
                type="email"
              />
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
            >
              confirm update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Updateproduct;
