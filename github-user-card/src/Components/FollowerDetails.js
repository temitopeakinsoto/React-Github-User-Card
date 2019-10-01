import React, {Component} from "react";

export default class FollowerDetails extends Component {
    constructor(props){
        super(props)
    }
    render(){    
        const {login, avatar_url} = this.props.data    
        return(
            <div className="App">
                <img src={avatar_url}/>
                <h1>{login}</h1>
            </div>
        )
    }
}