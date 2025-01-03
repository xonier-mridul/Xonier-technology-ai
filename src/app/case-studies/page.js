import CaseStudies from '@/components/CaseStudies'
import Client from '@/components/Client'
import Testimonial from '@/components/Testimonial'
import PageBanner from '@/subcomponent/PageBanner'
import React from 'react'

const page = () => {
  return (
    <>
      <PageBanner title={"case studies"} img={'case'}/>
      <CaseStudies/>
      <Testimonial/>
      <Client/>
    </>
  )
}

export default page

export const metadata = {
  title: "Case Study - Realizing Success Stories with Xonier",
  description: "",
};

