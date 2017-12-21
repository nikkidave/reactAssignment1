/**
 * Created by nikkidave on 12/7/17.
 */

import React from 'react';
import './UserInput.css';

const userInput = (props) => {
  return(
      <div className="borderStyle">
          <span>Enter new username to update: </span> <input className="userInput" onChange={props.changeEvent} value={props.userName}/>
      </div>
  )
};

export default userInput;