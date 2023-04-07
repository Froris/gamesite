import { Box } from '@mui/material';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Outlet } from 'react-router-dom';
import { AppSidebar } from '../components/sidebar/Sidebar';
import { AppThemeProvider } from '../context/appTheme';
import { useEffect } from 'react';
import { accountService } from '../services/services';

export const Root = () => {
  useEffect(() => {
    async function initLogin() {
      await accountService.login();
    }

    window.FB.getLoginStatus((response) => {
      if (response.authResponse) {
        accountService.statusChangeCallback(response);
      } else {
        initLogin().catch((err) => console.log(err));
      }
    });
  }, []);

  return (
    <AppThemeProvider>
      <ProSidebarProvider>
        <Box className='app' display='flex'>
          <AppSidebar />
          <Box width='100%' height='100%' component='main' className='content'>
            <Outlet />
          </Box>
        </Box>
      </ProSidebarProvider>
    </AppThemeProvider>
  );
};
