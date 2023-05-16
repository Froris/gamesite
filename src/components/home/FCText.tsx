import { Box, Typography, useMediaQuery } from '@mui/material';
import bunny from '../../assets/guildBg.png';
import { appPalette } from '../../theme';
import { SectionTitle } from '../SectionTitle';

export const FCText = () => {
  const colors = appPalette();
  const isWideScreen = useMediaQuery('(min-width: 1000px)');

  return (
    <Box
      px={isWideScreen ? 3 : 1}
      pt={2}
      mx='auto'
      width='100%'
      maxWidth={'1300px'}
      height='900px'
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='flex-start'
      sx={{
        boxSizing: 'border-box',
        backgroundColor: 'green',
        background: `url(${bunny}) no-repeat`,
        backgroundSize: 'contain',
        backgroundPosition: '50%',
      }}
    >
      <SectionTitle text='VISIT OUR FC!' />
      <Box
        width='100%'
        maxWidth={'870px'}
        display='flex'
        flexDirection='row'
        justifyContent='space-between'
        columnGap={5}
      >
        <Box width='100%' maxWidth='385px'>
          <Typography variant='subtitle2' component='p'>
            Looking for an{' '}
            <span style={{ color: colors.secondary?.orange }}>
              active and friendly free company
            </span>{' '}
            that welcomes both newcomers and experienced{' '}
            <span style={{ color: colors.secondary?.darkOrange }}>
              high-end content players
            </span>{' '}
            ?
          </Typography>
        </Box>
        <Box width='100%' maxWidth='385px'>
          <Typography
            variant='subtitle2'
            sx={{ fontWeight: 300 }}
            component='p'
          >
            Look no further! Our guild is a community that values{' '}
            <span style={{ fontWeight: 600 }}>teamwork, dedication</span>, and
            most importantly, <span style={{ fontWeight: 600 }}>fun</span>.
            Whether you&apos;re veteran or a new player just starting out, we
            have a place for you in our ranks.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
