import Awards from '@/components/Awards'
import OurMission from '@/components/OurMission'
import WhyChooseUs from '@/components/WhyChooseUs'
import WorkProcess from '@/components/WorkProcess'
import PageBanner from '@/subcomponent/PageBanner'
import React from 'react'

const page = () => {
  return (
    <>
      <PageBanner title={'About Company'} img={'about'}/>
      <OurMission/>
      <WhyChooseUs/>
      <WorkProcess/>
      <Awards/>
    </>
  )
}

export default page

export const metadata = {
  title: "About Company - Empowering visions at Xonier Technology",
  description: "",
};

