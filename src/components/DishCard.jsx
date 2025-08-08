import React from 'react'
import dishImage from "../assets/sample-images/dishImage.jpg"
import vegIcon from "../assets/veg.png"
import add from "../assets/add.svg"
import remove from "../assets/remove.svg"
import greenStar from "../assets/green-star.svg"
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../redux/cartReducer'
// import nonVegIcon from "../assets/nonVeg.png"


const DishCard = ({item}) => {
  
  const dispatch = useDispatch()
  const cartReducer  = useSelector((state) => state.cart)
  console.log(cartReducer, "cart")
  const cartItem = cartReducer.find(d => d.id === item.id);
  const qty = cartItem?.qty || 0;


  const handleQtyInc = () => {
    dispatch(addToCart(item))
  }

  const handleQtyDec = () => {
    dispatch(removeFromCart({ id: item.id }))
  }

  return (
    <>
      <div className='flex flex-col h-[270px] w-[150px] md:h-[310px] md:w-[250px] lg:h-[310px] lg:w-[250px] shadow shadow-gray-300 rounded-lg'>
        <img src = {dishImage} alt="dish-image" className = 'h-[55%] w-full object-cover rounded-t-lg' />
        <div className='flex flex-col justify-evenly px-1.5 pt-1'>
          <div className='flex justify-between items-center mb-2'>
            <img src = {vegIcon} alt="veg-nonveg-icon" className='h-4 w-4 md:h-6 md:w-6 lg:h-6 lg:w-6' />
            <div className='font-bold text-md md:text-xl lg:text-xl flex items-center text-success'><img src={greenStar} alt="gree-star-icon" className='h-4 w-4 md:h-6 md:w-6 lg:h-6 lg:w-6' /> 4.4 (21)</div> 
          </div>
          <span className='font-bold capitalize text-md md:text-xl lg:text-xl'>dish name</span>
          <div className='flex justify-between text-md md:text-xl lg:text-xl items-center mt-4'>
            <span className='font-bold md:text-xl lg:text-xl'>₹149</span>
           {
            qty === 0 ? <>
             <button onClick={handleQtyInc} className='rounded-md font-bold p-0.5 w-[60px] h-[25px] md:w-[60px] md:h-[35px] lg:w-[60px] lg:h-[35px] uppercase text-success border-1 border-success text-md md:text-xl lg:text-xl cursor-pointer'>ADD</button>
            </> : <div className='flex items-center justify-evenly border-[2px] border-gray-300 text-md rounded-md h-[25px] w-[70px] md:h-[35px] lg:h-[35px] md:w-[90px] lg:w-[90px]'>
              <button onClick={handleQtyDec}><img src={remove} alt="remove-icon" className='h-4 w-4 md:h-6 md:w-6 lg:h-6 lg:w-6 cursor-pointer'/></button>
              <span className='text-success text-md md:text-xl lg:text-xl font-bold '>{qty}</span>
              <button onClick={handleQtyInc}><img src={add} alt="add-icon" className='h-4 w-4 md:h-6 md:w-6 lg:h-6 lg:w-6 cursor-pointer'/></button>
            </div>
           }
          </div>
        </div>
      </div>
    </>
  )
}

export default DishCard
