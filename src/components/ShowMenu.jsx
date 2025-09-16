import { useEffect, useState } from "react";

const ShowMenu = () => {
  // this will open a modal having all the names of the categories and on clicking each category the scroll will move to that paticular accordian of the page
   const [show, setShow] = useState(false);
  
    useEffect(() => {
      // Delay to trigger the animation after mounting
      const timeout = setTimeout(() => setShow(true), 50);
      return () => clearTimeout(timeout);
    }, []);

  return (
    <div className={`
      fixed right-40 h-20 w-20 cursor-pointer flex items-center justify-center rounded-full shadow shadow-gray-300 z-50 bg-textdark text-white
      transition-all duration-500 ease-out ${show ? 'bottom-36 translate-y-10' : 'bottom-0 translate-y-4'}
    `}>
        MENU
    </div>
  )
}

export default ShowMenu
