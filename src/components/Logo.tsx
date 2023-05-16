import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { appPalette } from '../theme';

const colors = appPalette();

export const Logo = () => {
  return (
    <NavLink to={'/'}>
      <Typography
        variant='subtitle1'
        sx={{
          display: {
            '&:hover': { color: colors.main?.orange },
          },
        }}
      >
        Eclipse
      </Typography>
    </NavLink>
  );
};
