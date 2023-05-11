import React from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap'

import doom1 from '../assets/doom1.png';
import doom2 from '../assets/doom2.png';
import doom3 from '../assets/doom3.png';
import doom4 from '../assets/doom4.png';
export default function CarouselBox() {
    return (
        <Carousel>
            <Carousel.Item>
                <img className='d-block w-100' src={doom1} />
                <Carousel.Caption>
                    <h3>DOOM</h3>
                    <p>Lorem ipsum</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className='d-block w-100' src={doom2} />
                <Carousel.Caption>
                    <h3>DOOM</h3>
                    <p>Lorem ipsum</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className='d-block w-100' src={doom3} />
                <Carousel.Caption>
                    <h3>DOOM</h3>
                    <p>Lorem ipsum</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className='d-block w-100' src={doom4} />
                <Carousel.Caption>
                    <h3>DOOM</h3>
                    <p>Lorem ipsum</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
