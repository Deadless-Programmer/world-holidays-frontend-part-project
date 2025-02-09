import React from 'react'
import OurServices from '../../components/Services/OurServices/OurServices'
import PageHeader from '../../components/PageHeader/PageHeader'

const Services = () => {
  return (
    <div>
      <PageHeader heading={'Services'}  paragraph={'Showcase our services'} bgImage={'https://images.pexels.com/photos/10967604/pexels-photo-10967604.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}/>
      <OurServices/>
    </div>
  )
}

export default Services