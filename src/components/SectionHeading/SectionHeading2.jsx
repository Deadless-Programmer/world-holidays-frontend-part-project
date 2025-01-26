import React from 'react'

const SectionHeading2 = ({subHeadingTag, headingFirst, heading2nd}) => {
  return (
    <section className=" ">
     <p className='font-nunito text-xs  uppercase tracking-widest '>{subHeadingTag}</p>
     <h1 className="text-3xl font-semibold md:text-4xl font-playfair mt-1 uppercase text-orange-500">{headingFirst} <span className='text-black'>{heading2nd}</span></h1>
      
</section>
  )
}

export default SectionHeading2