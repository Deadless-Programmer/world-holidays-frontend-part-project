import React, { useRef } from 'react'
import { FaFacebook } from 'react-icons/fa'
import { IoLocationOutline, IoLogoInstagram } from 'react-icons/io5'
import { MdOutlineMarkEmailRead, MdOutlinePhone } from 'react-icons/md'
import { PiPhoneDisconnectLight } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from "react-toastify";
const ContactForm = () => {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_g0pyuit', 'template_g60k2wr', form.current, {
        publicKey: 'jiJ4bWfSWdDm_zsZf',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast('Message send to world Holidays team')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };



  return (
    <>
    <ToastContainer/>
    <div className='max-w-7xl mx-auto md:px-6 md:grid grid-cols-12 gap-5 my-16'>
      
        <form ref={form} onSubmit={sendEmail} className='col-span-6 flex flex-col bg-slate-50 p-10'><h1 className='font-playfair text-3xl '>Get in touch with us</h1>
        <div className='md:flex justify-between items-center md:w-full gap-5 mt-10'>
        <input className='md:w-64 w-full h-12 p-2 outline-none border ' type="text " name="form_name" placeholder='name'/>
        <input className='md:w-64 w-full h-12 p-2 outline-none border mt-5 md:mt-0' type="email" name="form_email" placeholder='email'/>
        </div>
        <input className=' h-12 p-2 outline-none border mt-5' type="text" name="form_subject" placeholder='subject'/>
        <textarea className=' h-12 p-2 outline-none border mt-5' type="text" name="form_meassage" placeholder='meassage' />
        <button type="submit" value="Send" className='border px-3 py-2 text-center w-28 mt-5 hover:text-orange-500 hover:border-orange-500'>Send</button>
        </form>
        <div className='col-span-6 p-10'>
            <h1 className='font-playfair text-3xl '>Contact Details</h1>
            <p className='font-nunito mt-2'>You can reach us at World holidays by calling or emailing us at Below information. </p>
            <div className='md:grid grid-cols-2 gap-3 mt-10'>
                
            <div className='flex items-center gap-4 '>
            <IoLocationOutline className='border p-1 text-3xl' />
              <div>
              <h2 className='font-medium'>Address</h2>
              <p className='text-xs'>H-57, R-4, Dhaka-1213, Bangladesh</p>
              </div>
            </div>
            <div className='flex items-center gap-4 mt-4 md:mt-0'>
            <MdOutlinePhone  className='border p-1 text-3xl' />
              <div>
              <h2 className='font-medium'>Mobile</h2>
              <p className='text-xs'>+88 0197 0500188-95</p>
              </div>
            </div>
            <div className='flex items-center gap-4 mt-4 md:mt-0'>
            <MdOutlineMarkEmailRead className='border p-1 text-3xl' />
              <div>
              <h2 className='font-medium'>Email</h2>
              <p className='text-xs'>worldholidaysbd@yahoo.com</p>
              </div>
            </div>
            <div className='flex items-center gap-4 mt-4 md:mt-0'>
            <PiPhoneDisconnectLight className='border p-1 text-3xl' />
              <div>
              <h2 className='font-medium'>Tell</h2>
              <p className='text-xs'>+8802 222276207-208</p>
              </div>
            </div>
            </div>
            <div className='border p-5 mt-10 flex items-center justify-between gap-5'>
                <h1>Social media</h1>
                <div className='flex items-center gap-3  '>
                    <Link to='https://www.facebook.com/WorldHolidaysTours/' className='text-2xl'> <FaFacebook /> </Link>
                    <Link to='https://www.instagram.com/world_holidays/' className='text-2xl'> <IoLogoInstagram /> </Link>
                </div>
            </div>
        </div>
      
    </div>
    </>
  )
}

export default ContactForm;