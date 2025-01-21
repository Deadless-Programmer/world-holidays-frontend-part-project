import React from 'react'
import Banner from '../../components/Banner/Banner'
import SearchBar from '../../components/SearchBar/SearchBar';
import WhoAreWe from '../../components/home/WhoAreWe/WhoAreWe';
import PopularTours from '../../components/home/PopularTours/PopularTours';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      
 <div className='md:hidden flex justify-center py-14 '>
 <SearchBar/>
 </div>
      
      <WhoAreWe/>
      <PopularTours/>
     
  </div>
  )
}

export default Home;