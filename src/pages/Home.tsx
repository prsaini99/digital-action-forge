
import Hero from '../components/Hero';
import PastClientsSlider from '../components/PastClientsSlider';
import ServiceHighlights from '../components/ServiceHighlights';
import CaseStudiesHighlight from '../components/CaseStudiesHighlight';
import TechnicalAchievements from '../components/TechnicalAchievements';
import ContactCTA from '../components/ContactCTA';

const Home = () => {
  return (
    <main>
      <Hero />
      <PastClientsSlider />
      <ServiceHighlights />
      <CaseStudiesHighlight />
      <TechnicalAchievements />
      <ContactCTA />
    </main>
  );
};

export default Home;
