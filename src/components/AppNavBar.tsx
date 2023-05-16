import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { DiscordLink } from './DiscordLink';
import { TopBarLink } from './AppNavBarLink';
import { pages } from '../main';
import { useContext, useEffect, useState } from 'react';
import { TopBarScroolContext } from '../context/topBarScrool';

import { Logo } from './Logo';

export const AppNavBar = () => {
  const [bgTransparent, setBgTransparent] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const { distance } = useContext(TopBarScroolContext);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const halfWindowHeight = distance;
      if (scrollTop > halfWindowHeight) {
        setBgTransparent(true);
      } else {
        setBgTransparent(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [distance]);

  return (
    <AppBar
      sx={{
        opacity: bgTransparent ? '0' : '1',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        transition: 'opacity 0.5s ease',
      }}
    >
      <Container maxWidth='xl'>
        <Box
          display='flex'
          alignItems='center'
          sx={{
            mx: 'auto',
            width: '100%',
          }}
        >
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <Logo />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <nav>
              <Menu
                id='menu-appbar'
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map(({ path, pageName }) => (
                  <MenuItem key={pageName} onClick={handleCloseNavMenu}>
                    <TopBarLink to={path} pageName={pageName} />
                  </MenuItem>
                ))}
              </Menu>
            </nav>
          </Box>

          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
            }}
          >
            <Logo />
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {pages.map(({ path, pageName }) => (
              <TopBarLink key={pageName} to={path} pageName={pageName} />
            ))}
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexGrow: 0,
              width: '48px',
              height: '48px',
            }}
          >
            <DiscordLink type='rounded' color='white' />
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};
