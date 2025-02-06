import React from 'react'
import './OurTeam.css'
const OurTeam = () => {
  return (
    <div className='my-16'>
 <h1 className='text-center font-playfair text-3xl md:text-4xl font-bold'>Our <span className='text-orange-500'>Team</span></h1>
    <div class="contain-er my-10">
       
  <div>
    <div class="content">
      <h2 className='font-playfair'>Jane Doe</h2>
      <span className='font-nunito'>UI & UX Designer</span>
    </div>
  </div>
  <div>
    <div class="content">
      <h2 className='font-playfair'>Alex Smith</h2>
      <span className='font-nunito'>CEO Expert</span>
    </div>
  </div>
  <div>
    <div class="content">
      <h2 className='font-playfair'>Emily New</h2>
      <span className='font-nunito'>Web Designer</span>
    </div>
  </div>
  <div>
    <div class="content">
      <h2 className='font-playfair'>Lisa Boley</h2>
      <span className='font-nunito'>Marketing Coordinator</span>
    </div>
  </div>
</div>
    </div>
  )
}

export default OurTeam