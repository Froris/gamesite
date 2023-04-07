import { Telegraf } from 'telegraf';
// eslint-disable-next-line import/no-unresolved
import { ExtraPhoto } from 'telegraf/typings/telegram-types';
import { FbApiErrorResponse, FbApiResponse } from '../services/types';

const token = import.meta.env.VITE_BOT_TOKEN as string;

const bot = new Telegraf(token);

const sendMessageAsync = (chatId: string, message: string) => {
  return new Promise<void>((resolve, reject) => {
    bot.telegram
      .sendMessage(chatId, message)
      .then(() => resolve())
      .catch((error) => reject(error));
  });
};

const sendPhotoAsync = (chatId: string, photo: string, options: ExtraPhoto) => {
  return new Promise<void>((resolve, reject) => {
    bot.telegram
      .sendPhoto(chatId, photo, options)
      .then(() => resolve())
      .catch((error) => reject(error));
  });
};

export const createNews = async (
  title: string,
  text: string,
  image: string
): Promise<void> => {
  await sendPhotoAsync('@testnewscaph', image, {
    caption: `${title}\n\n${text}`,
  });
};

//export const useInitFBapi = () => {
//  useEffect(() => {}, []);
//};

export const publishToFacebook = (
  pageId: string,
  photo: string,
  title: string,
  text: string
) => {
  const newPost = {};

  createPost(pageId);
};

function createPost(pageId: string) {
  window.FB.api(
    `/${pageId}/feed`,
    'post',
    {
      message: 'This is a test message',
    },
    function (response: FbApiResponse | FbApiErrorResponse) {
      if (isErrorResponse(response)) {
        console.log(response.error);
        return;
      }

      alert(JSON.stringify(response));
    }
  );
}

//function updatePost(pageId: string, postId: string) {
//  window.FB.api(
//    '/pageId_postId/',
//    'post',
//    {
//      attached_media:
//        '[\n  {\n    "message": "Post Updated!",\n    "media_fbid": "116633531391299"\n  }\n]',
//    },
//    function (response) {
//      // Insert your code here
//    }
//  );
//}

//function uploadPhoto(pageId) {
//  window.FB.api('/{page-id}/photos', function (response) {
//    if (response && !response.error) {
//      /* handle the result */
//    }
//  });
//}

function isErrorResponse(
  apiResponse: FbApiResponse | FbApiErrorResponse
): apiResponse is FbApiErrorResponse {
  return (apiResponse as FbApiErrorResponse).error !== undefined;
}
