import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {Container, Row, Col, Card} from 'react-bootstrap';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

export default function Profile() {
	const [name, setName] = useState('');
	const [role, setRole] = useState('');
	const [email, setEmail] = useState('');
	
	const navigate = useNavigate();

	useEffect(()  => {
		refreshToken();
	});

	const refreshToken = async () => {
		try {
			const response = await axios.get(`http://localhost:5000/users/token`);
			const decoded = jwt_decode(response.data.accessToken);
			setName(decoded.name);
			setRole(decoded.role);
			setEmail(decoded.email);
		} catch (err) {
			if (err.response) {
				navigate('/');
			}
		}
	}
	
	return (
		<Container clasname="mt-5">
			<h2 className='text-center mt-3'>Welcome, {name}</h2>
			<Row clasname="d-flex justify-content-center align-items-center">
				<Col md={8} lg={8} xs={12}>
					<Card clasname="shadow">
						<Card.Body>
							<table className='table is-fullwidth'>
								<thead>
									<tr>
										<th>No</th>
										<th>Name</th>
										<th>Email</th>
										<th>Role</th>
									</tr>
								</thead>
								<tbody>
									<tr key={1}>
										<td>{1}</td>
										<td>{name}</td>
										<td>{email}</td>
										<td>{role}</td>
									</tr>
								</tbody>
							</table>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	)
}
