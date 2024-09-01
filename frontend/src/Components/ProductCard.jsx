/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useCart } from '../Components/CartContext';
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {

  const [quantity, setQuantity] = useState(1);
  const [showQuantityControls, setShowQuantityControls] = useState(false);
  const { addToCart, incrementQuantity, decrementQuantity, cart } = useCart();

  useEffect(() => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setQuantity(existingProduct.quantity);
      setShowQuantityControls(true);
    } else {
      setQuantity(1);
      setShowQuantityControls(false);
    }
  }, [cart, product]);

  const handleAddToCart = () => {
    addToCart(product);
    setShowQuantityControls(true);
  };

  const handleIncrementQuantity = () => {
    incrementQuantity(product.id);
    setQuantity(quantity + 1);
  };

  const handleDecrementQuantity = () => {
    const newQuantity = quantity - 1;
    if (newQuantity <= 0) {
      setShowQuantityControls(false);
    }
    decrementQuantity(product.id);
    setQuantity(Math.max(0, newQuantity));
  };

  return (
    <div className="w-full">
      <div className="h-[400px] w-[250px] bg-white border border-solid rounded-lg overflow-hidden hover:shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 flex flex-col justify-between">
        <Link to={`/AboutProduct/${product.id}`} state={product}>
        <img src={product.image} alt={product.name} className="w-full h-[225px] border border-solid overflow-hidden" />
        <div className="mt-3 px-4 flex-grow">
          <h1 className="font-extrabold text-xl text-fit whitespace-nowrap overflow-clip">{product.name}</h1>
          <h3 className="mt-2 font-light text-xs">{product.description}</h3>
          <h2 className="mt-2 text-xl font-extrabold">{product.price}</h2>
        </div>
        </Link>
        {!showQuantityControls ? (
          <div className="flex justify-center mt-4 mb-4">
            <button onClick={handleAddToCart} className="w-[150px] bg-gradient-to-r from-green-800 to-blue-900 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300">
              Add to Cart
            </button>
          </div>
        ) : (
          <div className="flex justify-center mt-4 mb-4">
            <button onClick={handleDecrementQuantity} className="w-8 h-8 bg-gray-200 text-gray-700 flex justify-center items-center rounded-full">
              -
            </button>
            <span className="mx-4">{quantity}</span>
            <button onClick={handleIncrementQuantity} className="w-8 h-8 bg-gray-200 text-gray-700 flex justify-center items-center rounded-full">
              +
            </button>
          </div>
        )}
        

      </div>
    </div>
  );
};
 export default ProductCard