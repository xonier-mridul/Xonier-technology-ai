import ContactForm from '@/components/ContactForm'
import Maps from '@/components/Maps'
import ContactInfoBox from '@/subcomponent/ContactInfoBox'
import PageBanner from '@/subcomponent/PageBanner'
import React from 'react'

const page = () => {
  return (
    <>
    <PageBanner title={'Contact Xonier Technologies'} img={'contact'}/>
    <ContactInfoBox/>
    <ContactForm/>
      <Maps/>
    </>
  )
}

export default page
