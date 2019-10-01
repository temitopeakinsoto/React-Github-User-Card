import React from 'react';
import UserDetails from './Components/UserDetails';
import FollowerList from './Components/FollowerList';
import axios from "axios";
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
    axios.get("https://api.github.com/users/temitopeakinsoto")
    .then(response => {
      this.setState({ userInfo: response.data })
    })
    .catch(error => {
      console.log(error.data)
    }); 
  }

  render(){
    return (      
      <div className="App">
       <UserDetails data={this.state.userInfo}/>
       <FollowerList followers={this.state.userInfo.following_url}/>
      </div>
    );
  }  
}
