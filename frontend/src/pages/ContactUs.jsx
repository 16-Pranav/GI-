/* eslint-disable react/no-unescaped-entities */


const ContactUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center  mb-8">Contact Us</h1>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
            <p className="mt-2 text-lg text-gray-500">
              We would love to hear from you! Whether you have a question about our products, pricing, or anything else, our team is ready to answer all your questions.
            </p>
          </div>
          <div className="border-t border-gray-200">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <p className="text-lg text-gray-500 mb-2"><strong>Email:</strong> support@gi-products.com</p>
              <p className="text-lg text-gray-500 mb-2"><strong>Phone:</strong> +123 456 7890</p>
              <p className="text-lg text-gray-500 mb-2"><strong>Address:</strong> 1234 Farmer's Lane, Agricultural City, AG 56789</p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Send Us a Message</h2>
          <form className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-8">
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-lg font-medium text-gray-700">Subject</label>
              <input
                type="text"
                id="subject"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="Subject"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className=" mt-9 w-[150px] h-[40px] inline-flex justify-center items-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-green-800 to-blue-900 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                <span className="">Send Message</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
