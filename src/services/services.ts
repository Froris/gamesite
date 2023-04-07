/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import history from 'history/browser';
import { AuthResponse, StatusResponse } from './types';

/* eslint-disable @typescript-eslint/unbound-method */

export const accountService = {
  login,
  statusChangeCallback,
};

async function login(
  params?: 'reauthenticate' | 'reauthorize' | 'rerequest' | undefined
) {
  try {
    const authResponse: AuthResponse = await new Promise((resolve, reject) => {
      window.FB.login(
        (response: StatusResponse) => {
          if (response.authResponse) {
            resolve(response.authResponse);
          } else {
            reject(response.status);
          }
        },
        { auth_type: params ? params : undefined }
      );
    });

    console.log('Auth response: ', authResponse);

    history.push('/');
  } catch (error) {
    console.error(error);
  }
}

function statusChangeCallback(response: StatusResponse) {
  console.log('statusChangeCallback');
  console.log(response);
  if (response.status === 'connected') {
    // Logged into your webpage and Facebook.
    testAPI();
  } else {
    // Not logged into your webpage or we are unable to tell.
    console.warn('Please log in or smth...');
  }

  function testAPI() {
    // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function (response: any) {
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      console.log('Successful login for: ' + response.name);
    });
  }
}
