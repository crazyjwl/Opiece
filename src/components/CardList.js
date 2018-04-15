import React from 'react';
import Card from './Card';

const CardList = ({friends}) =>{
  return (
    <div>
      {
        friends.map((user,i) =>{
          return (
            <Card
              key={i}
              id={friends[i].id}
              name={friends[i].name}
              email={friends[i].email}
            />
          );
        })
      }
    </div>
  );
  // return (
  //   <div>
  //     <Card id={friends[0].id} name={friends[0].name} email={friends[0].email}/>
  //     <Card id={friends[1].id} name={friends[1].name} email={friends[1].email}/>
  //     <Card id={friends[2].id} name={friends[2].name} email={friends[2].email}/>
  //     <Card id={friends[3].id} name={friends[3].name} email={friends[3].email}/>
  //     <Card id={friends[4].id} name={friends[4].name} email={friends[4].email}/>
  //     <Card id={friends[5].id} name={friends[5].name} email={friends[5].email}/>
  //     <Card id={friends[6].id} name={friends[6].name} email={friends[6].email}/>
  //     <Card id={friends[7].id} name={friends[7].name} email={friends[7].email}/>
  //     <Card id={friends[8].id} name={friends[8].name} email={friends[8].email}/>
  //   </div>
  // );
}

export default CardList;
