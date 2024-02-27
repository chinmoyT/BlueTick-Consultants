import React from 'react';
import telephone from '../assets/telephone.png';
import location from '../assets/location.png';
import emailicon from '../assets/email.png';

const Contact = () => {
    return (
        <div className='relative bg-slate-900 h-screen'>
            
            <div className="absolute top-20 right-4 bg-opacity-80 p-6 rounded-br-3xl rounded-3xl shadow-md border-l-4 border-t-4 border-blue-500 bg-gray-100">
            <h2 className='mb-10 text-2xl lg:text-5xl mt-8 font-bold text-indigo-500 '> <span className='overline'>GET I</span>N TOUCH</h2>
                <div className="flex items-start mb-5">
                    <img src={location} alt="location" className="h-8 mr-3" />
                    <p className="text-black font-semibold">#677, 1st Floor Suite 3663, 13th Cross Road, 27th Main Road, 1st Sector, HSR Layout,<br /> Bengaluru, Karnataka, 560102</p>
                </div>
                <div className="flex items-start mb-5">
                    <img src={telephone} alt="telephone" className="h-8 mr-3" />
                    <p className="text-black font-semibold">+91 9004090513</p>
                </div>
                <div className="flex items-start">
                    <img src={emailicon} alt="telephone" className="h-6 mr-2" />
                     <p className="text-gray-800 font-bold"><a href="mailto:contact@bluetickconsultants.com">contact@bluetickconsultants.com</a></p>
                 </div>
            </div>
        </div>
        
    )
}

export default Contact
