import { Box, useMediaQuery } from '@mui/material';
import p1 from '../../assets/about_us_photos/p1.png';
import p2 from '../../assets/about_us_photos/p2.png';
import p3 from '../../assets/about_us_photos/p3.png';
import { FeatureItem } from './FeatureItem';

export const AboutUsFeatures = () => {
  const isSmallScreen = useMediaQuery('(max-width:699px)');
  const isMedScreen = useMediaQuery('(max-width:1000px)');

  return (
    <Box
      my={isMedScreen ? 5 : 25}
      component='section'
      width='100%'
      sx={{
        display: isSmallScreen ? 'none' : 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
      }}
    >
      <FeatureItem imageUrl={p1} />
      <FeatureItem imageUrl={p2} />
      <FeatureItem imageUrl={p3} />
    </Box>
  );
};
