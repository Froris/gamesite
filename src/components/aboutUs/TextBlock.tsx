import { Box, Typography, useMediaQuery } from '@mui/material';
import { appPalette } from '../../theme';

const colors = appPalette();

export const TextBlock = () => {
  const isSmallScreen = useMediaQuery('(max-width:699px)');

  return (
    <Box display='flex' flexDirection='column' rowGap={5}>
      <Typography
        fontSize={isSmallScreen ? '3.1rem' : '4rem'}
        fontWeight='700'
        component='p'
      >
        <span style={{ color: colors.secondary?.darkOrange }}>
          Join us today{' '}
        </span>{' '}
        and experience the power of a supportive and friendly gaming community.
      </Typography>
      <Typography variant='subtitle2' component='p'>
        Some of us are online on Discord for up to 16 hours while being in the
        game for only a few hours a day. So, if you need help, Discord might be
        your best bet to get our attention.
        <br />
        <br />
        <span style={{ color: colors.main?.orange }}>ATTENTION!</span>
        <br />
        Our server requires mobile verification & a few instructions to gain
        access, to protect our community from bots/scammers
      </Typography>
    </Box>
  );
};
