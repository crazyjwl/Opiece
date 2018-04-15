import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './CardList';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { friends } from './friends';

ReactDOM.render(
                <CardList friends={friends} />
              , document.getElementById('root'));
registerServiceWorker();
