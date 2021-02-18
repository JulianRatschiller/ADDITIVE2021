import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import "./App.css"
import "./Backend.css"
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";


function Backend() {
    
    
    var element = <h4>Hello World!</h4>

    useEffect(() => {
        let url = 'https://api.sheety.co/f746d650958bef07d26c4dae368ca02f/trialDay/subscribers';
        fetch(url)
        .then((response) => response.json())
        .then(json => {
            setPeople(json.subscribers);
            console.log(json.subscribers);
            console.log(people);
    });
    }, [])

    const [people, setPeople] = useState([]);


    

return (
    <>
    <div className="backend_site">
        <div className="backend_header">
            <h1>Subscriber List</h1>
            
            <h4>{people.length} Subscribers Total</h4>
        </div>
        <hr></hr>
        <div className="backend_table">
            <h5>Full Name</h5>
            <h5>Gender</h5>
            <h5>Email Address</h5>
            <h5>Gender</h5>
        </div>
        <div id="root" className="backend_content">
            
            
                {people.map(person => 
                <div key={person.email} className="backend_people"> 
                    <div className="backend_qualities">
                        <div>{person.firstname}</div>
                    </div>
                    <div className="backend_qualities">
                        <div>{person.lastname}</div>
                    </div>
                    <div className="backend_qualities">
                        <div>{person.email}</div>
                    </div>
                    <div className="backend_qualities">
                        <div>{person.gender}</div>
                    </div>
                    
                </div>)}
        </div>


        <div className="to_backend">
            <Link to="/">
                <button>To Home</button>
            </Link>
            </div>
        </div>    
    </>
)

}

export default Backend