import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Table } from "semantic-ui-react";
import { Link } from 'react-router-dom';

export default function Read() {
    const [apiData, SetApiData] = useState([]);
    useEffect(() => {
        axios.get("https://sugabackend.azurewebsites.net/api/crud_assignment")
            .then((getData) => {
                SetApiData(getData.data);
            })
    }, []);

    const setDataToStorage = (id ,name, email,contact) => {
        
        localStorage.setItem('ID', id);
        localStorage.setItem('name', name);
        localStorage.setItem('email',email);
        localStorage.setItem('contact',contact);
    };
   
    const getData = () =>{
        axios.get("https://sugabackend.azurewebsites.net/api/crud_assignment")
        .then((getData) => {
            SetApiData(getData.data);
        })
    };

    const onDelete = (id) =>{
       axios.delete(`https://sugabackend.azurewebsites.net/api/crud_assignment/${id}`)
       .then(() => {
           getData();
       })
    }

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Id</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Contact</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {apiData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data._id}</Table.Cell>
                                <Table.Cell>{data.name}</Table.Cell>
                                <Table.Cell>{data.email}</Table.Cell>
                                <Table.Cell>{data.contact}</Table.Cell>
                                <Table.Cell>
                                    
                                        <Button onClick={() => onDelete(data._id)}>Delete</Button>
                                    
                                </Table.Cell>
                                <Table.Cell>
                                    <Link to='/update'>
                                        <Button onClick={() => setDataToStorage(data._id,data.name,data.email,data.contact)}>Update</Button>
                                    </Link>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}

                </Table.Body>
            </Table>
            <div>
                <Link to='/create'>
                    <Button >Add Employee</Button>
                </Link>
            </div>
        </div>
    )
}