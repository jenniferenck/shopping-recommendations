const { PINTEREST_KEY, MY_PINTEREST_APP_ID } = require('./PinterestID');
const axios = require('axios');

// in order to access a user's board, they must first be redirected to pinterest to give read permission
const O_AUTH_URL = `https://api.pinterest.com/v1/oauth/token?`;

class PinterestApi {
  // After user gives read/ write permission, we receive an 'access code' in the query string
  // Then we need to generate an 'access token' via POST request

  static async getAccessToken(authCode) {
    // An access token allows us to make requests on user's behalf
    console.log(authCode);
    const results = await axios.post(
      `${O_AUTH_URL}grant_type=authorization_code&client_id=${MY_PINTEREST_APP_ID}&client_secret=${PINTEREST_KEY}&code=${authCode}`
    );
    console.log(results);
    return results.data.access_token;
  }
}

export default PinterestApi;
