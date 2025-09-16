import React from 'react'
import Header2 from '../components/Header2'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const RestLayout = () => {
  return (
    <>
        <Header2 />
        <main className="min-h-screen">
            <Outlet />
        </main>
        <Footer />
    </>
  )
}

export default RestLayout
