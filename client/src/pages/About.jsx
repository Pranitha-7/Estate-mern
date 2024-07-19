import React from 'react'

export default function about() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
        <div className="md:w-1/2">
            <img className="h-full w-full center" src="https://cdn.prod.website-files.com/620ec747459e13c7cf12a39e/625b10a58137b364b18df2ea_iStock-94179607.jpg" alt="Real Estate Image" />
        </div>
        <div className="p-8 md:w-1/2">
            <h1 className="text-2xl font-bold text-gray-900">About Us</h1>
            <p className="mt-4 text-gray-600">
                Welcome to Pariwar Place, where we specialize in providing top-notch real estate services. 
                With years of experience in the industry, we are dedicated to helping you find your dream home or 
                investment property. Our team of expert agents is committed to delivering personalized service, 
                ensuring that every client receives the attention and care they deserve. At Pariwar Place, we pride 
                ourselves on our deep knowledge of the market, our professional integrity, and our unwavering 
                commitment to excellence. Whether you're buying, selling, or renting, we are here to guide you every 
                step of the way.
            </p>
            <div className='p-10 text-pretty text-center text-7xl'>
            <h4 >No of clients</h4>
            <h3 className='p-6'>500K+</h3>
            </div>
        </div>
        </div>
);
}