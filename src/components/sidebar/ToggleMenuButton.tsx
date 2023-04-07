import { IconButton } from '@mui/material';
import KeyboardDoubleArrowLeftRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftRounded';
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';

interface ToggleMenuButtonProps {
  isCollapsed: boolean;
  onCollapseSidebar: () => void;
}

export const ToggleMenuButton = ({
  onCollapseSidebar,
  isCollapsed,
}: ToggleMenuButtonProps) => {
  return (
    <IconButton size='small' color='primary' onClick={onCollapseSidebar}>
      {isCollapsed ? (
        <KeyboardDoubleArrowRightRoundedIcon fontSize='large' />
      ) : (
        <KeyboardDoubleArrowLeftRoundedIcon fontSize='large' />
      )}
    </IconButton>
  );
};
