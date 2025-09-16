import React, { useEffect, useState } from 'react';
import CheckoutButton from './CheckoutButton';
import Bin from '../assets/bin-white.svg';
import restThumbnail from "../assets/restThumbnail.svg";
import { Link } from 'react-router-dom';

const RestDishInfo = () => {
  return (
    <div className='flex justify-between items-center text-md font-bold text-white'>
      <img src={restThumbnail} alt="rest-thumbnail-icon" className='hidden md:block rounded-full h-8 w-8 md:mr-6' />
      <div className='flex flex-col'>
        <span>Restaurant Name</span>
        <Link to="/"><span className='font-medium'>View full menu</span></Link>
      </div>
    </div>
  );
};

const CartCard = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Delay to trigger the animation after mounting
    const timeout = setTimeout(() => setShow(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`
        sticky w-full shadow shadow-gray-300 z-50 bg-success text-white
        transition-all duration-500 ease-out md:px-4
        ${show ? 'bottom-4 opacity-100 translate-y-0' : 'bottom-0 opacity-0 translate-y-4'}
      `}
    >
      <div className='flex justify-between items-center w-full h-[64px] p-2'>
        <RestDishInfo />
        <div className='flex justify-between items-center h-full w-auto'>
          <CheckoutButton />
           <img src={Bin} alt="bin-icon" className='hidden md:block rounded-full h-8 w-8 md:ml-6' />
        </div>
      </div>
    </div>
  );
};

export default CartCard;
