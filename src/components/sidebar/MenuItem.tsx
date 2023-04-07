import { Typography } from '@mui/material';
import { MenuItem as ProSidebarMenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

interface ItemProps {
  title: string;
  to: string;
  icon: JSX.Element;
  selected: string;
  setSelected: (value: string) => void;
}

export const MenuItem = ({
  title,
  to,
  icon,
  selected,
  setSelected,
}: ItemProps) => {
  return (
    <ProSidebarMenuItem
      active={selected === title}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to} />}
    >
      <Typography>{title}</Typography>
    </ProSidebarMenuItem>
  );
};
