import { accountService } from './services';

// photo id = "116633531391299"
// post id = "116449418076377_116637598057559" <= pageId_postId
// unpublished post = "116449418076377_116639391390713"

const fbAppId = import.meta.env.VITE_FB_APP_ID as string;
const fbAcessToken = import.meta.env.VITE_APP_ACCESS_TOKEN as string;
//const fbPageId = '116449418076377';

export function initFacebookSdk() {
  return new Promise((resolve) => {
    // wait for facebook sdk to initialize before starting the react app
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: fbAppId,
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v16.0',
        status: true,
        cookie: true, // Enable cookies to allow the server to access the session.
      });

      // auto authenticate with the api if already logged in with facebook
      window.FB.getLoginStatus((response) => {
        if (response.authResponse) {
          accountService.statusChangeCallback(response);
        } else {
          resolve(`Error! ${response.status}`);
        }
      });
    };

    // load facebook sdk script
    (function (dom, scriptTag, id) {
      const fjs = dom.getElementsByTagName(scriptTag)[0] as HTMLScriptElement;

      if (dom.getElementById(id)) {
        return;
      }

      const sdkConnect = dom.createElement(scriptTag) as HTMLScriptElement;
      sdkConnect.id = id;
      sdkConnect.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode!.insertBefore(sdkConnect, fjs);
    })(document, 'script', 'facebook-jssdk');
  });
}
