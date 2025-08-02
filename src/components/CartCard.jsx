import React, { useEffect, useState } from 'react';
import CheckoutButton from './CheckoutButton';
import Bin from './Bin';
import restThumbnail from "../assets/restThumbnail.svg";
import { Link } from 'react-router-dom';

const RestDishInfo = () => {
  return (
    <div className='flex justify-evenly items-center text-md font-bold w-[50%] text-textdark'>
      <img src={restThumbnail} alt="rest-thumbnail-icon" className='rounded-full h-8 w-8' />
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
        fixed left-0 w-full md:hidden shadow shadow-gray-300 bg-white z-50
        transition-all duration-500 ease-out
        ${show ? 'bottom-4 opacity-100 translate-y-0' : 'bottom-0 opacity-0 translate-y-4'}
      `}
    >
      <div className='flex justify-between items-center w-full h-[64px] shadow shadow-gray-300 p-2 rounded-t-lg'>
        <RestDishInfo />
        <div className='flex justify-evenly items-center h-full w-[50%]'>
          <CheckoutButton />
          <Bin />
        </div>
      </div>
    </div>
  );
};

export default CartCard;
