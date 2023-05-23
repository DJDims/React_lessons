import React from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function DepartmentList() {
	const [department, setDepartment] = React.useState([]);
	const getDepartment = async () => {
		const response = await axios.get(`http://localhost:5000/department`);
		setDepartment(response.data);
	}
	const deleteProfession = async (id) => {
		if (window.confirm('Delete department #'+id+'?')) {
			await axios.delete(`http://localhost:5000/department/${id}`);
			getDepartment();
		}
	}

	React.useEffect(() => {
		getDepartment();
	}, []);

	return (
		<Container className="mt-1">
            <h2 className='text-center mt-3'>Department list manage</h2>
            <Row>
                <Col md={{span: 9, offset: 2}}>
                    <p className='text-end'>
                        <Link to="/adddepartment">
                            <Button varian="primary" size="sm">
                                Add new
                            </Button>
                        </Link>
                    </p>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th className='text-center'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {department.map((department, index) => (
                                <tr key={department.id}>
                                    <td>{index+1}.#{department.id}</td>
                                    <td>{department.name}</td>
                                    <td className='text-center'>
                                        <Link to={`/editdepartment/${department.id}`} className="me-1">
                                            <Button variant="success">Edit</Button>
                                        </Link>
                                        <Button variant="danger" onClick={() => deleteProfession(department.id)} varian="danger">Delete</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
  )
}
