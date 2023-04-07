import { useState } from 'react';
import {
  Sidebar,
  Menu,
  sidebarClasses,
  menuClasses,
  useProSidebar,
  MenuItem,
} from 'react-pro-sidebar';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CelebrationRoundedIcon from '@mui/icons-material/CelebrationRounded';
import SupervisedUserCircleRoundedIcon from '@mui/icons-material/SupervisedUserCircleRounded';
import ClassRoundedIcon from '@mui/icons-material/ClassRounded';
import RecentActorsRoundedIcon from '@mui/icons-material/RecentActorsRounded';
import { SidebarHeader } from './SidebarHeader';
import { appPalette } from '../../theme';
import { MenuItem as Item } from './MenuItem';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import Divider from '@mui/material/Divider';
import { LightModeSwitcher } from './LightModeSwitcher';
import { ToggleMenuButton } from './ToggleMenuButton';
import { Link } from 'react-router-dom';

const dividerMarginY = 4;

export const AppSidebar = () => {
  const theme = useTheme();
  const colors = appPalette(theme.palette.mode);
  const isPhoneScreen = useMediaQuery('(max-width: 500px)');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { toggleSidebar, collapseSidebar, broken, collapsed } = useProSidebar();
  const [selected, setSelected] = useState('Home');

  function handleCollapseSidebar() {
    collapseSidebar(!collapsed);
  }

  return (
    <Sidebar
      collapsedWidth={isPhoneScreen ? '50px' : '80px'}
      defaultCollapsed={true}
      transitionDuration={500}
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: colors.secondary[500],
        },
        borderColor: colors.secondary[600],
      }}
    >
      <Menu
        menuItemStyles={{
          button: {
            ...(isPhoneScreen
              ? { paddingLeft: '7.5px', paddingRight: '7.5px' }
              : { paddingLeft: '22.5px', paddingRight: '22.5px' }),
            ':hover': {
              [`& > .${menuClasses.label}, & > .${menuClasses.icon}`]: {
                color: colors.primaryAccent[500],
              },
              backgroundColor: 'transparent',
            },
          },
          icon: ({ active }) => {
            return {
              color: active ? colors.primary[500] : colors.secondary[100],
            };
          },
          label: ({ active }) => {
            return {
              color: active ? colors.primaryAccent[400] : colors.secondary[100],
            };
          },
        }}
      >
        <Box mt={5}>
          {collapsed ? (
            <MenuItem>
              <ToggleMenuButton
                isCollapsed={collapsed}
                onCollapseSidebar={handleCollapseSidebar}
              />
            </MenuItem>
          ) : (
            <MenuItem
              component={<Link to='/home' />}
              suffix={
                <ToggleMenuButton
                  isCollapsed={collapsed}
                  onCollapseSidebar={handleCollapseSidebar}
                />
              }
            >
              <SidebarHeader
                title='Eclipse'
                subtitle='shining through darkness'
                isCollapsed={collapsed}
              />
            </MenuItem>
          )}
        </Box>

        <Divider sx={{ my: dividerMarginY }} />

        <Item
          to='/'
          title='Home'
          icon={<HomeRoundedIcon />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          to='/events'
          title='FC Events'
          icon={<CelebrationRoundedIcon />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          to='/members'
          title='Members'
          icon={<SupervisedUserCircleRoundedIcon />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          to='/help'
          title='Guides and help'
          icon={<ClassRoundedIcon />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          to='/contacts'
          title='Contacts'
          icon={<RecentActorsRoundedIcon />}
          selected={selected}
          setSelected={setSelected}
        />

        <Divider sx={{ my: dividerMarginY }} />

        <Box
          display={isPhoneScreen && collapsed ? 'none' : 'flex'}
          justifyContent='center'
        >
          <LightModeSwitcher isCollapsed={collapsed} />
        </Box>
      </Menu>
    </Sidebar>
  );
};
