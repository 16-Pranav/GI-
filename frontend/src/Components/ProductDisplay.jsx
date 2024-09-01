/* eslint-disable react/jsx-key */
import { Link } from "react-router-dom";
import { products } from "../constants";

const ProductDisplay = () => {
  return (
    <div className="mt-10 mb-10 flex flex-col px-10">
      <h1 className="text-3xl justify-center font-bold text-center mb-5">Featured Products</h1>
      <div className=" px-35 mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.slice(0,8).map((product, index) => (
          <Link key={index} to={`/AboutProduct/${product.id}`} state={product}>
            <div className="h-[350px] w-[250px] bg-white border border-solid rounded-lg overflow-hidden hover:shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[225px] border border-solid overflow-hidden"
              />
              <div className="mt-3 px-4 flex flex-col ">
                <h1 className="font-extrabold text-xl text-fit whitespace-nowrap overflow-clip ">{product.name}</h1>
                <h3 className="mt-2 font-light text-xs">{product.description}</h3>
                <h2 className="mt-2 text-xl font-extrabold">{product.price}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay;
