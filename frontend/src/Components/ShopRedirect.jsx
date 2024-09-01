
import { Link } from 'react-router-dom';

const ShopRedirect = () => {
  return (
    <div className=" mt-15 mb-10  bg-cover bg-center h-2/3 flex items-center justify-center text-center text-white" style={{ backgroundImage: 'url("https://your-image-url.com")' }}>
      <div className="bg-blue-100  p-8 rounded-lg text-black border border-solid  overflow-hidden hover:shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2">
        <h1 className="text-2xl md:text-5xl font-bold mb-4">Welcome to GI</h1>
        <p className="text-lg md:text-2xl mb-8">Your one-stop shop for all your organic products and more</p>
        <Link to={"/AllProductsPage"} className="bg-gradient-to-r from-green-800 to-blue-900 hover:bg-green-700 text-white px-6 py-3 rounded-full text-lg">Shop Now</Link>
      </div>
    </div>
  );
};

export default ShopRedirect;