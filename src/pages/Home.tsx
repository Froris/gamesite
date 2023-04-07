import { Box, useMediaQuery } from '@mui/material';
import mainbg from '../assets/mainbg.jpeg';

/*
  TODO:
  Box.article вместе с контейнером картинки и контейнером основного
  можно вынести в отдельный компонент для переиспользования
*/

export const Home = () => {
  const isWideScreen = useMediaQuery('(min-width: 1000px)');

  return (
    <Box component='article' display='flex' flexDirection='column'>
      <Box width='100%' height='40vh' component='section' className='page__bg'>
        <img src={mainbg} alt='' />
      </Box>
      <Box
        px={isWideScreen ? 3 : 1}
        width='100%'
        height='60vh'
        component='section'
        className='page__main'
        sx={{
          backgroundColor: 'yellow',
        }}
      >
        <Box
          width='100%'
          height='100%'
          sx={{
            backgroundColor: 'red',
            border: '2px solid black',
          }}
        ></Box>
      </Box>
    </Box>
  );
};
