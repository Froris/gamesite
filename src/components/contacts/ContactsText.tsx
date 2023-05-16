import { Box, Typography } from '@mui/material';
import { appPalette } from '../../theme';

const colors = appPalette();

export const ContactsText = () => {
  return (
    <Box display='flex' flexDirection='column' rowGap={2}>
      <Typography variant='subtitle1' component='p'>
        Since in order to{' '}
        <span style={{ color: colors.secondary?.orange }}>contact us</span> on
        Discord, you will first need to pass a verification process to confirm
        that you are not a bot/scammer, it would be{' '}
        <span style={{ color: colors.secondary?.darkOrange }}>much faster</span>{' '}
        to reach out to us directly{' '}
        <span style={{ color: colors.secondary?.orange }}>in the game!</span>
      </Typography>
      <Typography variant='body1' component='p'>
        By doing so, you will not only save your time by bypassing the
        verification, but also have the opportunity to be accepted into our
        ranks right away!
      </Typography>
    </Box>
  );
};
