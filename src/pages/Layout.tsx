import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { AppNavBar } from '../components/AppNavBar';
import { Footer } from '../components/Footer';

export const Layout = () => {
  return (
    <Box display='flex' width='100%' height='auto' flexDirection={'column'}>
      <AppNavBar />
      <Outlet />
      <Footer />
    </Box>
  );
};
