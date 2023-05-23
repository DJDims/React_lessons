import React from 'react'
import axios from 'axios'
import {Container, Form, Button, Row, Col} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

export default function AddDepartment() {
	const [name, setName] = React.useState('');
	
	const navigate = useNavigate();

	const saveDepartment = async (e) => {
		e.preventDefault();
		await axios.post(`http://localhost:5000/department`, {
			name: name,
		});
		navigate('/department');
	}

	return (
		<Container className='mt-1'>
			<h2 className='text-center'>Add new department</h2>
			<Row>
				<Col md={{span: 7, offset: 2}}>
					<Form onSubmit={saveDepartment}>
						<Form.Group controlId='formControlText'>
							<Form.Label>Name</Form.Label>
							<Form.Control className='input' type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
						</Form.Group>
						<Button variant='success' type='submit' className='mt-3'>Save department</Button>
						<Button variant='primary' className='mt-3 ms-3' href='/department'>Department list</Button>
					</Form>
				</Col>
			</Row>
		</Container>
  	)
}
