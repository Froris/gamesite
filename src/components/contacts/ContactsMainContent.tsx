import { Box, useMediaQuery } from '@mui/material';
import { ContactsList } from './ContactsList';
import { ContactsText } from './ContactsText';

const officersList = [
  {
    name: 'Guardian Angel',
    avatar:
      'https://img2.finalfantasyxiv.com/f/3ee06ba2cbedb9eb17b50302eb6c5f39_777c57311d510ca65dac3c1077dee435fc0_96x96.jpg?1684232126',
    primetime: '(GMT+1) from 6:00 PM to 10:00 PM',
    role: 'Head of the FC',
    server: 'Cerberus',
  },
  {
    name: 'Aruna Lanate',
    avatar:
      'https://img2.finalfantasyxiv.com/f/53f37090e227f95ca44d4d5c6a08c1dd_777c57311d510ca65dac3c1077dee435fc0_96x96.jpg?1684233210',
    primetime: '(GMT+1) from 7:00 PM to 11:00 PM',
    role: 'Recruiting officer',
    server: 'Cerberus',
  },
  {
    name: 'Kai Kazuto',
    avatar:
      'https://img2.finalfantasyxiv.com/f/60644ebf0f091978914479dbd2ab8186_777c57311d510ca65dac3c1077dee435fc0_96x96.jpg?1684233372',
    primetime: '(GMT+0) from 8:00 PM to 12:00 AM',
    role: 'Recruiting officer',
    server: 'Cerberus',
  },
  {
    name: 'Miwa Hisu',
    avatar:
      'https://img2.finalfantasyxiv.com/f/08c1131367377b9aa2bf8e6ca1fbefde_777c57311d510ca65dac3c1077dee435fc0_96x96.jpg?1684232835',
    primetime: '(GMT+3) from 9:00 PM to 1:00 AM',
    role: 'Recruiting officer',
    server: 'Cerberus',
  },
  {
    name: 'Tesh Ret',
    avatar:
      'https://img2.finalfantasyxiv.com/f/f2fcffff80f3ffe77a145a99334a5f37_777c57311d510ca65dac3c1077dee435fc0_96x96.jpg?1684235094',
    primetime: '(GMT+2) from 9:00 PM to 1:00 AM',
    role: 'Recruiting officer',
    server: 'Cerberus',
  },
];

export const ContactsMainContent = () => {
  const isSmallScreen = useMediaQuery('(max-width:699px)');

  return (
    <Box
      height='100%'
      component='section'
      display='flex'
      flexDirection={isSmallScreen ? 'column-reverse' : 'row'}
      justifyContent='space-between'
      alignItems='flex-start'
      rowGap={5}
      columnGap={5}
    >
      <Box width={isSmallScreen ? '100%' : '60%'}>
        <ContactsList list={officersList} />
      </Box>
      <Box width={isSmallScreen ? '100%' : '40%'}>
        <ContactsText />
      </Box>
    </Box>
  );
};
