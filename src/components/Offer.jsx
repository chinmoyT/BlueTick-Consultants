import React from 'react'
import OfferContainer from './OfferContainer'

const Offer = () => {
    return (
        <div className='mb-10'>
            <div className='text-center md:mb-8 mb-3'>
                <h1>
                    <span className='md:text-7xl mx-2 text-center p-3 font-semibold rounded-2xl text-3xl '>What we offer</span>
                    <span className='md:text-9xl text-purple-800 font-bold text-3xl'>?</span>
                </h1>
            </div>

            {/* Containers */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

                {/* Container 1: */}
                <div>
                    <OfferContainer 
                        title='Explore AI opportunities for your Enterprise'
                        body='Unlock the potential of generative AI by identifying tailored opportunities for 
                        integration within your organization, ensuring a strategic and efficient approach to AI implementation.'
                    />
                </div>

                {/* Container 2:*/}
                <div>
                    <OfferContainer
                        title='Design AI Trust Layer'
                        body='Prioritize data security and build trust in generative AI applications with a dedicated trust layer, 
                        emphasizing privacy-focused solutions that safeguard both organizational and customer data.'
                    />
                </div>

                {/* Container 3: */}
                <div>
                    <OfferContainer
                        title='Scalability-Focused Solutions'
                        body='Streamline and optimize business processes with comprehensive workflow automation, ensuring seamless 
                        integration of AI technologies from inception to execution for increased efficiency and productivity.'
                    />
                </div>

                {/* Container 4:  */}
                <div>
                    <OfferContainer
                        title='End to end Workflow automation'
                        body='Implement cutting-edge, scalable generative AI solutions that not only meet current organizational needs 
                        but also adapt and grow with the evolving demands of your enterprise, providing a future-proof approach to AI integration.'
                    />
                </div>

            </div>

        </div>
    )
}

export default Offer

