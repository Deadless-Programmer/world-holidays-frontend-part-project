import React from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import ContactForm from '../../components/Contact/ContactForm/ContactForm'

const Contact = () => {
  return (
    <div>
      <PageHeader heading={'Contact Us'} paragraph={'Feel Free To Any Query'}/>

      <ContactForm/>
    </div>
  )
}

export default Contact