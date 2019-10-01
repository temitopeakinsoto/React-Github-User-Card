import React from 'react';
import FollowerDetails from './FollowerDetails';

export default class FollowerList extends React.Component {

  render(){
    const followersArray = this.props.followers
    return (      
    <div>
        {followersArray.map(follower => <div><FollowerDetails data={follower} /></div>)}
    </div>
    );
  }  
}
