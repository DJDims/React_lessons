import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Specialities() {
  return (
    <Container className="mt-1">
        <h2>Specialities</h2>
        <Row>
            <Col md="3">
                <h5>DEPARTMENTS</h5>
            </Col>
            <Col md="9">
                <h5>SPECIALITIES</h5>
            </Col>
        </Row>
    </Container>
  )
}
