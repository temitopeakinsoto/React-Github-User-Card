import React from 'react';
import UserDetails from './Components/User';

export default class App extends React.Component {

  constructor(props){
    super(props);

    this.state= {
      userInfo: {}
    }
  }

  componentDidMount(){
 
  }

  render(){
    return (
      <div className="App">
       <UserDetails /> 
      </div>
    );
  }  
}
