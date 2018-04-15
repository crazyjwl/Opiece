import React from 'react';
import CardList from './CardList';
import { friends } from './friends';

const App = () => {
  return (
    <CardList friends={friends} />
  );
}

export default App;
