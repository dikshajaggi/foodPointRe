import React from 'react'
import CartCard from '../components/CartCard'
import RestCard from '../components/RestCard'
import CategoryCard from '../components/CategoryCard'
import { Link } from 'react-router-dom'

// Sample restaurant data
const restaurantData = [
        {
            "deliveryChargeRules": {
                "freeDeliveryUptoKm": 3,
                "perKmChargeBeyondFree": 10
            },
            "_id": "68b6d5a8201de76cc649d6c3",
            "owner": "68885d51df3a69ec26156075",
            "name": "Punjab Grill",
            "address": {
                "city": "Vegas Mall Sector 14, Dwarka",
                "pincode": 110075,
                "state": "New delhi",
                "country": "India",
                "_id": "68b6d5a8201de76cc649d6c4"
            },
            "deliveryRadius": 5,
            "phoneNo": "9889543210",
            "thumbnail": "https://res.cloudinary.com/dqud3sb2i/image/upload/v1756812711/categories/mvtvyltbxdkudlyw0hwz.webp",
            "costForTwo": 2000,
            "etd": 30,
            "isAvailable": true,
            "cuisines": [
                "[\"indian\", \"starters\", \"snacks\", \"tandoori\", \"indian breads\"]"
            ],
            "tags": [],
            "verificationStatus": "verified",
            "createdAt": "2025-09-02T11:31:52.661Z",
            "updatedAt": "2025-09-02T11:31:52.661Z",
            "__v": 0
        }
    ]

const Home = () => {

  return (
    <div className='flex flex-col items-center justify-center md:px-20'>
      {/* <ClearCartAlert />
      <DishAccordion /> */}
     
      <CategoryCard />
      {/* Restaurant Cards Grid */}
      <div className='flex flex-wrap justify-center w-full gap-4 px-4'>
        {restaurantData.map((item, index) => (
            <Link to = {`/restaurant/${item?.name}`} key={index} ><RestCard /></Link>
        ))}
      </div>
      <CartCard />
    </div>
  );
};

export default Home;
