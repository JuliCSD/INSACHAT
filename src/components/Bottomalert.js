import React, { useState } from 'react';
import { ArrowRightIcon, XIcon } from '@heroicons/react/outline';

const Banner2 = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const handleCloseBanner = () => {
    setIsBannerVisible(false);
  };

  if (!isBannerVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 inset-x-0 w-full">
      <div className="relative mx-auto p-6 pr-20 w-full max-w-9xl flex flex-col sm:flex-row justify-center items-start sm:items-center bg-rose-100 bg-opacity-90 text-gray-800">
        {/* :TEXT LARGE SCREEN */}
        <p className="hidden md:block text-base font-medium">Merci de tester insACHAT !</p>
        {/* :LEARN MORE LINK */}
        <a href="/signin" className="flex-shrink-0 mt-2 sm:mt-0 sm:mx-3 inline-flex items-center text-base text-rose-500 font-semibold underline hover:text-green-800">
          Essayer le Sign In !
          <ArrowRightIcon className="relative top-0.5 ml-2 w-4 h-4" />
        </a>
        {/* :CLOSE BUTTON */}
        <button
          className="absolute top-1/2 right-2 p-2 flex justify-center items-center rounded bg-transparent transform -translate-y-1/2 hover:bg-rose-400 hover:text-white"
          onClick={handleCloseBanner}
        >
          <XIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Banner2;