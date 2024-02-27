import React from 'react'


const ConnectPage = () => {
  return (
    <div className="flex flex-wrap justify-between">
  {/* Form */}
  <div className="max-w-full mx-auto p-6 bg-gradient-to-r from-purple-500 to-purple-700 rounded-md shadow-lg mb-6">
  <h2 className="text-3xl hover:underline font-bold text-white mb-4">Let's Connect</h2>
  <p className="text-gray-200 mb-6 font-semibold">Contact our support team or make an appointment with our experts</p>
  <form>
    <div className="mb-4">
      <input
        type="text"
        className="w-full px-4 py-2 rounded-md border border-gray-300 placeholder-gray-500 focus:outline-none focus:border-blue-500 hover:bg-gray-100"
        placeholder="Full Name"
      />
    </div>
    <div className="mb-4">
      <input
        type="email"
        className="w-full px-4 py-2 rounded-md border border-gray-300 placeholder-gray-500 focus:outline-none focus:border-blue-500 hover:bg-gray-100"
        placeholder="Enter valid Email"
      />
    </div>
    <div className="mb-4">
      <textarea
        className="w-full px-4 py-2 rounded-md border border-gray-300 placeholder-gray-500 focus:outline-none focus:border-blue-500 hover:bg-gray-100"
        rows="5"
        placeholder="Enter your message"
      ></textarea>
    </div>
    <div className="text-center">
      <button
        type="submit"
        className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Submit
      </button>
    </div>
  </form>
</div>
</div>

  )
}

export default ConnectPage
