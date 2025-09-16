import React from 'react'
import DishAccordion from "../components/DishAccordion"
import RestIntroCard from '../components/RestIntroCard'
import CartCard from '../components/CartCard'
import ShowMenu from '../components/ShowMenu'

const SpecificRest = () => {
  return (
    <div className='px-6 md:px-24 lg:px-36'>
      <RestIntroCard />
      <DishAccordion />
      {/* <ShowMenu /> */}
      <CartCard />
    </div>
  )
}

export default SpecificRest
