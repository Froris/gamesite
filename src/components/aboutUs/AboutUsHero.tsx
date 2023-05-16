import { Box, Typography, useMediaQuery } from '@mui/material';
import { appPalette } from '../../theme';
import aboutus from '../../assets/aboutus.png';

const colors = appPalette();

export const AboutUsHero = () => {
  const isSmallScreen = useMediaQuery('(max-width:699px)');

  return (
    <Box
      component='section'
      display='flex'
      flexDirection='column'
      alignItems='flex-start'
      width='100%'
      minHeight='620px'
    >
      <img src={aboutus} width='100%' alt='group' />
      <Box
        mt={2}
        display='flex'
        flexDirection={isSmallScreen ? 'column' : 'row'}
        justifyContent='space-between'
        gap={5}
      >
        <Typography
          width={isSmallScreen ? '100%' : '60%'}
          fontSize={isSmallScreen ? '3.1rem' : '4rem'}
          fontWeight='700'
          component='p'
          align='left'
        >
          Founded in{' '}
          <span style={{ color: colors.secondary?.darkOrange }}>
            2015, Eclipse
          </span>{' '}
          is an active FC in Final Fantasy XIV.
        </Typography>
        <Typography
          width={isSmallScreen ? '100%' : '40%'}
          variant='subtitle2'
          component='p'
        >
          But more than that, it has also become a welcoming and inclusive
          community for players of all levels of experience.
        </Typography>
      </Box>
    </Box>
  );
};
