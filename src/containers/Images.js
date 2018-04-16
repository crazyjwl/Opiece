import React from 'react';

const Images = ({username}) => {
  console.log(username)
  return (
    <img src={require(`./images/${username}.jpg`)} alt='no one knows' width='320px' />
  );
}

export default Images;
