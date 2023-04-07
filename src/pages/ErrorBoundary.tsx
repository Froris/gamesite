/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Box, Typography } from '@mui/material';
import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom';
import errorimg from '../assets/errorimg.jpg';
import KeyboardDoubleArrowLeftRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftRounded';

export const ErrorBoundary = () => {
  const error = useRouteError();
  console.error('Router Error: ', error);

  return (
    <Box
      width='100vw'
      height='100vh'
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      gap={3}
      sx={{
        color: '#191919',
        background: `no-repeat 90%/70% url(${errorimg}) `,
      }}
    >
      {isRouteErrorResponse(error) ? (
        <>
          <Typography variant='h2' component={'p'}>
            Oops, something went wrong...
          </Typography>
          <Typography variant='h2' component={'p'}>
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
      <Link to='/' className='btn__gohome'>
        <Box display='flex' alignItems='center'>
          <KeyboardDoubleArrowLeftRoundedIcon
            color='primary'
            fontSize='large'
          />
          <Typography variant='h5' component='span' color='#c72c41'>
            go home
          </Typography>
        </Box>
      </Link>
    </Box>
  );
};
