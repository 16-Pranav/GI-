/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import ReactDOM directly
import './index.css';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Login from "./pages/Login"
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import SignUp from './pages/SignUp';
import AllProductsPage from './pages/AllProductsPage';
import CartPage from './pages/CartPage'
import App from './App';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { CartProvider } from './Components/CartContext';
import AboutProduct from './pages/AboutProduct';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// eslint-disable-next-line
const Layout = () => {
  return (
    <>
      <Navbar />
      <div className='max-w-7xl mx-auto pt-20 px-6'>
          <main>
          <Outlet />
          <ToastContainer/>
          </main>
      </div>
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <CartProvider>
        <Layout />
      </CartProvider>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "AllProductsPage", element: <AllProductsPage /> },
      { path: "AboutProduct/:id", element: <AboutProduct /> },
      { path: "Cart", element: <CartPage /> },
      { path: "Login", element: <Login /> },
      { path: "Signup", element: <SignUp /> },
      { path: "About", element: <About /> },
      { path: "Contact", element: <ContactUs /> }
    ]
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
