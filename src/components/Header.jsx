import React from 'react'
import Search from './Search'

const Header = () => {
  return (
    <div className='w-full bg-primary text-white px-10 hidden md:flex flex-col items-center justify-center pb-14 '>
      <div className='w-full px-6 py-4 flex justify-between items-center'>
        <img src="logo" alt={"logo"} className=''/>
        <span className="bg-textdark py-3 px-10 rounded-2xl hover:bg-white hover:text-textdark transition font-bold">Sign in</span>
      </div>
      <p className='font-extrabold text-[48px] text-center'>Order food. Discover best restaurants.<br></br>Eat. Repeat. FoodPoint!</p>
      <Search bg="white" textColor="#333" mt ="10px" height="54px" />
    </div>
  )
}

export default Header
