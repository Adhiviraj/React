import React from 'react';

function Card({username, btntxt = "visit me "}) {
  // console.log("props",props);
  return (
    <div className="max-w-sm bg-gray-900 border border-gray-700 rounded-xl shadow-lg overflow-hidden">
      
      {/* Reliable Unsplash Image */}
      <img 
        className="w-full h-48 object-cover" 
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
        alt="Laptop on a desk" 
      />
      
      {/* Card Content Area */}
      <div className="p-6">
        
        {/* Title */}
        <h5 className="mb-2 text-xl font-bold tracking-tight text-white">
          user name : {username};
        </h5>
        
        {/* Description Text */}
        <p className="mb-5 text-sm text-gray-400 line-clamp-3">
          Learn how to design and develop stunning, responsive web applications using React and Tailwind CSS. Take your frontend skills to the next level today.
        </p>
        
        {/* Button */}
        <a 
          href="#" 
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800 transition-colors"
        >
          {btntxt}
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>

      </div>
    </div>
  );
}

export default Card;