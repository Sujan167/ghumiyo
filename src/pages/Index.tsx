
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Explore from '../components/Explore';
import BuiltForNepal from '../components/BuiltForNepal';
import SocialFeatures from '../components/SocialFeatures';
import TreasureHunting from '../components/TreasureHunting';
import ItineraryPlanning from '../components/ItineraryPlanning';
import Testimonials from '../components/Testimonials';
import JoinMovement from '../components/JoinMovement';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Explore />
        <SocialFeatures />
        <TreasureHunting />
        <ItineraryPlanning />
        <BuiltForNepal />
        <Testimonials />
        <JoinMovement />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
