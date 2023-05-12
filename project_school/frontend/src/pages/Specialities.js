import React from 'react'
import { Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap'
import Departments from './Departments';
import SpecialityList from './SpecialityList';

export default function Specialities() {
	const [activeIndex, setActiveIndex] = React.useState(0);
	const [searchValue, setSearchValue] = React.useState('');

	return (
		<Container className="mt-1">
			<h2>Specialities</h2>
			<Row>
				<Col md={{ span: 5, offset: 7 }}>
					<h5 className='text-center mt-3'>Search speciality</h5>
					<Form className="d-flex ps-1">
						<FormControl
							type="text"
							placeholder="search"
							className="me-sm-2"
							id="input"
							value={searchValue}
							onChange={(event) => setSearchValue(event.target.value)}
						/>
						<Button variant="outline-info" onClick={() => setSearchValue('')}>Clear</Button>
					</Form>
				</Col>
			</Row>
			<Row>
				<Col md="3">
					<h5>DEPARTMENTS</h5>
					<Departments depId={activeIndex} onClickDepartment={(id) => setActiveIndex(id)} />
				</Col>
				<Col md="9">
					<h5>SPECIALITIES</h5>
					<SpecialityList departmentId={activeIndex} searchValue={searchValue} setSearchValue={setSearchValue} />
				</Col>
			</Row>
		</Container>
	)
}
