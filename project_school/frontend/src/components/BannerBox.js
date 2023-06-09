import React from 'react'
import { Button, Container } from 'react-bootstrap'

export default function BannerBox() {
  return (
    <Container fluid className="bg-success text-white p-5 opacity-75" style={{backgroundImage:`url(https://images.hdqwalls.com/wallpapers/hotline-miami-4w.jpg)`, height: 400, backgorundSize:"cover"}}>
        <Container className='p-5' style={{alignItems:'center', justifyContent:'center'}}>
            <h1>Example hero banner</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p>
                <Button className='primary'>Read more...</Button>
            </p>
        </Container>
    </Container>
  )
}
