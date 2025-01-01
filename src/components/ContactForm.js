"use client"
import SubHeading from '@/subcomponent/SubHeading'
import React,{useState} from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";


const ContactForm = () => {
    const handleSubmit = ()=>{
        
    }

    const [formData, setFormData] = useState({
        name:"",
        email:"",
        country:"",
        number:"",
        message:""
    })

const handleValue = (e)=>{
    const {name, value} = e.target;
    setFormData({...formData, [name]:value})
}
  return (
    <>
      <div className='max-w-7xl mx-auto pt-8 pb-20 flex gap-10 items-center'>
        <div className='w-[38%] flex flex-col gap-4'>
            <SubHeading heading={'Contact Us'} pos={'start'}/>
            <h2 className='text-4xl font-bold text-cyan-900 pb-5'>Write Us Any Message</h2>
            <p className='text-gray-600 pb-3'>These are the phrases we stay via way of means of in the whole lot we do. Each brand we build, and we create.</p>
            <div className="flex items-center gap-3">
                <Link href={'https://www.linkedin.com/company/xoniertechinc/'} target='_blank' className='bg-cyan-900 h-10 w-10 flex items-center justify-center text-white hover:bg-red-500 transition-all duration-300 hover:translate-y-[-10px]'><FaLinkedinIn className='text-xl ' /></Link>
                <Link href={'https://www.facebook.com/xoniertechInc/'} target='_blank' className='bg-cyan-900 h-10 w-10 flex items-center justify-center text-white hover:bg-red-500 transition-all duration-300 hover:translate-y-[-10px]'><FaFacebookF className='text-xl ' /></Link>
                <Link href={'https://www.instagram.com/xoniertechinc/'} target='_blank' className='bg-cyan-900 h-10 w-10 flex items-center justify-center text-white hover:bg-red-500 transition-all duration-300 hover:translate-y-[-10px]'><FaInstagram className='text-xl ' /></Link>
                <Link href={'https://x.com/i/flow/login?redirect_after_login=%2Fxonier_tech'} className='bg-cyan-900 h-10 w-10 flex items-center justify-center text-white hover:bg-red-500 transition-all duration-300 hover:translate-y-[-10px]'><FaXTwitter className='text-xl ' /></Link>
            </div>
        </div>
        <div className='w-[62%]'>
            <form onSubmit={handleSubmit()}>
                <div className='grid grid-cols-2 gap-5'>
                    <div className='flex flex-col gap-3 '>
                        <label className='text-[#42545e] font-medium tracking-wide' htmlFor="name">Your Name</label>
                        <input className='border-[1px] p-3 border-[#dee2e6] w-full focus-visible:border-[1px] focus-visible:border-red-500 outline-none transition-all' type="text" name='name' value={formData.name} onChange={(e)=>handleValue(e)} placeholder='Your name here' />
                    </div>
                    <div className='flex flex-col gap-3 '>
                        <label className='text-[#42545e] font-medium tracking-wide' htmlFor="email">Your Email</label>
                        <input className='border-[1px] p-3 border-[#dee2e6] w-full focus-visible:border-[1px] focus-visible:border-red-500 outline-none transition-all' type="email" name='email' value={formData.email} onChange={(e)=>handleValue(e)} placeholder='Your email here' />
                    </div>
                    <div className='flex flex-col gap-3 '>
                        <label className='text-[#42545e] font-medium tracking-wide' htmlFor="country">Your Country</label>
                        <input className='border-[1px] p-3 border-[#dee2e6] w-full focus-visible:border-[1px] focus-visible:border-red-500 outline-none transition-all' type="country" name='country' value={formData.country} onChange={(e)=>handleValue(e)} placeholder='Your country here' />
                    </div>
                    <div className='flex flex-col gap-3 '>
                        <label className='text-[#42545e] font-medium tracking-wide' htmlFor="number">Your Number</label>
                        <input className='border-[1px] p-3 border-[#dee2e6] w-full focus-visible:border-[1px] focus-visible:border-red-500 outline-none transition-all' type="number" name='number' value={formData.number} onChange={(e)=>handleValue(e)} placeholder='Your country here' />
                    </div>
                    
                </div>
                <div className='flex flex-col gap-3 py-8'>
                    <label htmlFor="message">Enquiry Details</label>
                    <textarea className='border-[1px] p-3 border-[#dee2e6] w-full focus-visible:border-[1px] focus-visible:border-red-500 outline-none transition-all' name="message" id="message" placeholder='Message' value={formData.message} onChange={(e)=>handleValue(e)} rows={5 }></textarea>
                </div>
                <button disabled={formData.name === "" || formData.email === "" || formData.country === "" || formData.number === "" || formData.message === ""} className='uppercase text-white bg-red-500 py-3 px-8  font-medium flex items-center gap-3 tracking-[1px] disabled:bg-red-400' type='submit'>Send Query <FaArrowRightLong className='text-lg'/></button>
            </form>
        </div>
      </div>
    </>
  )
}

export default ContactForm
