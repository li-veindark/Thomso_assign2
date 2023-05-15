import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button } from "semantic-ui-react";
import { Link, useNavigate} from 'react-router-dom';

export default function Update() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [ID, setID] = useState('');
    const navigate = useNavigate();


    console.log(ID);
    const handleUpdate = (e) => {
        console.log("90");
        console.log(ID);
        e.preventDefault();
        axios.put(`https://sugabackend.azurewebsites.net/api/crud_assignment/${ID}`, {
            name:name,
            email:email,
            contact:contact
        }).then(() =>{
            navigate('/')
        });
    }

    useEffect(() => {
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
        setContact(localStorage.getItem("contact"));
        setID(localStorage.getItem("ID"));
    }, [])
    
    return (<div>
        <h3>Update credentials</h3>
        <Form >
            <Form.Field>
                <label >Name</label>
                <input
                    value={name}
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                  
                />
            </Form.Field>
           
            <Form.Field>
                <label >Email</label>
                <input
                    value={email}
                    type="email"
                   onChange={(e) => setEmail(e.target.value)}
                 
                />
            </Form.Field>
            <Form.Field>
                <label >Contact</label>
                <input
                    value={contact}
                    type="number"
                    onChange={(e) => setContact(e.target.value)}
                    
                />
            </Form.Field>
            <Link to = '/'>
            <Button type="submit" onClick={handleUpdate} >Update</Button>
            </Link>
        </Form>
    </div>)
}




