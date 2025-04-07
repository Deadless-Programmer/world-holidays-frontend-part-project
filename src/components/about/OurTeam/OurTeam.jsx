import React from 'react';
import useTeam from '../../../hooks/useTeam';



const OurTeam = () => {
  const [teamMembers, refetch] = useTeam();
console.log(teamMembers)
  return (
    <div className='my-16'>
      <h1 className='text-center font-playfair text-3xl md:text-4xl font-bold'>
        Our <span className='text-orange-500'>Team</span>
      </h1>
      <div className='flex flex-wrap justify-center gap-4 mt-10 px-4'>
        {teamMembers.map((member, index) => (
         <div
         key={index}
         className='group relative w-36 h-40 overflow-hidden rounded-lg shadow-xl cursor-pointer transition-all duration-500 hover:scale-[1.05] hover:shadow-purple-500'
         style={{
           backgroundImage: `url(${member.img})`,
           backgroundSize: 'cover',
           backgroundPosition: 'center',
         }}
       >
         <div className='absolute bottom-0 left-0 w-full h-full flex flex-col justify-end p-4 text-white bg-gradient-to-t from-[rgba(2,2,46,0.7)] to-transparent opacity-0 translate-y-full transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0'>
           <h2 className='text-sm  font-playfair'>{member.name}</h2>
           <span className='text-xs font-nunito'>{member.designation}</span>
         </div>
       </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;