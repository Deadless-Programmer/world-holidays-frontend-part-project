import React from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'


import { Helmet } from 'react-helmet-async'
import ScrollToTop from '../../components/utils/ScrollToTop'

import PopularPackages from '../../components/Packages/PackagesGallery/PopularPackages'


const Packages = () => {
  return (
    <>
    <ScrollToTop/>
    <div>
       <Helmet>
           <title>World Holidays | Packages</title>
           </Helmet>
        <PageHeader bgImage={'https://images.unsplash.com/photo-1663069219541-476943445f8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} heading={'Packages'} paragraph={'You can choose package as your wish'}/>
       
      <PopularPackages/>

    </div>
    </>
  )
}

export default Packages