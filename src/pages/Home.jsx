import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Hero from '../components/hero/Hero';
import Deals from '../components/home-sections/Deals';
import Bestsellers from '../components/home-sections/Bestsellers';
import Collections from '../components/home-sections/Collections';
import Category from '../components/home-sections/Category';

const Home = () => {
  return (
   <>
   <Navbar/>
   <Hero/>
   <Bestsellers/>
   <Category/>
   <Collections/>
   <Deals/>
   <Footer/>
   </>
  )
}

export default Home;