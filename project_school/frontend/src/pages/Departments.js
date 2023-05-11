import{React, useEffect, useState } from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import axios from 'axios';

export default function Departments() {
    const [departments, setDepartment] = useState([]);

    useEffect(() => {
        const getDepartment = async () => {
            const response = await axios.get('http://localhost:5000/department');
            setDepartment(response.data);
        }
        getDepartment();
    }, []);
    return (
        <>
            <Card>
                <ListGroup>
                    <ListGroupItem style={{cursor: 'pointer'}} key={0}>
                        All
                    </ListGroupItem>
                    {departments.map((data) => (
                        <ListGroupItem style={{cursor: 'pointer'}} key={data.id}>
                            {data.name}
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </Card>
        </>
    );
}
