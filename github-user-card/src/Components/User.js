import React, {Component} from "react";

export default class UserDetails extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const {name, sex} = this.props.data;
        return(
            <div className="App">
                <h1>{`Hello my name is ${name}`}</h1>
                <p>{`I am a ${sex}`}</p>
            </div>
        )
    }
}