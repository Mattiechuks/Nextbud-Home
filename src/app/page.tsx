"use client";

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutUsSection from '@/components/AboutUsSection';
import FeaturesSection from '@/components/FeaturesSection';
import InfluencerSection from '@/components/InfluencerSection';
import ChatWidget from '@/components/ChatWidget';
import Footer from '@/components/Footer';
import Waitlist from '@/components/Waitlist';

const Home = () => {
  return (
    <main className="overflow-x-hidden  bg-white">
      <div className="overflow-x-hidden  bg-white">
        <Header />
        <HeroSection />
        <AboutUsSection />
        <FeaturesSection />
        <InfluencerSection />
        <Waitlist />
        <ChatWidget />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
