import { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const StarRating = ({ rating }) => {
  const [hover, setHover] = useState(0);

  return (
    <div className="star-rating flex justify-center mt-4">
      {[...Array(5)].map((_, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "text-yellow-500" : "text-gray-300"}
            onClick={() => {}}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(0)}
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
            <path d="M10 15l-5.878 3.09 1.123-6.545-4.755-4.64 6.564-.955L10 0l2.946 5.95 6.564.955-4.755 4.64 1.123 6.545L10 15z" />
            </svg>
          </button>
        );
      })}
    </div>
  );
};

// Define prop types
StarRating.propTypes = {
  rating: PropTypes.number.isRequired, // Rating should be a number and is required
};

export default StarRating;
