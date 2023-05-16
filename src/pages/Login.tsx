import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { AppThemeProvider } from '../context/appTheme';
import { SectionTitle } from '../components/SectionTitle';
import { appPalette } from '../theme';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const admin = {
  email: 'admin@admin',
  password: 'admin',
};

export const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const colors = appPalette();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    if (data.password === admin.password && data.email === admin.email) {
      localStorage.setItem('admin', JSON.stringify({ admin }));
      navigate('/');
    } else {
      setError(true);
    }
  };

  return (
    <AppThemeProvider>
      <Box
        width='100vw'
        height='100vh'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Box
          component='section'
          width='100%'
          maxWidth='800px'
          height='auto'
          display='flex'
          flexDirection='column'
          alignItems='center'
        >
          <SectionTitle text='Admin log in' variant='h1' />
          <Box
            mt={5}
            p={5}
            component='article'
            width='470px'
            sx={{
              backgroundColor: colors.secondary!.darkGray,
              border: `1.5px solid ${colors.secondary!.darkOrange}`,
              borderRadius: '20px',
            }}
          >
            <form onSubmit={() => handleSubmit(onSubmit)}>
              <TextField
                label='email'
                placeholder='email@gmail.com'
                size='medium'
                fullWidth
                {...register('email')}
              />
              <Box my={3} />
              <TextField
                label='password'
                placeholder='admin'
                size='medium'
                fullWidth
                {...register('password')}
              />

              {error && (
                <Box mt={2}>
                  <Typography variant='body1'>
                    Error: invalid email or password
                  </Typography>
                </Box>
              )}

              <Box width='100%' maxWidth='166px' mx='auto' mt={7}>
                <Button
                  fullWidth
                  variant='contained'
                  type='submit'
                  sx={{
                    backgroundColor: colors.secondary?.darkOrange,
                    fontSize: '1.6rem',
                    '&:hover': {
                      backgroundColor: colors.main?.orange,
                    },
                  }}
                >
                  LOG IN
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
    </AppThemeProvider>
  );
};
