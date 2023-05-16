import { Box } from '@mui/material';

export const FeatureItem = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <Box
      width='100%'
      height='100%'
      maxWidth='352px'
      maxHeight='361px'
      sx={{ borderRadius: '50%', overflow: 'hidden' }}
    >
      <img src={imageUrl} width='100%' alt='feature icon' />
    </Box>
  );
};
