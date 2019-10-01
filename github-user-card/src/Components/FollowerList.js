import React from 'react';
import FollowerDetails from './FollowerDetails';

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

const staticData = {
    name: "Alex Akin",
    sex: "male"
}

export default class FollowerList extends React.Component {

  constructor(props){
    super(props);

    // this.state= {
    //   followerInfoArray: []
    // }  
    
  }
  

  componentDidMount(){    
    
    // axios.get(`https://api.github.com/users/temitopeakinsoto/${followers_url}`)
    // .then(response => {
    //   this.setState({ followerInfoArray: response.data })
    // })
    // .catch()
 
  }

  render(){
    console.log('followers me is', this.props.followers);
    return (      
      <div className="App">
      {staticFollowerData.map((eachFollower) => <FollowerDetails data={eachFollower}/>)}
        {/* <FollowerDetails data={staticData}/>  */}
      </div>
    );
  }  
}
