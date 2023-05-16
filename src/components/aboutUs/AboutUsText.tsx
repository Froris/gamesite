import { Box, useMediaQuery } from '@mui/material';
import moogle from '../../assets/about_us_photos/moogle.png';
import { TextBlock } from './TextBlock';
import { DiscordLink } from '../DiscordLink';

export const AboutUsText = () => {
  const isWideScreen = useMediaQuery('(min-width:1000px)');

  return (
    <Box
      component='section'
      width='100%'
      minHeight='685px'
      display='flex'
      alignItems='center'
      columnGap={2}
    >
      <Box width='50%' sx={{ display: isWideScreen ? 'block' : 'none' }}>
        <img
          src={moogle}
          width='100%'
          height='100%'
          alt='moogle with a sword'
        />
      </Box>
      <Box width={isWideScreen ? '50%' : '100%'}>
        <TextBlock />
        <Box mt={5} maxWidth='200px' height='45px'>
          <DiscordLink color='white' text='CHECK US OUT!' />
        </Box>
      </Box>
    </Box>
  );
};
