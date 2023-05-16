import { useMediaQuery, Box, Typography } from '@mui/material';
import { appPalette } from '../../theme';
import { SectionTitle } from '../SectionTitle';

export const FCVideo = () => {
  const colors = appPalette();
  const isWideScreen = useMediaQuery('(min-width: 1000px)');

  return (
    <Box
      px={isWideScreen ? 3 : 1}
      mt={20}
      mx='auto'
      width='100%'
      maxWidth={'1300px'}
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
    >
      <SectionTitle text='OUR VIDEOS!' />
      <Box mt={5} width='100%' maxWidth={'1200px'}>
        <Box
          display='flex'
          flexDirection='row'
          justifyContent='center'
          alignItems='center'
          p={1}
          width='100%'
          sx={{
            position: 'relative',
            backgroundClip: 'padding-box',
            border: '2px solid rgb(255,93,49)',
            borderRadius: '20px',
            background: 'tansparent',
          }}
        >
          <iframe
            style={{
              border: '1px solid #FF7E0D',
              borderRadius: '20px',
            }}
            width='100%'
            height='615'
            src='https://www.youtube-nocookie.com/embed/IVxUeTy0JMw'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
          ></iframe>
        </Box>
      </Box>
    </Box>
  );
};
