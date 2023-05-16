import { Box, Typography } from '@mui/material';
import { appPalette } from '../theme';
import { SyntheticEvent, useMemo } from 'react';

const colors = appPalette();

export const SliderButton = ({
  pageNum,
  active,
  onClick,
}: {
  pageNum: number | null;
  active: boolean;
  onClick: (e: SyntheticEvent) => void;
}) => {
  const sliderInnerButtonStyles = useMemo(
    () => ({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      borderRadius: '5px',

      width: '100%',
      height: '100%',

      backgroundColor: active
        ? colors.secondary?.darkOrange
        : colors.main?.dark,
    }),
    [active]
  );

  const sliderOuterButtonStyles = useMemo(
    () => ({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      borderRadius: '5px',

      width: '29px',
      height: '29px',

      padding: '2px',

      backgroundImage: colors.main!.sliderBtnGradient,
      rotate: '45deg',

      '&:hover': {
        cursor: 'pointer',
      },
    }),
    []
  );

  const textStyles = useMemo(
    () => ({
      rotate: '-45deg',
      color: active ? colors.main?.dark : colors.main?.white,
      '&:hover': { color: colors.main?.orange },
    }),
    [active]
  );

  return (
    <Box
      onClick={onClick}
      className='buttonsOuter'
      sx={sliderOuterButtonStyles}
    >
      <Box className='buttonsInner' sx={sliderInnerButtonStyles}>
        <Typography sx={textStyles}>{pageNum}</Typography>
      </Box>
    </Box>
  );
};
