import React, { Component } from 'react';
import { NavbarComp, TextInput } from '../components/index';
import { Person, VpnKey, ArrowRightAlt, VisibilityOff, Visibility } from '@material-ui/icons'
import { Button, Nav } from 'react-bootstrap';
import {
    Link
} from "react-router-dom";
export default class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: null,
            password: null
        }
    }


    validate() {
        // console.log(e.target.value)
        const { email, password } = this.state
        if (email !== null && password !== null) {
            var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if (re.test(email)) {
                alert("Login Succesfull")
            }
            else {
                alert("Error with email address")
            }
        }
        else {
            alert("Please fill all fields first")
        }
    }


    render() {
        return <div style={{ width: "100%", height: "100%" }}>
            <div style={{ height: "60%", width: "100%", background: "rgb(60, 77, 235)", position: "absolute", borderBottomLeftRadius: 100, marginTop: 50 }}></div>
            <NavbarComp SignupBtn={<Nav.Link><Link to="/signup" style={{ color: "white", padding: 7, borderRadius: 5, border: "1px solid #6e00ff", background: "#6e00ff", paddingLeft: 15, paddingRight: 15, textDecoration : "none" }}>Signup</Link></Nav.Link>} />
            <div style={{ padding: 10 }}>
                <div className="LoginForm">
                    <h3>Login</h3>
                    <p style={{ color: "rgb(202, 191, 191)" }}>Sign in to your account to continue.</p>
                    <br />
                    <div style={{ marginTop: 10 }}>
                        Email address
                    <TextInput type="email" placeholder="name@example.com" icon={<Person />} HandleChange={(e) => this.setState({ email: e.target.value })} />
                        <br />
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" }}>
                            Password
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <Link to="/ForgetPass" style={{ marginBottom: -8, fontSize: 13, color: "rgb(202, 191, 191)" }}>Lost password?</Link>
                                <a style={{ marginTop: -1, fontSize: 11, marginBottom: -2, color: "rgb(202, 191, 191)", cursor: "pointer" }}>------------------</a>
                            </div>
                        </div>
                        <TextInput type={this.state.PasswordShow ? "password" : "text"} placeholder="Password" icon={<VpnKey />} PasswordIcon={this.state.PasswordShow ? <Visibility /> : <VisibilityOff />} HideShow_Password={() => this.setState({ PasswordShow: !this.state.PasswordShow })} HandleChange={(e) => this.setState({ password: e.target.value })} />
                    </div>
                    <br />
                    <Button variant="primary" style={{ borderRadius: 20, width: 115, background: "rgb(60, 77, 235)" }} onClick={() => this.validate()}>Sign in <ArrowRightAlt /></Button>
                    <hr />
                    <p>Not registered? <Link to="/Signup"> Create account</Link></p>
                </div>
            </div>
        </div>
    }
}