import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function Register() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [msg, setMsg] = useState('');

	const navigate = useNavigate();

	const Register = async (e) => {
		e.preventDefault();
		try {
			await axios.post(`http://localhost:5000/users/register`, {
				name: name,
				email: email,
				password: password,
				confirmPassword: confirmPassword
			});
			navigate('/login');
		} catch (err) {
			if (err.response) {
				setMsg(err.response.data.msg);
			}
		}
	} 

  return (
	<Container className='mt-1'>
		<h2 className='text-center mt-3'>Register form</h2>
		<Row className='d-flex justify-content-center align-items-center'>
			<Col md={8} lg={6} xs={12}>
				<Card className='shadow'>
					<Card.Body>
						<Form onSubmit={Register}>
							<p className='hat-text-centered'>{msg}</p>
							<Form.Group className='mb-3'>
								<Form.Label>Username</Form.Label>
								<Form.Control type='text' placeholder='Enter username' value={name} onChange={(e) => setName(e.target.value)} />
							</Form.Group>
							<Form.Group className='mb-3'>
								<Form.Label>Email</Form.Label>
								<Form.Control type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
							</Form.Group>
							<Form.Group className='mb-3'>
								<Form.Label>Password</Form.Label>
								<Form.Control type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} />
							</Form.Group>
							<Form.Group className='mb-3'>
								<Form.Label>Confirm password</Form.Label>
								<Form.Control type='password' placeholder='Enter password again' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
							</Form.Group>
							<div className='d-flex justify-content-center'>
								<Button variant="primary" type="submit" className="w-50">Register</Button>
							</div>
						</Form>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	</Container>
  )
}
