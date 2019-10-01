import React, {Component} from "react";

export default class FollowerDetails extends Component {
    constructor(props){
        super(props)
    }

    render(){    
        const {name, sex} = this.props.data    
        return(
            <div className="App">
                <h1>{`Hello, there My name is ${name}`}</h1>
                <p>{`i am a ${sex} follower!`}</p>
            </div>
        )
    }
}