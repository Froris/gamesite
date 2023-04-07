import { Typography, Box, useTheme } from '@mui/material';
import { appPalette } from '../theme';

export const PageTextBlock = ({
  title,
  children,
}: {
  title: string;
  children: string;
}) => {
  const theme = useTheme();
  const colors = appPalette(theme.palette.mode);
  return (
    <Box>
      <Typography
        display='inline-block'
        variant='h3'
        color={colors.primaryAccent[500]}
        fontWeight='bold'
      >
        {title}
      </Typography>
      <Typography variant='subtitle1' component='p' color={colors.grey[100]}>
        {children}
      </Typography>
    </Box>
  );
};
