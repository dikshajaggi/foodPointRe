import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
import DishCard from './DishCard';

function DishAccordion() {
  const sample = new Array(2).fill(null);
  const dishData = [{
    id: 1,
    name: "Paneer Butter Masala",
    price: 249,
    rating: 4.5,
    reviews: 132,
    isVeg: true,
    image: "/assets/sample-images/paneer.jpg"
  },
  {
    id: 2,
    name: "Chicken Biryani",
    price: 299,
    rating: 4.7,
    reviews: 210,
    isVeg: false,
    image: "/assets/sample-images/biryani.jpg"
  }]


  // Initially all open
  const [open, setOpen] = useState(sample.map((_, index) => index.toString()));

  const toggle = (id) => {
    if (open.includes(id)) {
      setOpen(open.filter(o => o !== id)); // close
    } else {
      setOpen([...open, id]); // open
    }
  };

  return (
    <>
      <Accordion open={open} toggle={toggle} alwaysOpen>
        {sample.map((item, index) => (
          <AccordionItem key={index} className="bg-neutral text-textdark">
            <AccordionHeader targetId={index.toString()} className="bg-neutral text-textdark">
              <span className='font-exbold'>Category Name (22)</span>
            </AccordionHeader>
            <AccordionBody accordionId={index.toString()}>
                <div className='flex flex-wrap justify-center w-full gap-8 px-4 mt-10 mb-10'>
                    {dishData.map((item) => {
                        return (
                            <DishCard item={item} />  
                        )
                    })}
                </div>
            </AccordionBody>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}

export default DishAccordion;
