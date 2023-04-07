import { Box, Fade, Typography, useTheme } from '@mui/material';
import { appPalette } from '../../theme';

interface SidebarHeaderProps {
  title: string;
  subtitle: string;
  isCollapsed: boolean;
}

export const SidebarHeader = ({
  title,
  subtitle,
  isCollapsed,
}: SidebarHeaderProps) => {
  const theme = useTheme();
  const colors = appPalette(theme.palette.mode);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      {!isCollapsed && (
        <Fade in={!isCollapsed} timeout={1000}>
          <Box display='flex' flexDirection='row' alignItems='center'>
            <Box>
              <Typography
                variant='h3'
                component={'h2'}
                color={colors.secondary[100]}
              >
                {title}
              </Typography>
              <Typography
                variant='subtitle1'
                color={colors.warning[300]}
                noWrap
              >
                {subtitle}
              </Typography>
            </Box>
          </Box>
        </Fade>
      )}
    </Box>
  );
};
