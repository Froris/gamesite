import { Box, Typography, useMediaQuery } from '@mui/material';
import { useContext, useLayoutEffect, useState } from 'react';
import { TopBarScroolContext } from '../context/topBarScrool';
import { NewsBlock } from '../components/news/NewsBlock';
import { NewsPagination } from '../components/news/NewsPagination';
import { useChunkArray, useFetchPosts } from '../hooks';
import { PageContentContainer } from '../components/PageContentContainer';

const newsContainerStyles = {
  width: '100%',
  display: 'flex',
  gap: 2,
  justifyContent: 'space-between',
  flexWrap: 'wrap',
};

export type NewsPost = {
  id: string;
  url: string;
  title: string;
  time: string;
  image: string;
  description: string;
};

export const News = () => {
  const { distance, setScroolDistance } = useContext(TopBarScroolContext);
  const isWideScreen = useMediaQuery('(min-width:1260px)');

  const posts = useFetchPosts<NewsPost>();
  const { chunkedArray, totalPages } = useChunkArray(posts, 6);

  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  useLayoutEffect(() => {
    setScroolDistance(10);
  }, []);

  return (
    <PageContentContainer>
      <Box component='section'>
        <Typography variant='h2' component='h1'>
          LATEST NEWS
        </Typography>
      </Box>
      <Box
        component='section'
        sx={{
          ...newsContainerStyles,
          justifyContent: isWideScreen ? 'space-between' : 'space-around',
        }}
      >
        {chunkedArray.length > 0 &&
          chunkedArray[currentPageIndex].map((post) => {
            console.log('Post', post);
            return (
              <NewsBlock
                key={post.id}
                date={post.time}
                title={post.title}
                img={post.image}
              />
            );
          })}
      </Box>

      <Box my={8} component='section' display='flex' justifyContent='center'>
        <NewsPagination
          pagesNum={totalPages}
          onPageClick={setCurrentPageIndex}
        />
      </Box>
    </PageContentContainer>
  );
};
