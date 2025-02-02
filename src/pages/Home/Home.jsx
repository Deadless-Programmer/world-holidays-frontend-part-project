import React from 'react'
import Banner from '../../components/Banner/Banner'
import SearchBar from '../../components/SearchBar/SearchBar';
import WhoAreWe from '../../components/home/WhoAreWe/WhoAreWe';
import PopularTours from '../../components/home/PopularTours/PopularTours';
import NextTour from '../../components/home/NextTour/NextTour';
import PopularDestination from '../../components/home/PopularDestination/PopularDestination';
import DomesticTicket from '../../components/home/DomesticTicket/DomesticTicket';
import OverseasTicket from '../../components/home/OverseasTicket/OverseasTicket';
import CorporateService from '../../components/home/CorporateService/CorporateService';
import TravelersReview from '../../components/home/TravelersReview/TravelersReview';

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
      <PopularDestination/>
      <DomesticTicket/>
      <OverseasTicket/>
      <CorporateService/>
      <TravelersReview/>
     
  </div>
  )
}

export default Home;