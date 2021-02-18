import React, { Component } from 'react'
import "./App.css"
import "./Backend.css"
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class Backend extends Component {
    render() {
        return (
            <>
            <div className="backend_site">
                <div className="backend_header">
                    <h1>Subscriber List</h1>
                    <h5>X Subscribers Total</h5>


                </div>
                <div className="to_home"></div>
                <Link to="/">
                    <button>To Home</button>
                </Link>
            </div>


            
            </>
        )
    }
}
