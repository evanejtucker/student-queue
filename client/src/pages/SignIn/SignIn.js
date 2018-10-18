import React, {Component} from "react";
import Login from "../../components/Login";
import API from "../../utils/API";
import { Container, Row, Col } from 'reactstrap';

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
        if (!this.state.loggedIn) {
            API.isLoggedIn().then(res=> {
                if (res.data.loggedIn) {
                    this.setState({
                        loggedIn: true
                    });
                }
            }).catch(err => {
                console.log(err);
            });
        }
    }

    componentDidUpdate() {
        if (!this.state.loggedIn) {
            API.isLoggedIn().then(res=> {
                if (res.data.loggedIn) {
                    this.setState({
                        loggedIn: true
                    });
                }
            }).catch(err => {
                console.log(err);
            });
        }
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
                <Container>
                    <Login />
                </Container>
            )
        } else {
            return (
                <Container>
                    <h1>Login</h1>
                    <Login />
                    <h2>{this.loginMessage()}</h2>
                </Container>
            )
        }  
    }
}

export default SignIn;