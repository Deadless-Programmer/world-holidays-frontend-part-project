import React from 'react'

const SectionHeading = ({subHeadingTag, headingFirst, heading2nd}) => {
  return (
    <section className="container max-w-7xl p-6 mx-auto ">
	 <p className='font-nunito text-xs  uppercase tracking-widest '>{subHeadingTag}</p>
     <h1 className="text-2xl font-semibold sm:text-4xl font-playfair mt-1 uppercase">{headingFirst} <span className='text-orange-500 '>{heading2nd}</span></h1>
      
</section>
  )
}

export default SectionHeading