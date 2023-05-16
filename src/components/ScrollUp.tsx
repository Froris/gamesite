import { Button } from '@mui/material';

import { appPalette } from '../theme';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';

export const ScrollUp = () => {
  const colors = appPalette();

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <Button
      onClick={scrollToTop}
      sx={{
        paddingTop: 2,
        paddingBottom: 2,
        '&:hover': {
          color: 'white',
          backgroundColor: colors.main!.orange,
        },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '48px',
        minWidth: '48px',
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
        border: `1px solid ${colors.main!.orange}`,
        borderRadius: '200px',
      }}
    >
      <ArrowUpwardRoundedIcon fontSize='large' />
    </Button>
  );
};
