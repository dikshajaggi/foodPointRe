import React from 'react'
import restImage from "../assets/sample-images/punjab-grill.jpg"


const RestCard = () => {
  return (
    <>
      <div className="flex flex-col rounded-exrounded min-w-[250px] max-w-[320px] md:max-w-[350px] lg:max-w-[380px] w-full capitalize shadow shadow-gray-300 mb-10">

        {/* ------------------image------------------ */}
        <div className="w-full relative h-[200px]">
          <img src={restImage} alt="restaurant-image" className="rounded-exrounded w-full h-full object-cover" />
          <div className="w-[100%] absolute bottom-0 bg-success opacity-95 text-white text-md px-2 py-1 rounded flex justify-between font-bold">
            <span> Offers </span>
            <span> 40–50 mins </span>
          </div>
        </div>

        {/* ------------------content------------------ */}
        <div className="flex-[1] mt-2 flex flex-col text-md px-2 pb-2">
          <span className='capitalize md:text-lg lg:text-lg'>tag line</span>
          <span className='capitalize text-lg font-bold md:text-xl lg:text-xl'>restaurant name</span>
          <div className='flex items-center'>
              <span className='md:text-lg lg:text-lg'>4.4</span>
              <span className='md:text-lg lg:text-lg uppercase ml-1'>(43K+)</span>
              <span className='md:text-lg lg:text-lg mr-1 ml-1'>|</span>
              <span className='md:text-lg lg:text-lg capitalize'>location,</span>
              <span className='md:text-lg lg:text-lg lowercase ml-1'>0.8 km</span>
          </div>
          <div className='flex items-center'>
            <span className='md:text-lg lg:text-lg'>cuisine type,</span>
            <span className='md:text-lg lg:text-lg capitalize ml-1'>cuisine origin</span>
            <span className='md:text-lg lg:text-lg mr-1 ml-1'>|</span>
            <span className='md:text-lg lg:text-lg capitalize'>₹ 500</span>
            <span className='md:text-lg lg:text-lg lowercase ml-1'>for two</span>
         </div>
        </div>

      </div>
    </>
  );
};

export default RestCard;
