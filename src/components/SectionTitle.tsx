import { Typography, Box } from '@mui/material';
import line from '../assets/line.png';

export const SectionTitle = ({
  text,
  variant = 'h2',
}: {
  text: string;
  variant?: 'h1' | 'h2' | 'h3';
}) => {
  return (
    <>
      <Typography variant={variant}>{text}</Typography>
      <Box
        my={1}
        width='100%'
        height='58px'
        sx={{
          background: `url(${line}) no-repeat`,
          backgroundSize: 'contain',
          backgroundPosition: '50% 50%',
        }}
      />
    </>
  );
};
