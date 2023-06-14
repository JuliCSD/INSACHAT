

import React from 'react'
import { XIcon } from '@heroicons/react/solid'
import { useState } from 'react'




const Alert2 = ( {message}) => {


  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const handleCloseBanner = () => {
    setIsBannerVisible(false);
  };

  if (!isBannerVisible) {
  return null;

  }
  return (
    <div className="w-full">
      {/* :ERROR ALERT */}
      <div className="relative mx-2 p-4 flex space-x-2 shadow rounded bg-red-50 tsext-sm">
        {/* :::alert title */}
        <h3 className="whitespace-nowrap text-red-800 font-semibold">Oh mince!</h3>
        {/* :::alert message */}
        <p className="text-red-600 font-medium antialiased">{message}</p>
        {/* :::dismiss button */}
        <button type="button" 
        
        onClick={handleCloseBanner}
        className="group absolute -top-2 -right-2 w-6 h-6 inline-flex justify-center items-center rounded-full bg-red-100 hover:bg-red-600">
          <XIcon className="w-4 h-4 text-red-600 group-hover:text-white" />
          
        </button>
      </div>

    </div>
  )
  }


export default Alert2
