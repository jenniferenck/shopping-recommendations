import React, { Component } from 'react';
import MY_PINTEREST_APP_ID from '../PinterestID';

class OAuthButton extends Component {
  render() {
    return (
      <div>
        <a
          href={`https://api.pinterest.com/oauth/?response_type=code&redirect_uri=http://localhost:3000&client_id=${MY_PINTEREST_APP_ID}&scope=read_public,write_public`}
        >
          <button>Get Pinterest Auth</button>
        </a>
      </div>
    );
  }
}

export default OAuthButton;
