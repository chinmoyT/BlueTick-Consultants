import React from 'react'

const BlogComponent = ({title, body, redirectLink}) => {
  return (
    <div className="container mx-auto px-4 py-8 flex justify-center">
  <div className="bg-white shadow-md rounded-lg p-6 w-auto hover:bg-gray-100 max-w-md">
    <h2 className="text-lg font-bold mb-4">{title}</h2>
    <p className="text-gray-700 mb-4">{body}</p>
    <div className="flex justify-center"> 
      <a
        href={redirectLink}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Learn More
      </a>
    </div>
  </div>
</div>

  )
}

export default BlogComponent
