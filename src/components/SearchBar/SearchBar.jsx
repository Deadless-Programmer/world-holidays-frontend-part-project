import React from 'react'

const SearchBar = () => {
  return (
    <div className=' bg-slate-100  h-[280px]  md:h-24 pl-4 pr-4  bg-opacity-40  w-[285px] md:w-fit  flex justify-center items-center '>
        <div className='flex flex-col  md:flex-row  justify-center items-center'>
           <input type="text" className='outline-none p-[19.6px] md:w-64 mr-[1px] font-nunito text-base'  placeholder='Where to ?'/>
            <select className='outline-none p-5  w-64 mr-[1px] font-nunito text-base' name="" id="">
              <option disabled selected className='' value="">Pick your favorite place</option>
              <option className='p-3 outline-none' value="Nepal">Nepal</option>
              <option value="Thailand">Thailand</option>
              <option value="Maldive">Maldive</option>
              <option value="Srilanka">Srilanka</option>
              <option value="Vietnam">Vietnam</option>
            </select>
            <select className='outline-none p-5  w-64 mr-[1px] font-nunito text-base' name="" id="">
              <option disabled selected className='' value="">Duration</option>
              <option value="oneDay">1 Day Tour</option>
              <option value="underFourDaysTour">2-4 Day Tour</option>
              <option value="underSevenDaysTour">5-7 Days Tour</option>
              <option value="tenDaysTour">8-10 Days Tour</option>
              <option value="tenDaysplusTour">10+ Days Tour</option>
            </select>
            <button className='outline-none p-5 w-64 bg-orange-500 hover:bg-orange-800 text-white font-nunito text-base '>Find Now</button>
           </div>
    </div>
  )
}

export default SearchBar