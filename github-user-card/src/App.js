import React from 'react';
import UserDetails from './Components/UserDetails';
import FollowerList from './Components/FollowerList';
import axios from "axios";

export default class App extends React.Component {
  
  constructor(props){
    super(props);

    this.state= {
      userInfo: {},
      followersArray: []
    }
  }

  componentDidMount(){
    axios.get("https://api.github.com/users/temitopeakinsoto")
    .then(response => {
      this.setState({ userInfo: response.data })
    }).catch(error => {
      console.log(error.data)
    }); 

    axios.get("https://api.github.com/users/temitopeakinsoto/followers")
    .then(response => {
      this.setState({ followersArray: response.data })
    })
    .catch()
  }

  render(){
    return (      
      <div className="App">
       <UserDetails data={this.state.userInfo}/>
       <FollowerList followers={this.state.followersArray}/>
      </div>
    );
  }  
}
