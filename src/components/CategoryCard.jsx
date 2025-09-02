import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../utils/useFetch'
import {getCategories} from "../apis/index"

const Category = ({data}) => {
  const {image, name} = data
  return (
     <div className='flex flex-col items-center justify-between min-w-fit h-28 md:h-32 mx-2'>
      <img src={image} alt="category-image" className='min-h-14 min-w-20 md:max-w-34 md:max-h-32'/>
      <span className='text-md text-textdark font-bold capitalize text-center mt-1 md:text-md lg:text-lg'>{name}</span>
    </div>
  )
}

const CategoryCard = () => {
  const { data, loading, error } = useFetch(getCategories);
  console.log(data, loading, error, "categories")

  if (loading) {
    return <div className="p-4 text-center">Loading categories...</div>;
  }

  if (error) {
    return <div className="p-4 text-center text-red-500">Failed to load categories</div>;
  }

  const categories = data?.data || [];

  return (
    <>
      <div className='sticky top-0 z-30 flex flex-col w-[100%] px-4 mb-10 bg-white mt-16'>
        <p className='capitalize font-extrabold text-lg md:text-[22px] mb-8 pt-2'>Order our best food options</p>
        <div className='flex overflow-x-auto scrollbar-hide w-full mt-6'>
          {/* Inner scrollable content */}
          <div className='flex gap-3 px-8 mb-5'>
            {categories?.map((item, index) => {
              return (
                <Link to = "/" key={index}><Category data={item} /></Link>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default CategoryCard