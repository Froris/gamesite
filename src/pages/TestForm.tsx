import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import { createNews, publishToFacebook } from '../postBot';

export const TestForm = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  function submitHandler(): void {
    // Проверяем, что была введена ссылка на картинку
    if (!imageUrl) {
      alert('Please enter an image URL');
      return;
    }

    // Отправляем картинку и текст в telegram
    //createNews(title, text, imageUrl)
    //  .then(() => {
    //    alert('News created successfully');
    //  })
    //  .catch((error) => {
    //    console.error(error);
    //    alert('Error creating news');
    //  });

    publishToFacebook('116449418076377', imageUrl, title, text);
  }

  return (
    <Box
      component={'article'}
      display={'flex'}
      justifyContent='center'
      alignItems={'center'}
      m={3}
      width='100%'
      height='100%'
    >
      <Box
        component={'section'}
        sx={{ border: '1px solid red' }}
        p={2}
        display={'flex'}
        flexDirection={'column'}
        gap={2}
      >
        <TextField
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id='standard-basic'
          label='Title'
          variant='standard'
        />
        <TextField
          value={text}
          onChange={(e) => setText(e.target.value)}
          id='standard-basic'
          label='Text'
          variant='standard'
        />
        <TextField
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          id='standard-basic'
          label='Image URL'
          variant='standard'
        />
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label='Telegram'
          />
          <FormControlLabel control={<Checkbox />} label='Facebook' />
        </FormGroup>
        <Button type='submit' onClick={submitHandler}>
          CREATE
        </Button>
      </Box>
    </Box>
  );
};
