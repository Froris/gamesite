/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Box, Container, Typography, useMediaQuery } from '@mui/material';
import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom';
import errorbg from '../assets/errorbg.png';
import { appPalette } from '../theme';

export const ErrorBoundary = () => {
  const isTabletScreen = useMediaQuery('(max-width: 870px)');
  const isSmallScreen = useMediaQuery('(max-width: 500px)');
  const colors = appPalette();

  const error = useRouteError();
  console.error('Router Error: ', error);

  return (
    <Box
      width='100vw'
      height='100vh'
      display='flex'
      flexDirection={isTabletScreen ? 'column' : 'row'}
      alignItems='center'
      justifyContent={isTabletScreen ? 'center' : 'flex-end'}
      sx={{
        backgroundColor: colors.main?.white,
        color: colors.main?.dark,
      }}
    >
      <Box
        width={isTabletScreen ? '90%' : '40%'}
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='flex-start'
        rowGap={2}
      >
        {isRouteErrorResponse(error) ? (
          <>
            <Typography variant='h2' component={'p'}>
              Oops, something went wrong...
            </Typography>
            <Typography variant='h1' component={'p'}>
              {error.status}
            </Typography>
            <Typography variant='h3' component={'p'}>
              {error.statusText
                ? error.statusText
                : 'The requested page crashed. Please try again later.'}
            </Typography>
            <Typography variant='h4' component={'p'}>
              {error.data?.message && error.data.message}
            </Typography>
          </>
        ) : (
          <>
            <Typography variant='h3' component={'p'}>
              Oops, something went wrong...
            </Typography>
            <Typography variant='h4' component={'p'}>
              The requested page crashed. Please try again later.
            </Typography>
          </>
        )}
        <Link to='/'>
          <Box
            sx={{
              minWidth: '150px',
              maxWidth: '200px',
              height: '50px',
              borderRadius: '8px',
              backgroundColor: colors.main?.orange,
              '&:hover': {
                backgroundColor: colors.secondary?.darkOrange,
              },
            }}
            display='flex'
            alignItems='center'
          >
            <Typography
              width='100%'
              textAlign='center'
              variant='h4'
              component='span'
              color='white'
            >
              GO BACK
            </Typography>
          </Box>
        </Link>
      </Box>
      <Box
        width={isSmallScreen ? '90%' : '50%'}
        height={isTabletScreen ? '60vh' : '100vh'}
        sx={{
          backgroundImage: `url(${errorbg})`,
          backgroundPosition: '50%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: isTabletScreen ? '100%' : '70%',
        }}
      />
    </Box>
  );
};
