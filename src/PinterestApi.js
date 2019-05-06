import Helpers from './Helpers';

const { PINTEREST_KEY, MY_PINTEREST_APP_ID } = require('./PinterestID');
const axios = require('axios');

// in order to access a user's board, they must first be redirected to pinterest to give read permission
const O_AUTH_URL = `https://api.pinterest.com/v1/oauth/token?`;
const BASE_REQUEST_URL = 'https://api.pinterest.com/v1/';

class PinterestApi {
  // After user gives read/ write permission, we receive an 'access code' in the query string
  // Then we need to generate an 'access token' via POST request

  static async getAccessToken(authCode) {
    // An access token allows us to make requests on user's behalf
    const results = await axios.post(
      `${O_AUTH_URL}grant_type=authorization_code&client_id=${MY_PINTEREST_APP_ID}&client_secret=${PINTEREST_KEY}&code=${authCode}`
    );
    return results.data.access_token;
  }

  // by default, returns up to 25 boards in an array of objects
  static async getUserBoards(accessToken) {
    const boards = await axios.get(
      `${BASE_REQUEST_URL}me/boards/?access_token=${accessToken}&fields=id,name,url,creator(id)`
    );

    return boards.data.data;
  }

  // fetches first 25 pins - we cannot search for pins by board as Pinterest limits the # of requests per hour
  // returns an array of objects where we can match pins to boards
  static async getUserPins(accessToken) {
    const pins = await axios.get(
      `${BASE_REQUEST_URL}me/pins/?access_token=${accessToken}&fields=id,url,board,note,counts,image`
    );
    console.log(pins.data.data);
    return pins.data.data;
  }
}

export default PinterestApi;
