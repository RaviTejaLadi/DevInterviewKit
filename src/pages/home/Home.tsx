import { memo } from 'react';
import HeroSection from './HeroSection';
// import QuoteSection from './QuoteSection';
import WhoIsThisForSection from './WhoIsThisForSection';
import TopicsSection from './TopicsSection';
import FeaturesSection from './FeaturesSection';
import FinalQuoteSection from './FinalQuoteSection';
import { Div } from 'kalki-ui';

const Home = () => {
  return (
    <Div className="flex flex-col h-full">
      <HeroSection />
      {/* <QuoteSection /> */}
      <WhoIsThisForSection />
      <TopicsSection />
      <FeaturesSection />
      <FinalQuoteSection />
    </Div>
  );
};

export default memo(Home);
