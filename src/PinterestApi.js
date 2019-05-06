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
    console.log(boards);
    return boards.data.data;
  }

  // fetches all pins by board and returns object with board id as key with details and images
  // array item example format:
  // 0: {url: "https://www.pinterest.com/jenniferenck/check-it-out/", creator: {…}, id: "37999259295014566", name: "check it out"}
  static async getUserPins(accessToken, boards) {
    const boardName = Helpers.replaceSpacesWithUnderScore(boards[0].name);
    console.log(boardName);

    const pins = boards.map(board =>
      axios.get(
        `${BASE_REQUEST_URL}/boards/${boardName}/${
          board.name
        }/pins/?access_token=${accessToken}`
      )
    );

    Promise.all(pins).then(values => console.log(values));

    // use Promise.all() to fetch pins for each board
  }
}

export default PinterestApi;
