import usePagination from '@mui/material/usePagination/usePagination';
import { styled } from '@mui/material/styles';
import { SliderButton } from '../SliderButton';
import { Box } from '@mui/material';
import { ChangeEvent } from 'react';

const List = styled('ul')({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
});

export const NewsPagination = ({
  pagesNum,
  onPageClick,
}: {
  pagesNum: number;
  onPageClick: (idx: number) => void;
}) => {
  const { items } = usePagination({
    count: pagesNum,
    hideNextButton: true,
    hidePrevButton: true,
  });

  return (
    <nav>
      <List>
        {items.map(({ page, type, selected, onClick, ...item }, index) => {
          let children = null;

          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            children = '…';
          } else if (type === 'page') {
            children = (
              <Box key={index} mx={1.5}>
                <SliderButton
                  onClick={(e) => {
                    onClick(e);
                    onPageClick(index);
                  }}
                  active={selected}
                  pageNum={page}
                />
              </Box>
            );
          }

          return <li key={index}>{children}</li>;
        })}
      </List>
    </nav>
  );
};
