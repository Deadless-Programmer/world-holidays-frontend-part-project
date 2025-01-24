import React from 'react'
import Banner from '../../components/Banner/Banner'
import SearchBar from '../../components/SearchBar/SearchBar';
import WhoAreWe from '../../components/home/WhoAreWe/WhoAreWe';
import PopularTours from '../../components/home/PopularTours/PopularTours';
import NextTour from '../../components/home/NextTour/NextTour';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      
 <div className='md:hidden flex justify-center py-14 '>
 <SearchBar/>
 </div>
      
      <WhoAreWe/>
      <PopularTours/>
      <NextTour/>
     
  </div>
  )
}

export default Home;