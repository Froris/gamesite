import { Box, Typography } from '@mui/material';

export const AboutUsPageTitle = () => {
  return (
    <Box
      component='section'
      display='flex'
      justifyContent='space-between'
      alignItems='center'
    >
      <Typography variant='h2' component='h1'>
        ABOUT US
      </Typography>
      <Box>
        <Typography variant='h2' component='p'>
          200+
        </Typography>
        <Typography variant='subtitle2' component='p'>
          active players
        </Typography>
      </Box>
    </Box>
  );
};
