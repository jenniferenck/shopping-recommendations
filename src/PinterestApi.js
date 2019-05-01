import PINTEREST_KEY from './env';
import MY_PINTEREST_APP_ID from './PinterestID';
const axios = require('axios');

// in order to access a user's board, they must first be redirected to pinterest to give read permission
const O_AUTH_URL = `https://api.pinterest.com/oauth/`;

class PinterestApi {
  // After user gives read/ write permission, we receive an 'access code' in the query string
  // Then we need to generate an 'access token' via POST request

  static async getAccessToken() {
    // post request
    const results = await axios.post(`${O_AUTH_URL}token?
    grant_type=authorization_code&
    client_id=${MY_PINTEREST_APP_ID}&
    client_secret=${PINTEREST_KEY}&
    code=xyz1010`);
    return results;
  }
}

export default PinterestApi;
