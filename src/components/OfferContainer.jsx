import React from 'react'

const OfferContainer = ({ title, body }) => {
    return (
        <div className="container mx-auto px-4 py-8 flex justify-center">
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-300 max-w-md mx-2 hover:bg-gray-100">
                <div className="px-6 py-4">
                    <h2 className="text-lg font-bold mb-4">{title}</h2>
                    <p className="text-gray-700">{body}</p>
                </div>
            </div>
        </div>

    )
}

export default OfferContainer
