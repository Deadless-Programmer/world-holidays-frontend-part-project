import React from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import InternationalPackages from '../../components/Packages/PackagesGallery/InternationalPackages'
import DomesticePackages from '../../components/Packages/PackagesGallery/DomesticePackages'
import { Helmet } from 'react-helmet-async'
import ScrollToTop from '../../components/utils/ScrollToTop'


const Packages = () => {
  return (
    <>
    <ScrollToTop/>
    <div>
       <Helmet>
           <title>W-holidays | Packages</title>
           </Helmet>
        <PageHeader bgImage={'https://images.unsplash.com/photo-1663069219541-476943445f8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} heading={'Packages'} paragraph={'You can choose package as your wish'}/>
       
        <InternationalPackages/>
        <DomesticePackages/>

    </div>
    </>
  )
}

export default Packages