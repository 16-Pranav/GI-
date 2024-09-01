/* eslint-disable react/prop-types */

import { useCart } from '../Components/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, incrementQuantity, decrementQuantity, removeFromCart, clearCart } = useCart();

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.quantity * parseFloat(item.price.replace('Rs. ', '')), 0);
  };

  const deliveryFee = calculateSubtotal() < 500 ? 40 : 0;

  return (
    <div className="container mx-auto mt-2 p-4 mb-8">
      <h2 className="text-3xl font-semibold text-center mb-8">Your Cart</h2>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:space-x-8">
        <div className="bg-white shadow-lg rounded-lg p-6 lg:w-2/3">
          {cart.length === 0 ? (
            <p className="text-center text-xl">Your cart is empty</p>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-gray-600">{item.price}</p>
                      <div className="flex items-center mt-2">
                        <button
                          onClick={() => decrementQuantity(item.id)}
                          className="px-2 py-1 bg-gray-200 rounded-lg"
                        >
                          -
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button
                          onClick={() => incrementQuantity(item.id)}
                          className="px-2 py-1 bg-gray-200 rounded-lg"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                onClick={clearCart}
                className="bg-red-500 text-white w-full py-2 rounded mt-4"
              >
                Clear Cart
              </button>
            </div>
          )}
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 lg:w-1/3 mt-8 lg:mt-0">
          <h3 className="text-xl font-semibold mb-4 text-center">Order Summary</h3>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>Rs. {calculateSubtotal()}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Delivery Fee</span>
            <span>Rs. {deliveryFee === 0 ? 'Free' : deliveryFee}</span>
          </div>
          <div className="flex justify-between font-semibold text-xl">
            <span>Total</span>
            <span>Rs. {(calculateSubtotal() + deliveryFee).toFixed(2)}</span>
          </div>
          <Link to={"/checkout-page"}>
          <button className="bg-green-500 text-white w-full py-2 rounded mt-12 position-fixed">Proceed to Checkout</button>
          </Link>
          <Link to={"/product-page"}>
            <button className="bg-blue-500 text-white w-full py-2 rounded mt-2">Continue Shopping</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
