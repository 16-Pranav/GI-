import ProductDisplay from "../Components/ProductDisplay";
import CategoryList from "../Components/CategoryList";
import Testimonials from "../Components/Testimonials";
import ShopRedirect from "../Components/ShopRedirect";
import { useAuth } from "../context/auth";

const Home = () => {
  
  return (
    <>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <ShopRedirect />
        <CategoryList />
        <ProductDisplay />
        <Testimonials />
        
      </div>
    </>
  );
};

export default Home;
