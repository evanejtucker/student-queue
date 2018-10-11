import React, {Component} from "react";
import API from "../../utils/API";

class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            action: props.action,
            loggedIn: false
        };
    }

    componentDidMount() {
        console.log(this.state.action);
        API.login({
            username: "evan.tucker",
            password: "password"
        }).then(res => {
            console.log(res.data);
            if (res.data) {
                this.setState({
                    loggedIn: true
                });
            }
        });
    }

    loginMessage = ()=> {
        if (this.state.loggedIn) {
            return "you are already logged in"
        } else {
            return "you are not logged in"
        }
    }
    

    render() {
        if (this.state.action === 'signup') {
            return (
                <div>
                    <h1>signin</h1>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>Login</h1>
                    <h2>{this.loginMessage()}</h2>
                </div>
            )
        }  
    }
}

export default SignIn;