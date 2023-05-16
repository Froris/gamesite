import { Box, Typography } from '@mui/material';
import { convertDate } from '../../helpers';
import { useMemo } from 'react';

const newsBlockStyles = {
  boxSizing: 'border-box',

  display: 'flex',
  flexDirection: 'column',

  width: '600px',
  height: '300px',

  border: '1px solid #3A383C',
  borderRadius: '10px',
  overflow: 'hidden',
};

export const NewsBlock = ({
  date,
  title,
  img,
}: {
  date: string;
  title: string;
  img: string;
}) => {
  const parsedDate = useMemo(() => convertDate(date), [date]);

  return (
    <Box key={date} sx={newsBlockStyles}>
      <Box
        width='100%'
        height='188px'
        sx={{
          backgroundColor: 'green',
          background: `url(${img}) no-repeat`,
          backgroundSize: 'contain',
        }}
      />
      <Box mx={2}>
        <Typography variant='body2'>{parsedDate}</Typography>
        <Typography variant='subtitle2' fontWeight={700}>
          {title}
        </Typography>
      </Box>
    </Box>
  );
};
