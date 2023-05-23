import React from 'react'
import axios from 'axios'
import {Container, Form, Button, Row, Col} from 'react-bootstrap'
import {useNavigate, useParams} from 'react-router-dom'

export default function EditDepartment() {
	const [name, setName] = React.useState('');
	
	const navigate = useNavigate();
	const {id} = useParams();

	React.useEffect(() => {
		const getDepartmentById = async () => {
			const response = await axios.get(`http://localhost:5000/department/${id}`);
			setName(response.data.name);
		}
		getDepartmentById();
	}, [id]);

	const updateDepartment = async (e) => {
		e.preventDefault();
		await axios.put(`http://localhost:5000/department/${id}`, {
			name: name,
		});
		navigate('/department');
	}

	return (
		<Container className='mt-1'>
			<h2 className='text-center'>Edit Department</h2>
			<Row>
				<Col md={{span: 7, offset: 2}}>
					<Form onSubmit={updateDepartment}>
						<Form.Group controlId='formControlText'>
							<Form.Label>Name</Form.Label>
							<Form.Control className='input' type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
						</Form.Group>
						<Button variant='success' type='submit' className='mt-3'>Update department</Button>
						<Button variant='primary' className='mt-3 ms-3' href='/department'>Department list</Button>
					</Form>
				</Col>
			</Row>
		</Container>
  	)
}
