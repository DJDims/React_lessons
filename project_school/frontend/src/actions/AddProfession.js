import React from 'react'
import axios from 'axios'
import {Container, Form, Button, Row, Col} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

export default function AddProfession() {
	const [department, setDepartment] = React.useState([]);
	React.useEffect(() => {
		const getDepartment = async () => {
			const response = await axios.get(`http://localhost:5000/department`);
			setDepartment(response.data);
		}
		getDepartment();
	}, []);

	const [name, setName] = React.useState('');
	const [duration, setDuration] = React.useState('');
	const [education, setEducation] = React.useState('');
	const [description, setDescription] = React.useState('');
	const [poster, setPoster] = React.useState('');
	const [department_id, setDepartment_id] = React.useState(0);
	
	const navigate = useNavigate();

	const saveProfession = async (e) => {
		e.preventDefault();
		await axios.post(`http://localhost:5000/profession`, {
			name: name,
			duration: duration,
			education: education,
			description: description,
			poster: poster,
			department_id: department_id
		});
		navigate('profession');
	}

	return (
		<Container className='mt-1'>
			<h2 className='text-center'>Add new profession</h2>
			<Row>
				<Col md={{span: 7, offset: 2}}>
					<Form onSubmit={saveProfession}>
						<Form.Group controlId='formControlText'>
							<Form.Label>Name</Form.Label>
							<Form.Control className='input' type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
						</Form.Group>
						<Form.Group controlId='formControlText'>
							<Form.Label>Duration</Form.Label>
							<Form.Control className='input' type='number' placeholder='Duration' min={1} max={4} value={duration} onChange={(e) => setDuration(e.target.value)} />
						</Form.Group>
						<Form.Group controlId='formControlText'>
							<Form.Label>Education</Form.Label>
							<Form.Control className='input' type='text' placeholder='Education' value={education} onChange={(e) => setEducation(e.target.value)} />
						</Form.Group>
						<Form.Group controlId='formControlText'>
							<Form.Label>Description</Form.Label>
							<Form.Control className='input' as='textarea' value={description} onChange={(e) => setDescription(e.target.value)} />
						</Form.Group>
						<Form.Group controlId='formControlText'>
							<Form.Label>Department</Form.Label>
							<Form.Select name='department_id' onChange={(e) => setDepartment_id(e.target.value)}>
								<option key={0} value={0}>Select department</option>
								{department.map((data) => (
									<option key={data.id} value={data.id}>{data.name}</option>
									))}
							</Form.Select>
						</Form.Group>
						<Form.Group controlId='formControlText'>
							<Form.Label>Poster</Form.Label>
							<Form.Control className='input' type='text' placeholder='Poster' value={poster} onChange={(e) => setPoster(e.target.value)} />
						</Form.Group>
						<Button variant='success' type='submit' className='mt-3'>Save profession</Button>
						<Button variant='primary' className='mt-3 ms-3' href='/profession'>Profession list</Button>
					</Form>
				</Col>
			</Row>
		</Container>
  	)
}
