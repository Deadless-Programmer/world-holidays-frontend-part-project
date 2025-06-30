import React from 'react'
import OurServices from '../../components/Services/OurServices/OurServices'
import PageHeader from '../../components/PageHeader/PageHeader'
import { Helmet } from 'react-helmet-async'
import ScrollToTop from '../../components/utils/ScrollToTop'

const Services = () => {
  return (
    <>
    <ScrollToTop/>
    <div>
       <Helmet>
           <title>W-holidays | Services</title>
           </Helmet>
      <PageHeader heading={'Services'}  paragraph={'Showcase our services'} bgImage={'https://images.pexels.com/photos/10967604/pexels-photo-10967604.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}/>
      <OurServices/>
    </div>
    </>
  )
}

export default Services