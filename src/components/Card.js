import React from 'react';
import Images from '../containers/Images';

const Card = ({ name, email,id, username}) => {
  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5' >
      <Images username={username}/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
