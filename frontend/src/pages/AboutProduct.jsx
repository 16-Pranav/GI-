/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useCart } from '../Components/CartContext';
import { useParams } from 'react-router-dom';
import { products } from '../constants';

const AboutProduct = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

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

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <>
      <div className="mt-10">
        <div className="container mx-auto flex">
          <div className="flex flex-col mr-4">
            <div className="mb-4 w-[110px] h-[110px]">
              <img src={product.image} alt={product.name} className='' />
            </div>
            <div className="mb-4 w-[110px] h-[110px]">
              <img src={product.image} alt={product.name} className='' />
            </div>
            <div className="mb-4 w-[110px] h-[110px]">
              <img src={product.image} alt={product.name} className='' />
            </div>
            <div className="mb-4 w-[110px] h-[110px]">
              <img src={product.image} alt={product.name} className='' />
            </div>
          </div>
          <div className="mb-4 w-[500px] h-[500px]">
            <img src={product.image} alt={product.name} className='w-full h-full' />
          </div>
          <div className="ml-10">
            <h1 className='font-extrabold text-5xl'>{product.name}</h1>
            <h2 className='mt-10'>{product.description}</h2>
            <h1 className="text-3xl mt-5 font-extrabold">{product.price}</h1>
            {!showQuantityControls ? (
              <div className="flex justify-center mt-4 mb-4">
                <button onClick={handleAddToCart} className="mt-10 w-[450px] bg-gradient-to-r from-green-800 to-blue-900 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300">
                  Add to Cart
                </button>
              </div>
            ) : (
              <div className="flex justify-center mt-4 mb-4">
                <button onClick={handleDecrementQuantity} className="mt-10 w-8 h-8 bg-gray-200 text-gray-700 flex justify-center items-center rounded-full">
                  -
                </button>
                <span className="mt-10 mx-4">{quantity}</span>
                <button onClick={handleIncrementQuantity} className="mt-10 w-8 h-8 bg-gray-200 text-gray-700 flex justify-center items-center rounded-full">
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <h1 className='mt-2 font-extrabold text-3xl'>About the Product</h1>
        <p className='font-serif text-xl font-medium'>
          {/* {product.about} */}
        </p>
      </div>
    </>
  );
};

export default AboutProduct;
