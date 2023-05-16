import { Typography, useTheme } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { appPalette } from '../theme';

export const TopBarLink = ({
  pageName,
  to,
}: {
  pageName: string;
  to: string;
}) => {
  const theme = useTheme();
  const colors = appPalette(theme.palette.mode);

  return (
    <NavLink
      key={pageName}
      to={to}
      style={({ isActive, isPending }) => {
        return {
          fontWeight: isActive ? '600' : '500',
          color: isActive ? colors.main!.orange : colors.main!.white,
        };
      }}
    >
      <Typography
        variant='subtitle2'
        key={pageName}
        sx={{
          mx: '57px',
          display: 'block',
          '&:hover': { color: colors.main?.orange },
        }}
      >
        {pageName}
      </Typography>
    </NavLink>
  );
};
