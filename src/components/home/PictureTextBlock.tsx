import { Box } from '@mui/material';

import photo1 from '../../assets/photo1.jpg';
import photo2 from '../../assets/photo2.jpg';
import photo3 from '../../assets/photo3.jpg';
import './styles.scss';

export const PictureTextBlock = () => {
  return (
    <Box
      className='composition'
      width='50%'
      height='100%'
      display='flex'
      justifyContent='center'
      alignItems='center '
    >
      <img
        alt=''
        className='composition__photo composition__photo--p1'
        src={photo1}
      />

      <img
        alt=''
        className='composition__photo composition__photo--p2'
        src={photo2}
      />

      <img
        alt=''
        className='composition__photo composition__photo--p3'
        src={photo3}
      />
    </Box>
  );
};
