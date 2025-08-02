import React from 'react'
import categoryImage from "../assets/sample-images/categoryImage.png"
import { Link } from 'react-router-dom'

const Category = () => {
  return (
     <div className='flex flex-col items-center justify-center min-w-[80px] mx-2'>
      <img src={categoryImage} alt="category-image" className='min-h-14 min-w-20 lg:max-w-30 lg:max-h-28 md:max-w-26 md:max-h-20'/>
      <span className='text-md text-textdark font-bold capitalize text-center mt-1 md:text-md lg:text-md'>category</span>
    </div>
  )
}

const CategoryCard = () => {
  const categories = new Array(12).fill(null)
  return (
    <>
      <div className='sticky top-0 z-30 flex flex-col w-[100%] px-4 mb-10 bg-white'>
        <span className='capitalize font-bold text-lg md:text-lg lg:text-xl mb-8 pt-2'>what's on your mind ?</span>
        <div className='flex overflow-x-auto scrollbar-hide w-full'>
          {/* Inner scrollable content */}
          <div className='flex gap-3 px-8 mb-5'>
            {categories.map((item, index) => {
              return (
                <Link to = "/" key={index}><Category /></Link>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default CategoryCard


        {/* {categories.map(item => {
          return (
            <div className='flex flex-col items-center justify-center'>
              <img src={item.img} alt={item.alt} className='h-20 w-20'/>
              <span className='text-md text-textdark font-bold capitalize'>{item.label}</span>
            </div>
          )
        })} */}