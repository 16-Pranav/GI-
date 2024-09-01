import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Categories } from '../constants';
import '../App.css'// Make sure to import the CSS file

const CategoryList = () => {
  // const [categoryProduct, Categories] = useState([]);
  const [loading] = useState(false);
  const scrollContainerRef = useRef(null);

  const categoryLoading = new Array(13).fill(null);


  useEffect(() => {
    const handleWheel = (event) => {
      if (scrollContainerRef.current) {
        event.preventDefault();
        scrollContainerRef.current.scrollBy({
          left: event.deltaY < 0 ? -800 : 800,
          behavior: 'smooth',
        });
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel);
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <div className='container mx-auto p-4'>
      <h1 className="text-3xl justify-center font-bold text-center mb-5"> Shop By Category</h1>
      <div className='flex items-center gap-4 overflow-x-auto scrollbar-hide' ref={scrollContainerRef}>
        {loading ? (
          categoryLoading.map((_, index) => (
            <div
              className='h-22 w-22 md:w-22 md:h-22 rounded-full overflow-hidden bg-slate-200 animate-pulse'
              key={'categoryLoading' + index}
            ></div>
          ))
        ) : (
          Categories.map((product) => (
            <Link
              to={'/product-category?category=' + product?.category}
              className='cursor-pointer flex-shrink-0'
              key={product?.category}
            >
              <div className='w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden p-4 bg-white flex items-center justify-center transition-transform hover:scale-105'>
                <img
                  src={product?.productImage[0]}
                  alt={product?.category}
                  className='h-full w-full object-cover rounded-full'
                />
              </div>
              <p className='text-center text-xs sm:text-sm md:text-base capitalize mt-2'>
                {product?.category}
              </p>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default CategoryList;



