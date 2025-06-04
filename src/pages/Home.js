
import React from 'react';
import HeroSection from '../components/Herosection';
import MissionSection from '../components/Missionsection';
import FeatureCards from '../components/Featurecards';
import './Home.css';
import '../components/Herosection.css'
import useScrollAnimation from '../hooks/useScrollAnimation';

const Home = () => {

   useScrollAnimation();
   
  return (
    <>
      <HeroSection />
      <MissionSection />
      <FeatureCards />
    </>
  );
};

export default Home;
