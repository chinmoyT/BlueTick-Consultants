import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-purple-900 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-around items-center">
        <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-around w-full lg:w-auto mb-4 lg:mb-0">
          <div className="mb-4 lg:mb-0 lg:mr-4">
            <h3 className="text-lg font-semibold mb-2 transition duration-300 ease-in-out hover:underline">SERVICES</h3>
            <ul>
              <li>Remote Developers</li>
              <li>Product Development</li>
            </ul>
          </div>
          <div className="mb-4 lg:mb-0 lg:mr-4">
            <h3 className="text-lg font-semibold mb-2 transition duration-300 ease-in-out hover:underline">PRODUCTS</h3>
            <ul>
              <li>Web Development</li>
              <li>App Development</li>
            </ul>
          </div>
          <div className="mb-4 lg:mb-0 lg:mr-4">
            <h3 className="text-lg font-semibold mb-2 transition duration-300 ease-in-out hover:underline">RESOURCES</h3>
            <ul>
              <li>Blogs</li>
              <li>Case Studies</li>
            </ul>
          </div>
          <div className="mb-4 lg:mb-0">
            <h3 className="text-lg font-semibold mb-2 transition duration-300 ease-in-out hover:underline">CAPABILITIES</h3>
            <ul>
              <li>Front end engineering</li>
              <li>Cloud & DevOps</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-auto">
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-semibold mb-2">Subscribe to our newsletter</h3>
            <div className="flex items-center">
              <input className="px-4 py-2 rounded-md border border-gray-300 placeholder-gray-500 focus:outline-none focus:border-blue-500 hover:bg-gray-100 mr-2" type="email" placeholder="Enter your email" />
              <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
