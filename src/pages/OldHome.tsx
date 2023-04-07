import { Box, useTheme } from '@mui/material';
import mainbg from '../assets/mainbg.jpeg';
import { PageTitle } from '../components/PageTitle';
import { PictureTextBlock } from '../components/home/PictureTextBlock';
import { appPalette } from '../theme';
import { PageTextBlock } from '../components/PageTextBlock';

export const Home = () => {
  const theme = useTheme();
  const colors = appPalette(theme.palette.mode);

  return (
    <Box component='article' display='flex' flexDirection='column'>
      <Box
        height='40vh'
        sx={{
          background: `url(${mainbg}) center -170px/cover no-repeat`,
          boxShadow: ` inset -4px -8px 97px 61px   ${colors.secondary[500]}`,
        }}
      />
      <Box
        height='60vh'
        p={5}
        gap={10}
        display='flex'
        flexDirection='row'
        justifyContent='center'
        alignItems='flex-start'
      >
        <Box width='40%'>
          <PageTitle title='FC Eclipse' subtitle='shining through darkness' />
          <Box mt={5}>
            <PageTextBlock title='Who we are?'>
              FC Eclipse is a community that unites players focused on achieving
              common goals in the game. Our FC is friendly to newcomers and
              always ready to help players develop and improve together with us.
              We love to organize events to create opportunities for our members
              to enjoy the game together and demonstrate their ability to work
              as a team. If you want to join an FC that is dedicated to success
              and fun, then Eclipse is the perfect place for you!
            </PageTextBlock>
          </Box>
        </Box>
        <PictureTextBlock />
      </Box>
    </Box>
  );
};
