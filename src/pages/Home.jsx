import React from 'react'
import CartCard from '../components/CartCard'
import RestCard from '../components/RestCard'
import CategoryCard from '../components/CategoryCard'
import { Link } from 'react-router-dom'
import ClearCartAlert from '../components/ClearCartAlert'
import DishAccordion from '../components/DishAccordion'

// Sample restaurant data
const restaurantData = new Array(12).fill(null)
const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <ClearCartAlert />

      <DishAccordion />
     
      <CategoryCard />
      {/* Restaurant Cards Grid */}
      <div className='flex flex-wrap justify-center w-full gap-4 px-4'>
        {restaurantData.map((item, index) => (
            <Link to = "/" key={index} ><RestCard /></Link>
        ))}
      </div>
      <CartCard />
    </div>
  );
};

export default Home;
