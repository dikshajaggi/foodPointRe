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
  },
{
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
      <Accordion open={open} toggle={toggle} alwaysOpen >
        {sample.map((item, index) => (
          <AccordionItem key={index} className="bg-neutral text-textdark">
            <AccordionHeader targetId={index.toString()} className="bg-neutral text-textdark">
              <span className='font-bold'>Category Name (22)</span>
            </AccordionHeader>
            <AccordionBody accordionId={index.toString()}>
                <div className="grid px-0 md:gap-8 mt-10 mb-10 w-[100%] md:px-4
                  grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {dishData.map((item, idx) => (
                    <DishCard key={idx} item={item} />
                  ))}
                </div>
            </AccordionBody>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}

export default DishAccordion;
