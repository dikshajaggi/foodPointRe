import React from 'react'
import closeIcon from "../assets/close.svg"

const ClearCartAlert = () => {
    const handleNo = () => {

    }

    const handleYes = () => {
        
    }

    const handleCloseCard  = () => {
      
    }
    
  return (
    <>
      <div className='relative flex flex-col items-center justify-evenly rounded-xl bg-white h-[180px] min-w-[300px] max-w-[400px] p-4 shadow shadow-gray-400'>
        <img src = {closeIcon} alt="close-icon" onClick={handleCloseCard} className='h-8 w-8 absolute top-0 right-0 cursor-pointer' />
        <span className='font-exbold'>Clear Cart?</span>
        <span className='font-bold'>Are you sure you want to clear your cart?</span>
        <div className='w-[100%] flex items-center justify-evenly'>
            <button className='rounded-md bg-white text-primary h-[40px] w-[100px] font-bold text-md border-1 border-primary cursor-pointer' onClick={handleNo}>No</button>
            <button className='rounded-md bg-primary text-white h-[40px] w-[100px] font-bold text-md cursor-pointer' onClick={handleYes}>Yes</button>
        </div>
      </div>
    </>
  )
}

export default ClearCartAlert
