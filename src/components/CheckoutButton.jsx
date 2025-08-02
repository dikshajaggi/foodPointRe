import React from 'react'

const CheckoutButton = () => {
  const handleCheckout = () => {

  }
  
  return (
    <>
    <div className='flex flex-col bg-success text-white items-center justify-center h-[44px] w-[130px] p-1 rounded-mdrounded text-md'>
        <div className='flex items-center justify-center'>
            <span>2 items</span>
            <span className='mr-1 ml-1'>|</span>
            <span>₹ 2,345</span>
        </div>
        <div className='font-exbold' onClick={handleCheckout}>Checkout</div>
    </div> 
    </>
  )
}

export default CheckoutButton
