import React, {Component} from "react";
import Login from "../../components/Login";
import LoginV1 from "../../components/Login-V1";
import API from "../../utils/API";
import { Container, Row, Col } from 'reactstrap';

class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            action: props.action,
            loggedIn: false,
            username: "",
            password: ""
        };
    }

    componentDidMount() {
        console.log("Login State: " + this.state.action);
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
        console.log("updating...");
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

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.username && this.state.password) {
            API.login({
                username: this.state.username,
                password: this.state.password
            })
            .then(res => {
                if (res.data.loggedIn) {
                    this.setState({
                        loggedIn: true
                    });
                };
                console.log('logged in!')
            }).catch(err => console.log(err));
        }
    };
    
    render() {
        if (this.state.action === 'signup') {
            return (
                <Container>
                    <h1>Signup -- Under Construction</h1>
                    {/* <Login /> */}
                    <LoginV1  submit={this.handleFormSubmit} inputChange={this.handleInputChange} username={this.state.username} password={this.state.password}/>
                    <h2>{this.loginMessage()}</h2>
                </Container>
            )
        } else {
            return (
                <Container>
                    <h1>Login</h1>
                    {/* <Login /> */}
                    <LoginV1  submit={this.handleFormSubmit} inputChange={this.handleInputChange} username={this.state.username} password={this.state.password}/>
                    <h2>{this.loginMessage()}</h2>
                </Container>
            )
        }  
    }
}

export default SignIn;