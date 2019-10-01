import React from 'react';
import FollowerDetails from './Follower';

// import axios from "axios";

const staticFollowerData = [{
  name:"Mayowa Ade",
  sex:"male"
},
{
name:"Tamilor yetunde",
sex: "female"
}
]

export default class FollowerList extends React.Component {

  constructor(props){
    super(props);

    this.state= {
      followerInfoArray: []
    }
  }

  componentDidMount(){
    // axios.get("https://api.github.com/users/temitopeakinsoto/followers")
    // .then(response => {
    //   this.setState({ followerInfoArray: response.data })
    // })
    // .catch()
 
  }

  render(){
    console.log('data is', this.userInfo);
    return (      
      <div className="App">
      <p>Hllo</p>
       {/* <FollowerDetails data={staticData}/>  */}
      </div>
    );
  }  
}
