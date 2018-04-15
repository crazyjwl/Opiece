import React, {Component} from 'react';
import CardList from './CardList';
import { friends } from './friends';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
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
    const filteredFriends = this.state.friends.filter(friend =>{
      return friend.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
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
