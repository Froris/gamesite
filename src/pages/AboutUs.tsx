import { PageContentContainer } from '../components/PageContentContainer';
import { AboutUsPageTitle } from '../components/aboutUs/AboutUsPageTitle';
import { AboutUsHero } from '../components/aboutUs/AboutUsHero';
import { AboutUsFeatures } from '../components/aboutUs/AboutUsFeatures';
import { AboutUsText } from '../components/aboutUs/AboutUsText';

export const AboutUs = () => {
  return (
    <PageContentContainer>
      <AboutUsPageTitle />
      <AboutUsHero />
      <AboutUsFeatures />
      <AboutUsText />
    </PageContentContainer>
  );
};
