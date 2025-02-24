import React from 'react'
import { motion } from "motion/react"
const SectionHeading = ({subHeadingTag, headingFirst, heading2nd}) => {
  return (
    <section className="container max-w-7xl p-6 mx-auto ">
	 <p className='font-nunito text-xs  uppercase tracking-widest '>{subHeadingTag}</p>
     <h1 className="text-3xl font-semibold md:text-4xl font-playfair mt-1 uppercase">{headingFirst} <motion.span animate={{color:['#FFA500', '#fbff03','#66ff03']}} transition={{duration:1.5, repeat:Infinity}} >{heading2nd}</motion.span></h1>
      
</section>
  )
}

export default SectionHeading