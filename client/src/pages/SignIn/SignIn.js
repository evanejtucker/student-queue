import React, {Component} from "react";


class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            action: props.action
        };
    }

    componentDidMount() {
        console.log(this.state.action);
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
                </div>
            )
        }  
    }
}

export default SignIn;