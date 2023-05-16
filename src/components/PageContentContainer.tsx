import { Container, Box } from '@mui/material';
import { AppBreadcrumbs } from './Breadcrumbs';

const innerContainerStyles = {
  mt: '100px',
  mx: 'auto',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  rowGap: 2,
};

export const PageContentContainer = ({
  children,
  height = 'auto',
}: {
  children: React.ReactNode;
  height?: string;
}) => {
  return (
    <Container maxWidth='xl' sx={{ height: height }}>
      <Box component='article' sx={innerContainerStyles}>
        <Box mt={'40px'} mb={'50px'}>
          <AppBreadcrumbs />
        </Box>
        {children}
      </Box>
    </Container>
  );
};
