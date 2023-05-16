import { useMediaQuery, Box } from '@mui/material';
import { SectionTitle } from '../SectionTitle';

import image1 from '../../assets/slider_images/photo_1.jpg';
import image2 from '../../assets/slider_images/photo_2.jpg';
import image3 from '../../assets/slider_images/photo_6.png';
import image4 from '../../assets/slider_images/photo_7.png';
import image5 from '../../assets/slider_images/photo_8.png';
import { ImageSlider } from '../imageSlider/ImageSlider';

const slides: Array<{ id: number; url: string }> = [
  { id: 0, url: image1 },
  { id: 1, url: image2 },
  { id: 2, url: image3 },
  { id: 3, url: image4 },
  { id: 4, url: image5 },
];

export const FCPhotos = () => {
  const isWideScreen = useMediaQuery('(min-width: 1000px)');

  return (
    <Box
      px={isWideScreen ? 3 : 1}
      mt={30}
      mx='auto'
      width='100%'
      maxWidth={'1300px'}
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
    >
      <SectionTitle text='OUR PHOTOS!' />
      <Box mt={5} width='600px' height='500px'>
        <ImageSlider slides={slides} />
      </Box>
    </Box>
  );
};
