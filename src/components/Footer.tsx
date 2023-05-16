import { Box, Container } from '@mui/material';
import { pages } from '../main';
import { TopBarLink } from './AppNavBarLink';
import { ScrollUp } from './ScrollUp';
import { Logo } from './Logo';

export const Footer = () => {
  return (
    <Box mt={15} mb={5}>
      <Container maxWidth='xl'>
        <Box
          sx={{
            mx: 'auto',
            width: '100%',
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
          }}
        >
          <Logo />
          <Box
            display='flex'
            component='nav'
            sx={{
              flexGrow: 1,
              justifyContent: 'center',
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
            <ScrollUp />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
