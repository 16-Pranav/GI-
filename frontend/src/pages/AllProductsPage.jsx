/* eslint-disable no-undef */
import ProductCard from "../Components/ProductCard";
import { products } from "../constants";

const AllProductsPage = () => {
  return (
    <>
      <div className="container mx-auto p-4">
        <h2 className=" mt-7 text-3xl font-semibold text-center mb-8">Our Products</h2>
        <div className="mb-10 flex flex-col px-10">
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProductsPage;
