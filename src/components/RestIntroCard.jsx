import React from 'react'
import greenStar from "../assets/green-star.svg"
import { Dot, SearchIcon } from 'lucide-react'

const RestInfo = () => {
  return (
    <div className="p-[12px] bg-gradient-to-b from-white to-textlight rounded-2xl h-auto mb-10 shadow-md">
      <div className="flex flex-col h-full w-full rounded-xl bg-white px-4 py-3">
        <div className="flex items-center flex-wrap gap-x-1 gap-y-1 text-base">
          <div className="flex items-center gap-1">
            <img
              src={greenStar}
              alt="green-star-icon"
              className="h-4 w-4 lg:h-5 lg:w-5 mb-3"
            />
            <p className="font-semibold">4.3 (3.2K+ ratings)</p>
          </div>

          <Dot className=" mb-3 text-textdark" />

          <p className="font-semibold">₹500 for two</p>

          <Dot className=" mb-3 text-textdark" />

          <p className="font-semibold text-primary">Cuisine</p>
        </div>

        <div className="mt-3 flex flex-col relative pl-5 border-l border-gray-300 justify-between h-16">
          <div className="text-base font-semibold leading-none">
            <span className="absolute -left-[7px] top-0 h-3 w-3 rounded-full bg-gray-400"></span>
            Outlet <span className="text-gray-500 font-normal">Janpath</span>
          </div>
          <div className="text-base font-semibold leading-none">
            <span className="absolute -left-[7px] bottom-0 h-3 w-3 rounded-full bg-gray-400"></span>
            25–30 mins
          </div>
        </div>
      </div>
    </div>
  )
}


const SearchDishes = () => {

    const handleSearch = () => {

    }

    return (
        <div className='flex items-center justify-center relative'>
            <input
                type="text"
                onChange={handleSearch}
                className="w-full border rounded-2xl px-4 py-2 text-base sm:text-base focus:outline-none shadow-sm"
                placeholder="Search for restaurants & dishes"
            />
            <SearchIcon className='absolute right-4 text-placeholder pointer-events-none w-5 h-5' />
        </div>
    )
}

const RestIntroCard = () => {
  return (
    <div className='py-12'>
      <p className='font-bold text-2xl'>Restaurant Name</p>
      <hr></hr>
      <RestInfo />
      <SearchDishes />
    </div>
  )
}

export default RestIntroCard
