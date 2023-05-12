import React from 'react';
import { Container } from 'react-bootstrap/';
import { Nav } from 'react-bootstrap/';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header() {
	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
				<NavbarToggle aria-controls='responsive-navbar-nav' />
				<NavbarCollapse id='responsive-navbar-nav'>
					<Nav className='me-auto'>
						<Nav.Link href='/'>Home</Nav.Link>
						<Nav.Link href='/speciality'>Specialities</Nav.Link>
						<Nav.Link href='/profession'>Manage Profession</Nav.Link>
					</Nav>
				</NavbarCollapse>
			</Container>
		</Navbar>
	)
}
