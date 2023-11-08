import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData, useNavigate } from "react-router-dom";
import { authcontext } from "../../Authprovider/Authprovider";
import Swal from "sweetalert2";

const Foodpurchase = () => {
  const navigate = useNavigate();
  const loader = useLoaderData();
  const { user } = useContext(authcontext);
  const { _id, Name, Category, Image, Origin, Quantity, Price, Description } =
    loader;

  const handleorder = (e) => {
    e.preventDefault();
    const form = e.target;
    const foodname = form.foodname.value;
    const date = form.date.value;
    const price = form.price.value;
    const email = form.email.value;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const item = { foodname, date, price, email, name, quantity, Image };
    console.log(item);

    fetch("https://server-side-nine-ashen.vercel.app/purchase", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire("congratulations!", "your order confirm!", "success");
      });
  };

  return (
    <div className="h-[] flex items-center justify-center">
      <Helmet>
        <title>food purchase</title>
      </Helmet>
      {Quantity == 0 ? (
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "this item not available now",
        })
      ) : (
        <div className="  mt-6 overflow-hidden bg-white  items-center flex justify-center dark:bg-gray-800 lg:">
          <form onSubmit={handleorder}>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="mt-4">
                <input
                  defaultValue={Name}
                  className=" w-96 px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  name="foodname"
                  placeholder=" food name"
                  required
                  type="name"
                />
              </div>

              <div className="mt-4">
                <input
                  placeholder="date"
                  className="w-96  px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  name="date"
                  type="date"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="mt-4">
                <input
                  placeholder="price"
                  defaultValue={Price}
                  className="w-96 px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  name="price"
                  type="text"
                />
              </div>

              <div className="mt-4">
                <input
                  placeholder="your email"
                  defaultValue={user.email}
                  className="w-96  px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  name="email"
                  type="email"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="mt-4">
                <input
                  placeholder="name"
                  defaultValue={user.displayName}
                  className="w-96  px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  name="name"
                  type="name"
                />
              </div>

              <div className="mt-4">
                <input
                  placeholder="quantity"
                  defaultValue={Quantity}
                  className="w-96  px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  name="quantity"
                  type="text"
                />
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
              >
                confirm order
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Foodpurchase;
