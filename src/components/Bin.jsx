import React from 'react'
import binicon from "../assets/bin.svg"

const Bin = () => {
  
  const handleClearCart = () => {

  }

  return (
    <>
    <button className='border-alert border-1 rounded-mdrounded h-[44px] w-[34px] flex justify-center items-center' onClick={handleClearCart}>
        <img src={binicon} alt="bin-icon" className=' h-6 w-6' />
    </button>
    </>
  )
}

export default Bin
