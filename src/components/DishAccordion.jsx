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
  const dishData = new Array(8).fill(null)


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
                    {dishData.map(() => {
                        return (
                            <DishCard />  
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
