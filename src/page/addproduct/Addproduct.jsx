import { useContext } from "react";
import { authcontext } from "../../Authprovider/Authprovider";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const Addproduct = () => {
  const { user } = useContext(authcontext);
  const handleadd = (e) => {
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

    fetch("https://server-side-nine-ashen.vercel.app/foods", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire("good", "product added", "success");
      });

    form.reset();
  };

  return (
    <div>
      <Helmet>
        <title>add product</title>
      </Helmet>
      <div className="  mt-6 overflow-hidden bg-white h-[80vh]  items-center flex justify-center dark:bg-gray-800 lg:">
        <form onSubmit={handleadd}>
          <h1 className="font-semibold text-2xl text-center mb-3">
            add product
          </h1>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="mt-4">
              <input
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
                className="w-96 px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                name="Category"
                type="text"
              />
            </div>

            <div className="mt-4">
              <input
                placeholder="Quantity"
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
                className="w-96  px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                name="Price"
                type="text"
              />
            </div>

            <div className="mt-4">
              <input
                placeholder="Origin"
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
                className="w-96  px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                name="Description"
                type="text"
              />
            </div>

            <div className="mt-4">
              <input
                placeholder="email"
                defaultValue={user.email}
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
              confirm order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addproduct;
