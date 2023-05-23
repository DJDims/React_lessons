import React from 'react';
import { Container } from 'react-bootstrap/';
import { Nav } from 'react-bootstrap/';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header() {
	return (
		<Navbar bg="light" expand="lg" sticky='top' collapseOnSelect>
			<Container>
				<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
				<NavbarToggle aria-controls='responsive-navbar-nav' />
				<NavbarCollapse id='responsive-navbar-nav'>
					<Nav className='me-auto'>
						<Nav.Link href='/'>Home</Nav.Link>
						<Nav.Link href='/speciality'>Specialities</Nav.Link>
						<Nav.Link href='/profession'>Manage Professions</Nav.Link>
						<Nav.Link href='/department'>Manage Departments</Nav.Link>
					</Nav>
					<Nav className='justify-content-end flex-grow-1 pe-3'>
						<Nav.Link href='/login'>Login</Nav.Link>
						<Nav.Link href='/register'>Register</Nav.Link>
						<Nav.Link href='/profile'>Profile</Nav.Link>
						<Nav.Link href='/logout'>Logout</Nav.Link>
					</Nav>
				</NavbarCollapse>
			</Container>
		</Navbar>
	)
}
