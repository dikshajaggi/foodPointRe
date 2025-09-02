import React from 'react'
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Link } from 'react-router-dom';

const Footer = () => {
   return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-10 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2 list-none m-0 p-0">
              <li><Link to="#" className="hover:text-white">About Us</Link></li>
              <li><Link to="#" className="hover:text-white">Careers</Link></li>
              <li><Link to="#" className="hover:text-white">Blog</Link></li>
              <li><Link to="#" className="hover:text-white">Press</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2 list-none m-0 p-0">
              <li><Link to="#" className="hover:text-white">Help Center</Link></li>
              <li><Link to="#" className="hover:text-white">Safety Center</Link></li>
              <li><Link to="#" className="hover:text-white">Cancellation</Link></li>
              <li><Link to="#" className="hover:text-white">Accessibility</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-2 list-none m-0 p-0">
              <li><Link to="#" className="hover:text-white">Terms</Link></li>
              <li><Link to="#" className="hover:text-white">Privacy</Link></li>
              <li><Link to="#" className="hover:text-white">Cookies</Link></li>
              <li><Link to="#" className="hover:text-white">Licenses</Link></li>
            </ul>
          </div>

          {/* Column 4 - Socials */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Link to="#" className="hover:text-white"><Facebook /></Link>
              <Link to="#" className="hover:text-white"><Twitter /></Link>
              <Link to="#" className="hover:text-white"><Instagram /></Link>
              <Link to="#" className="hover:text-white"><Youtube /></Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-md text-gray-400">
          <p>© {new Date().getFullYear()} FoodPoint. All rights reserved.</p>
          <p className="mt-3 md:mt-0">Made with ❤️ </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer
