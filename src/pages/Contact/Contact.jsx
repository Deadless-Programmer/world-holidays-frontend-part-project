import React from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import ContactForm from '../../components/Contact/ContactForm/ContactForm'
import Map from '../../components/Contact/Map'

const Contact = () => {
  return (
    <div>
      <PageHeader heading={'Contact Us'} paragraph={'Feel Free To Any Query'}/>

      <ContactForm/>
      <Map/>
    </div>
  )
}

export default Contact