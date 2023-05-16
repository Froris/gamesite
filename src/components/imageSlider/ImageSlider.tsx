import { Box } from '@mui/material';
import { useMemo, useState } from 'react';
import { appPalette } from '../../theme';
import { SliderButton } from '../SliderButton';

export const ImageSlider = ({
  slides,
}: {
  slides: Array<{ id: number; url: string }>;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const colors = appPalette();

  const sliderStyles = useMemo(
    () => ({
      width: '100%',
      height: '100%',

      position: 'relative',
    }),
    []
  );

  const slideStyles = useMemo(
    () => ({
      position: 'relative',
      zIndex: 2,

      width: '100%',
      height: '100%',

      background: `url(${slides[currentIndex].url})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',

      border: `2px solid ${colors.secondary!.orange}`,
      borderRadius: '20px',
    }),
    [currentIndex]
  );

  const sliderButtonStyles = useMemo(
    () => ({
      width: '100%',
      mx: 'auto',
      mt: 3,
      display: 'flex',
      justifyContent: 'center',
      columnGap: 3,
    }),
    []
  );

  const secondarySlides = {
    ...slideStyles,
    width: '60%',
    height: '60%',
    zIndex: 1,
  };

  const prevSlide = {
    ...secondarySlides,
    position: 'absolute',
    top: '20%',
    left: '-50%',
    boxShadow: `inset -200px 0px 157px -24px rgba(0,0,0,0.75)`,
  };

  const nextSlide = {
    ...secondarySlides,
    position: 'absolute',
    top: '20%',
    right: '-50%',
    boxShadow: `inset 200px 0px 157px -24px rgba(0,0,0,0.75)`,
  };

  return (
    <Box component='section' sx={sliderStyles}>
      <Box width='100%' height='100%'>
        {currentIndex > 0 && (
          <Box
            sx={{
              ...prevSlide,
              background: `url(${slides[currentIndex - 1].url})`,
            }}
          />
        )}

        <Box sx={slideStyles} />

        {currentIndex < 4 && (
          <Box
            sx={{
              ...nextSlide,
              background: `url(${slides[currentIndex + 1].url})`,
            }}
          />
        )}
      </Box>

      <Box sx={sliderButtonStyles}>
        {slides.map(({ id }) => (
          <SliderButton
            onClick={() => setCurrentIndex(id)}
            key={id}
            pageNum={id + 1}
            active={id === currentIndex}
          />
        ))}
      </Box>
    </Box>
  );
};
