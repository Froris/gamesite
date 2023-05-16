import { Box, Typography, useMediaQuery } from '@mui/material';
import joinusbg from '../../assets/joinusbg.png';
import { appPalette } from '../../theme';
import { DiscordLink } from '../DiscordLink';

export const FCTextJoin = () => {
  const colors = appPalette();
  const isWideScreen = useMediaQuery('(min-width: 1000px)');

  return (
    <Box
      px={isWideScreen ? 3 : 1}
      mt={15}
      mx='auto'
      width='100%'
      maxWidth={'1000px'}
      height='700px'
      display='flex'
      justifyContent='flex-end'
      alignItems='center'
      sx={{
        backgroundColor: 'green',
        background: `url(${joinusbg}) no-repeat`,
        backgroundSize: 'contain',
        backgroundPosition: '50%',
      }}
    >
      <Box
        display='flex'
        flexDirection='column'
        alignItems='flex-start'
        maxWidth='450px'
      >
        <Typography variant='h2'>WE ARE WAITING FOR YOU!</Typography>
        <Typography
          mt={2}
          variant='body1'
          sx={{
            color: colors.main!.white,
            textShadow: `1px 1px 1px rgb(225,53,41), 0 0 1em ${
              colors.secondary!.darkOrange
            }, 0 0 0.3em ${colors.main!.orange}`,
          }}
          component='p'
        >
          Join FC Eclipse today and don&apos;t be afraid to make new friends!
        </Typography>
        <Box mt={6} maxWidth='220px' height='45px'>
          <DiscordLink color='white' text='JOIN US' />
        </Box>
      </Box>
    </Box>
  );
};
