/**
 * Created by nikkidave on 12/7/17.
 */
import React from 'react';
import './UserOutput.css';

const userOutput = (props)=>
{
    return(<div className="outputStyle">
        <p>I am {props.userName}</p>
        <p>I love mermaids! </p>
    </div>)
};

export default userOutput;