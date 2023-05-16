import { Box, Container, Typography, colors } from '@mui/material';
import { DiscordLink } from '../DiscordLink';
import dragon from '../../assets/ImgDragon.jpg';
import { appPalette } from '../../theme';

export const Hero = () => {
  const colors = appPalette();

  return (
    <Box
      id='hero'
      width='100%'
      height='800px'
      sx={{
        background: `url(${dragon}) no-repeat`,
        backgroundSize: 'cover',
        backgroundPosition: '50% 100%',
      }}
    >
      <Container maxWidth='xl' sx={{ height: '100%' }}>
        <Box
          display='flex'
          alignItems='center'
          sx={{
            mx: 'auto',
            width: '100%',
            height: '100%',
          }}
        >
          <Box
            component='article'
            width='100%'
            maxWidth='450px'
            display='flex'
            flexDirection='column'
            alignItems='flex-start'
          >
            <Typography variant='h1'>BECOME PART OF OUR TEAM</Typography>
            <Typography
              mt={2}
              variant='body1'
              sx={{
                color: colors.secondary?.darkOrange,
              }}
            >
              And shine through the darkness with us!
            </Typography>
            <Box mt={6} maxWidth='220px' height='45px'>
              <DiscordLink color='white' text='CONNECT TO US' />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
