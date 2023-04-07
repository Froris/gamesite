import { Box, styled, Switch, SwitchProps, useTheme } from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useContext } from 'react';
import { ColorModeContext } from '../../context/appTheme';

interface LightModeSwitcherProps {
  isCollapsed: boolean;
}

export const LightModeSwitcher = ({ isCollapsed }: LightModeSwitcherProps) => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const CustomSwitch = styled((props: SwitchProps) => (
    <Switch
      focusVisibleClassName='.Mui-focusVisible'
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor:
            theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));

  return (
    <Box
      display='flex'
      flexDirection={isCollapsed ? 'column' : 'row'}
      alignItems='center'
    >
      <LightModeOutlinedIcon />
      <Box m={1}>
        <CustomSwitch
          id='theme-switcher'
          checked={theme.palette.mode === 'dark'}
          onChange={colorMode.toggleColorMode}
        />
      </Box>
      <DarkModeOutlinedIcon />
    </Box>
  );
};
