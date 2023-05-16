import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
} from '@mui/material';
import { appPalette } from '../../theme';

const colors = appPalette();

type ContactItemProps = {
  name: string;
  avatar: string;
  primetime: string;
  role: string;
  server: string;
};

export const ContactItem = ({
  name,
  avatar,
  primetime,
  role,
  server,
}: ContactItemProps) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar
          sx={{
            width: 70,
            height: 70,
            mr: 2,
            border: `1px solid ${colors.secondary!.darkOrange}`,
          }}
        >
          <img src={avatar} alt='' />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primaryTypographyProps={{
          fontSize: '2rem',
          color: colors.secondary!.orange,
        }}
        primary={name}
        secondary={
          <>
            <Typography
              sx={{
                color: colors.main?.white,
              }}
            >
              <span style={{ color: colors.secondary!.rolesGray }}>Role:</span>{' '}
              {role}
            </Typography>
            <Typography
              sx={{
                color: colors.main?.white,
              }}
            >
              <span style={{ color: colors.secondary!.rolesGray }}>
                In-game primetime:
              </span>{' '}
              {primetime}
            </Typography>
            <Typography
              sx={{
                color: colors.main!.white,
              }}
            >
              <span style={{ color: colors.secondary!.rolesGray }}>
                Server:
              </span>{' '}
              {server}
            </Typography>
          </>
        }
      />
    </ListItem>
  );
};
