import React, { Component } from 'react';
import { Person, VpnKey, ArrowRightAlt, VisibilityOff, Visibility } from '@material-ui/icons'
import { Button, Nav } from 'react-bootstrap';
import { NavbarComp, TextInput } from '../components/index';
import { Checkbox } from '@material-ui/core';
import {
    Link
} from "react-router-dom";
export default class Signup extends Component {


    constructor() {
        super();
        this.state = {
            email: null,
            password: null,
            Confirm_password: null
        }
    }


    validate() {
        const { email, password, Confirm_password } = this.state
        if (email !== null && password !== null && Confirm_password !== null) {
            var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if (re.test(email)) {
                if (password === Confirm_password) {
                    alert("Registration Succesfull")
                }
                else {
                    alert("password and confirm password must be same")
                }
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
        <div style={{height: "60%", width: "100%", background: "rgb(60, 77, 235)", position: "absolute", borderBottomLeftRadius: 100, marginTop : 50}}></div>           
            <NavbarComp LoginBtn={<Nav.Link><Link to="/Login" className="LoginBtn_Design2">Login</Link></Nav.Link>} />
            <div style={{ padding: 10 }}>
                <div className="SignupForm">
                    <h3>Create account</h3>
                    <p style={{ color: "rgb(202, 191, 191)" }}>Made with love by developers for developers.</p>
                    <br />
                    <div style={{ marginTop: 15 }}>
                        Email address
                <TextInput type="email" placeholder="name@example.com" icon={<Person />} HandleChange={(e) => this.setState({ email: e.target.value })} />
                        <br />
                    Password
                    <TextInput type={this.state.PasswordShow ? "password" : "text"} PasswordIcon={this.state.PasswordShow ? <Visibility /> : <VisibilityOff />} HideShow_Password={() => this.setState({ PasswordShow: !this.state.PasswordShow })} placeholder="*******" icon={<VpnKey />} HandleChange={(e) => this.setState({ password: e.target.value })} />
                        <br />
                    Confirm password
                    <TextInput type="password" placeholder="*******" icon={<VpnKey />} HandleChange={(e) => this.setState({ Confirm_password: e.target.value })} />
                        <br />
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <Checkbox
                                size="small"
                                inputProps={{ 'aria-label': 'checkbox with small size' }}
                            />
                            <span>I agree to the <a href="#">terms and conditions</a></span>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <Checkbox
                                size="small"
                                inputProps={{ 'aria-label': 'checkbox with small size' }}
                            />
                            <span>I agree to the <a href="#">privacy policy</a></span>
                        </div>
                        <br />
                        <Button style={{ borderRadius: 20, width: 165, background: "rgb(60, 77, 235)" }} onClick={() => this.validate()}>Create Account <ArrowRightAlt /></Button>
                        <hr />
                        <p>Already have an acocunt?<Link to="/Login">Sign in</Link></p>
                    </div>
                </div>

            </div>
        </div>
    }
}