import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../utils/useFetch'
import {getCategories} from "../apis/index"

const Category = ({data}) => {
  const {image, name} = data
  return (
     <div className='flex flex-col items-center justify-between min-w-[80px] h-32 mx-2'>
      <img src={image} alt="category-image" className='min-h-14 min-w-20 lg:max-w-30 lg:max-h-28 md:max-w-26 md:max-h-20'/>
      <span className='text-md text-textdark font-bold capitalize text-center mt-1 md:text-md lg:text-md'>{name}</span>
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
      <div className='sticky top-0 z-30 flex flex-col w-[100%] px-4 mb-10 bg-white'>
        <span className='capitalize font-bold text-lg md:text-lg lg:text-xl mb-8 pt-2'>what's on your mind ?</span>
        <div className='flex overflow-x-auto scrollbar-hide w-full'>
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