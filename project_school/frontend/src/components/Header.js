import React from 'react';
import { Container } from 'react-bootstrap/';
import { Nav } from 'react-bootstrap/';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

export default function Header() {
	const [name, setName] = React.useState('');
	const [role, setRole] = React.useState('');
	let navbar_admin = [];
	let navbar_user = [];
	let navbar_guest = [];

	React.useEffect(() => {
		refreshToken();
	});

	const refreshToken = async () => {
		try {
			const response = await axios.get(`http://localhost:5000/users/token`);
			const decoded = jwt_decode(response.data.accessToken);
			setName(decoded.name);
			setRole(decoded.role);
		} catch (error) {
			if (error.response) {

			}
		}
	}

	if (role === 'admin') {
		navbar_admin = [
			{name: 'Manage Profession', href: '/profession'},
			{name: 'Manage Department', href: '/department'}
		];
		navbar_user = [
			{name: 'Profile', href: '/profile'},
			{name: 'Logout', href: '/logout'}
		];
	} else if (role === 'user') {
		navbar_admin = [];
		navbar_user = [
			{name: 'Profile', href: '/profile'},
			{name: 'Logout', href: '/logout'}
		];
	} else {
		navbar_guest = [
			{name: 'Login', href: '/login'},
			{name: 'Register', href: '/register'}
		];
	}

	return (
		<Navbar bg="light" expand="lg" sticky='top' collapseOnSelect>
			<Container>
				<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
				<NavbarToggle aria-controls='responsive-navbar-nav' />
				<NavbarCollapse id='responsive-navbar-nav'>
					<Nav className='me-auto'>
						<Nav.Link href='/'>Home</Nav.Link>
						<Nav.Link href='/speciality'>Specialities</Nav.Link>
						{/* <Nav.Link href='/profession'>Manage Professions</Nav.Link>
						<Nav.Link href='/department'>Manage Departments</Nav.Link> */}
						{navbar_admin.map((value, i) => (
							<Nav.Link href={value.href} key={i}>{value.name}</Nav.Link>
						))}
					</Nav>
					<Nav className='justify-content-end flex-grow-1 pe-3'>
						{/* <Nav.Link href='/login'>Login</Nav.Link>
						<Nav.Link href='/register'>Register</Nav.Link>
						<Nav.Link href='/profile'>Profile</Nav.Link>
						<Nav.Link href='/logout'>Logout</Nav.Link> */}
						{navbar_guest.map((value, i) => (
							<Nav.Link href={value.href} key={i}>{value.nameUser}{value.name}</Nav.Link>
						))}
						{navbar_user.map((value, i) => (
							<Nav.Link href={value.href} key={i}>{value.nameUser}{value.name}</Nav.Link>
						))}
					</Nav>
				</NavbarCollapse>
			</Container>
		</Navbar>
	)
}
