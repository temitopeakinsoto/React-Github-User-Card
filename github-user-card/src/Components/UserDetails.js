import React, {Component} from "react";
import '../App.css';

export default class UserDetails extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const {name, login, avatar_url, public_repos} = this.props.data;
        return(
            <div className="userdetails">
                <div>
                    <h1>{`Name: ${name}`}</h1>
                    <p>{`Username: ${login}`}</p>
                    <p>{`Repositories: ${public_repos}`}</p>
                </div>
                <img src={avatar_url}/>
            </div>
        )
    }
}