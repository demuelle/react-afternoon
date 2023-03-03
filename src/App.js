import React, { useState } from 'react';
import FriendCard from './components/FriendCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import characters from './friends.json';

function App() {
  const [friends, setFriends] = useState(characters); // initially, characters is an array

  function removeFriend(friendId) {
    console.log(new Date(), "You called the removeFriend function with friendId", friendId);
    const myNewFriendList = [...friends];
    for (let i = 0; i < friends.length; i++) {
      // if (friends[i].id !== friendId) {
      //   myNewFriendList.push(friends[i]);
      // }
      if (friends[i].id === friendId) {
        // my friend list. splice....
      }
    }

    setFriends(myNewFriendList);
  }  
  
  function removeFriend(friendId) {
    console.log(new Date(), "You called the removeFriend function with friendId", friendId);

    setFriends(friends.filter(f => f.id !== friendId));
  }

  function testThisOut() {
    console.log(new Date(), "You called this function.");
  }

  return (
    <Wrapper>
      <Title>Friends List</Title>
      {friends.map(f => <FriendCard key={f.name} name={f.name}
        image={f.image}
        occupation={f.occupation}
        location={f.location}
        removeFunction={  () => { removeFriend(f.id) }     } />)}
    </Wrapper>
  );
}

export default App;
