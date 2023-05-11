import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

export default function CardBox() {
    const [card, setCard] = React.useState([]);

    React.useEffect(() => {
        fetch('https://645b3c4e99b618d5f315c2d9.mockapi.io/card')
            .then((res) => {
                return res.json();
            })
            .then((arr) => {
                setCard(arr);
            })
    }, []);

    return (
        <Container fluid className="mt-5 bg-ligth">
            <Row>
                <Col md={{ span: 8, offset: 2 }}>
                    <h2 className='mt-5 text-center'>Cardbox</h2>
                    <Row xs={1} md={2} className='g-4'>

                        {card.map((data) => (
                            <Col>
                                <Card className='m-2' key="data.id">
                                    <Card.Img variant='top' src={data.img} style={{ height: 204 }} />
                                    <Card.Body>
                                        <Card.Title>{data.title}</Card.Title>
                                        <Card.Text>{data.text}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}

                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
