import React, { Component } from 'react';
import { NavbarComp, TextInput } from '../components/index';
import { Person, VpnKey, ArrowRightAlt } from '@material-ui/icons'
import { Button, Nav } from 'react-bootstrap';
import {
    Link
} from "react-router-dom";
export default class ForgetPass extends Component {

    constructor() {
        super();
        this.state = {
            email: null
        }
    }


    validate(e) {
        const { email } = this.state
        if (email !== null) {
            var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if (re.test(email)) {
                alert("Successfull!! Please check your inbox")
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
            <div style={{ height: "50%", width: "100%", background: "rgb(60, 77, 235)", position: "absolute", borderBottomLeftRadius: 100, marginTop: 50 }}></div>
            <NavbarComp LoginBtn={<Nav.Link><Link to="/Login" className="LoginBtn_Design2">Login</Link></Nav.Link>} SignupBtn={<Nav.Link><Link to="/signup" style={{ color: "white", padding: 7, borderRadius: 5, border: "1px solid #6e00ff", background: "#6e00ff", paddingLeft: 15, paddingRight: 15, textDecoration: "none" }}>Signup</Link></Nav.Link>} />
            <div style={{ padding: 10 }}>

                <div className="LoginForm">
                    <h3>Password reset</h3>
                    <p style={{ color: "rgb(202, 191, 191)" }}>Enter your email below to proceed.</p>
                    <br />
                    <div style={{ marginTop: 10 }}>
                        Email address
                    <TextInput type="email" placeholder="name@example.com" icon={<Person />} HandleChange={(e) => this.setState({ email: e.target.value })} />
                    </div>
                    <br />
                    <Button variant="primary" style={{ borderRadius: 20, width: 175, background: "rgb(60, 77, 235)" }} onClick={() => this.validate()}>Reset password <ArrowRightAlt /></Button>
                    <hr />
                    <p>Not registered?<Link to="/Signup">Create account</Link></p>
                </div>

            </div>
        </div>
    }
}