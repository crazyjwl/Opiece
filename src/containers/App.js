import React, {Component} from 'react';
import CardList from '../components/CardList';
import { friends } from '../friends';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends : friends,
      searchfield : '',
    }
  }
  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});
  }
  render(){
    const {friends, searchfield} = this.state;
    const filteredFriends = friends.filter(friend =>{
      return friend.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !friends.length ?
      <h1>Loading...</h1>
      : (
        <div className='tc'>
          <h1 className='f1'>One Piece Friends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList friends={filteredFriends} />
          </Scroll>
        </div>
      );
  }
}

export default App;
