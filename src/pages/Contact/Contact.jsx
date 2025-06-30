import React from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import ContactForm from '../../components/Contact/ContactForm/ContactForm'
import Map from '../../components/Contact/Map'
import { Helmet } from 'react-helmet-async'
import ScrollToTop from '../../components/utils/ScrollToTop'

const Contact = () => {
  return (
    <>
    <ScrollToTop />
    <div>
       <Helmet>
           <title>W-holidays | Contact</title>
           </Helmet>
      <PageHeader bgImage={'https://images.unsplash.com/photo-1610703119104-0b00d2b369a1?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} heading={'Contact Us'} paragraph={'Feel Free To Any Query'}/>

      <ContactForm/>
      <Map/>
    </div>
    </>
  )
}

export default Contact