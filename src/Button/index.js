import React, { Component } from 'react';
import './Button.css';
const { MY_PINTEREST_APP_ID } = require('../PinterestID');

class Button extends Component {
  render() {
    const { allowedAccess } = this.props;
    return (
      <div>
        <a
          href={`https://api.pinterest.com/oauth/?response_type=code&redirect_uri=http://localhost:3000&client_id=${MY_PINTEREST_APP_ID}&scope=read_public,write_public`}
        >
          <button className="button">
            {allowedAccess ? 'start a custom search' : 'get your boards'}
          </button>
        </a>
      </div>
    );
  }
}

export default Button;
