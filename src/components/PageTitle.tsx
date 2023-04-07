import { Typography, Box, useTheme } from '@mui/material';
import { appPalette } from '../theme';

export const PageTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  const theme = useTheme();
  const colors = appPalette(theme.palette.mode);
  return (
    <Box flexGrow={1}>
      <Typography
        variant='h1'
        color={colors.grey[100]}
        fontWeight='bold'
        sx={{ m: '0 0 5px 0' }}
      >
        {title}
      </Typography>
      <Typography variant='h2' component='p' color={colors.warning[300]}>
        {subtitle}
      </Typography>
    </Box>
  );
};
