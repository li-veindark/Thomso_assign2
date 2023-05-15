import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "semantic-ui-react";
import { Link } from 'react-router-dom';

export default function Create() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');

    const SendDataToAPI = () => {
        axios.post("https://sugabackend.azurewebsites.net/api/crud_assignment", {
            name:name,
            email:email,
            contact:contact
        });
    }
    return (<div>
        <h3>Add Employee</h3>
        <Form>
            <Form.Field>
                <label for="exampleInputName">Name</label>
                <input
                    
                    type="text"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter name"
                />
            </Form.Field>
           
            <Form.Field>
                <label for="exampleInputEmail">Email</label>
                <input

                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"

                />
            </Form.Field>
            <Form.Field>
                <label for="exampleInputPassword1">Contact</label>
                <input
                    type="number"
                    name="contact"
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="Contact No."
                />
            </Form.Field>
            <Link to = '/'>
            <Button type="submit" onClick={SendDataToAPI}>Submit</Button>
            </Link>
        </Form>
    </div>)
}




