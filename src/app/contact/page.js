import ContactForm from '@/components/ContactForm'
import Maps from '@/components/Maps'
import ContactInfoBox from '@/subcomponent/ContactInfoBox'
import PageBanner from '@/subcomponent/PageBanner'
import React from 'react'

const page = () => {
  return (
    <>
    <PageBanner title={'Contact Xonier Technologies'} img={'contact'}/>
    <ContactForm/>
    <ContactInfoBox/>
      <Maps/>
    </>
  )
}

export default page

export const metadata = {
  title: "Contact - Connect with Xonier Technologies",
  description: "Contact us for more information, Xonier Technology",
};

