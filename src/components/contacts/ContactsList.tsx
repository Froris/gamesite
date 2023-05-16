import { List } from '@mui/material';
import { ContactItem } from './ContactItem';

export const ContactsList = ({ list }: { list: Array<any> }) => {
  return (
    <List>
      {list.map((member) => (
        <ContactItem
          key={member.name}
          name={member.name}
          avatar={member.avatar}
          primetime={member.primetime}
          role={member.role}
          server={member.server}
        />
      ))}
    </List>
  );
};
