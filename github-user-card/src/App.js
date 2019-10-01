import React from 'react';
import UserDetails from './Components/User';
import FollowerDetails from './Components/Follower';

// import axios from "axios";

const staticData = {
  name: "Temitope Akinsoto",
  sex: "male"
}

export default class App extends React.Component {

  constructor(props){
    super(props);

    this.state= {
      userInfo: {}
    }
  }

  componentDidMount(){
    // axios.get("https://api.github.com/users/temitopeakinsoto")
    // .then(response => {
    //   this.setState({ userInfo: response.data })
    // })
    // .catch()
 
  }

  render(){
    console.log('data is', this.userInfo);
    return (      
      <div className="App">
       <UserDetails data={staticData}/>
       <FollowerDetails /> 
      </div>
    );
  }  
}
