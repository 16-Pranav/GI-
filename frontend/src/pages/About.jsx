/* eslint-disable react/no-unescaped-entities */


const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-3xl font-bold text-gray-900">Empowering Farmers, Delivering Quality</h2>
            <p className="mt-2 text-lg text-gray-500">
              Our mission is to bridge the gap between farmers who grow Geographical Indication (GI) products and consumers who appreciate high-quality, authentic produce. By doing so, we not only provide consumers with the finest products but also ensure that farmers receive fair prices for their hard work.
            </p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-lg font-medium text-gray-500">What are GI Products?</dt>
                <dd className="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
                  Geographical Indication (GI) products are goods that have a specific geographical origin and possess qualities or a reputation that are due to that origin. Examples include Darjeeling tea, Champagne, and Parmigiano Reggiano.
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-lg font-medium text-gray-500">Importance of GI Products</dt>
                <dd className="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
                  GI products are important because they preserve traditional knowledge and cultural heritage, support rural economies, and provide consumers with authentic, high-quality goods.
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-lg font-medium text-gray-500">Obtaining GI Status</dt>
                <dd className="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
                  To obtain GI status, a product must be linked to a specific geographic area, and its unique qualities or reputation must be attributed to that location. The process involves thorough documentation and verification by relevant authorities.
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-lg font-medium text-gray-500">Proof of Originality</dt>
                <dd className="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
                  GI products come with certificates of authenticity that verify their origin. These certificates are issued by recognized authorities and ensure that the products meet stringent quality standards.
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-lg font-medium text-gray-500">Farmer Certification</dt>
                <dd className="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
                  Farmers growing GI products are certified through a rigorous process. We cross-verify their credentials and ensure they adhere to traditional methods. This guarantees that only genuine products are delivered to our consumers.
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-lg font-medium text-gray-500">Direct to Consumer</dt>
                <dd className="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
                  By cutting out middlemen, we enable farmers to sell their products directly to consumers, ensuring they get the best possible return on their efforts.
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-lg font-medium text-gray-500">Community Appreciation</dt>
                <dd className="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
                  The community values the efforts of our farmers, appreciating the dedication and hard work that goes into growing authentic GI products.
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-lg font-medium text-gray-500">Quality and Authenticity</dt>
                <dd className="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
                  We ensure that every product meets the highest standards of quality and authenticity, giving consumers confidence in their purchases.
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="flex items-center mb-4">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Farmer Testimonial"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Rajesh Kumar</h3>
                  <p className="text-sm text-gray-500">GI Product Farmer</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Selling directly to consumers has changed our lives. We are now able to get fair prices for our produce, and the appreciation from the community motivates us to continue our hard work."
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="flex items-center mb-4">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Farmer Testimonial"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Anita Devi</h3>
                  <p className="text-sm text-gray-500">GI Product Farmer</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Our products are reaching a wider audience, and we are being recognized for our dedication to quality. This platform has truly empowered us."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
