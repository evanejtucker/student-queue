import React, {Component} from "react";
import Login from "../../components/Login";
import LoginV1 from "../../components/Login-V1";
import Signup from "../../components/Signup";
import API from "../../utils/API";
import { Container, Row, Col } from 'reactstrap';

class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            action: props.action,
            loggedIn: false,
            firstname: "",
            lastname: "",
            username: "",
            password: "",
            email: ""
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
            return "you are logged in!"
        } else {
            return "you are not logged in"
        }
    }

    signupMessage = ()=> {
        if (this.state.loggedIn) {
            return "you are signed up!"
        } else {
            return "you are not signed up"
        }
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };

    handleLogin = event => {
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

    handleSignup = event => {
        event.preventDefault();
        if (this.state.firstname && this.state.lastname && this.state.username && this.state.password && this.state.email) {
            API.login({
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                username: this.state.username,
                password: this.state.password,
                email: this.state.email
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
                    <h1>Signup</h1>
                    {/* <Login /> */}
                    <Signup  
                        submit={this.handleSignup} 
                        inputChange={this.handleInputChange} 
                        firstname={this.state.firstname} 
                        lastname={this.state.lastname} 
                        username={this.state.username} 
                        password={this.state.password}
                        email={this.state.email}
                    />
                    <h2>{this.signupMessage()}</h2>
                </Container>
            )
        } else {
            return (
                <Container>
                    <h1>Login</h1>
                    {/* <Login /> */}
                    <LoginV1  
                        submit={this.handleLogin} 
                        inputChange={this.handleInputChange} 
                        username={this.state.username} 
                        password={this.state.password}/>
                    <h2>{this.loginMessage()}</h2>
                </Container>
            )
        }  
    }
}

export default SignIn;