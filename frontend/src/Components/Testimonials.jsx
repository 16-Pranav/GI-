import { testimonials } from '../constants';
import StarRating from './StarRating'; // Adjust the path as necessary



const Testimonials = () => {
  return (
    <div className="bg-blue-100 px-10 py-12 mt-24 rounded-lg mb-24 ">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow mb-4 border border-black">
              <p className="text-lg font-semibold mb-2">{testimonial.name}</p>
              <p className="text-gray-700">{testimonial.review}</p>
              <StarRating rating={testimonial.rating} className ="edit-none"/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;