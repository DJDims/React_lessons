import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';

export default function DetailSpeciality() {
	const [speciality, setSpeciality] = React.useState('');
	const [department, setDepartment] = React.useState('');
	const {id} = useParams();
	React.useEffect(() => {
		const getSpecialityById = async () => {
			const response = await axios.get(`http://localhost:5000/profession/${id}`);
			setSpeciality(response.data);
			setDepartment(response.data.department);
		}
		getSpecialityById();
	});

	return (
		<>
			<Container className="mt-1">
				<h2 className='text-center m-4'>Speciality #{speciality.id}</h2>
				<Row className="m-2" key={speciality.id}>
					<Col md="6">
						<img className='mr-3' style={{"object-fit":"contain","max-width":"100%"}} src={speciality.poster} alt='logo' />
					</Col>
					<Col md="6">
						<h5>{speciality.name}</h5>
						<p><span className='fst-italic'>duration</span>{speciality.duration}</p>
						<p><span className='fst-italic'>education</span>{speciality.education}</p>
						<p><span className='fst-italic'>description</span>{speciality.description}</p>
						<p><span className='fst-italic'>department</span>{department.name}</p>
						<p><span className='fst-italic'>publish</span>{speciality.createdAt}</p>
						<Link to={'/speciality'}>Specialities list</Link>
					</Col>
				</Row>
			</Container>
		</>
  	)
}
