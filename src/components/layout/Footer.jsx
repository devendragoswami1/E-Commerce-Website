import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaRetweet, FaSkype, FaTwitter, FaXbox, FaYoutube } from "react-icons/fa";


function Footer() {
  return (
    <div className='flex sm:justify-between justify-center p-8   bg-neutral-900 text-white flex-wrap gap-4 items-center'>
      <p>
      Copyright © 2024 E-Commerce. Powered by E-Commerce.
      </p>
      <ul className='flex gap-8 items-center justify-center'>
        <li><FaYoutube size={20} className=' cursor-pointer hover:scale-105' /></li>
        <li><FaFacebook size={20} className=' cursor-pointer hover:scale-105' /></li>
        <li><FaInstagram size={20} className=' cursor-pointer hover:scale-105' /></li>
        <li><FaLinkedin size={20} className=' cursor-pointer hover:scale-105' /></li>
        <li><FaTwitter size={20} className=' cursor-pointer hover:scale-105' /></li>
        <li><FaSkype size={20} className=' cursor-pointer hover:scale-105' /></li>
      </ul>
    </div>
  )
}

export default Footer