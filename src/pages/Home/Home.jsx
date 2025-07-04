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
import SearchBarSelected from '../../components/SearchBar/SearchBarSelected'
import { Helmet} from 'react-helmet-async';
import ScrollToTop from '../../components/utils/ScrollToTop';

const Home = () => {
  return (
    <>
    <ScrollToTop/>
    <div>
     <Helmet>
     <title>W-holidays | Home</title>
     </Helmet>
      <Banner></Banner>
      
 {/* <div className='md:hidden flex justify-center mt-12 '>
 <SearchBar/>
 
 </div> */}
 {/* <div className='hidden md:flex'>

 <SearchBar/>
 </div> */}
      <WhoAreWe/>
      <PopularTours/>
      <NextTour/>
      <PopularDestination/>
      <DomesticTicket/>
      <OverseasTicket/>
      <CorporateService/>
      <TravelersReview/>
      
      {/* <SearchBarSelected/> */}
     
  </div>
    </>
  )
}

export default Home;