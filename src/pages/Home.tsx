import { Container } from '@mui/material';
import { Hero } from '../components/home/Hero';
import { FCText } from '../components/home/FCText';
import { FCVideo } from '../components/home/FCVideo';
import { FCPhotos } from '../components/home/FCPhotos';
import { FCTextJoin } from '../components/home/FCTextJoin';
import { Footer } from '../components/Footer';

export const Home = () => {
  return (
    <>
      <Hero />
      <Container maxWidth='xl'>
        <FCText />
        <FCVideo />
        <FCPhotos />
        <FCTextJoin />
      </Container>
    </>
  );
};
