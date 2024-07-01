import React from 'react'
import './newsletter.css'
import {Container ,Row,Col} from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'
// import femaleTourist from '../assets/images/female-tourist.png'

const Newsletter = () => {
  return ( 
  <section className='newsletter'>
    <Container>
        <Row>
            <Col lg='6'>
            <div className="newsletter__content">
                <h2>
                    susbscribe now to get useful traveling information
                    </h2>
                    <div className="newsletter__input">
                        <input type="email" placeholder='eneter your mail ' />
                        <button className="btn newsletter__btn">Subscribe</button>

                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veniam enim unde. Impedit fugit nisi vero excepturi, deleniti animi! Doloribus provident perferendis voluptas eveniet molestias voluptatem ipsam incidunt obcaecati non illo. Explicabo, eum nobis.</p>
                    </div></Col>
                    <Col lg='6'>
                    <div className="newsletter__img"><img src={maleTourist} alt="" srcset="" /></div>
                    </Col>
        </Row>
    </Container>
  </section>
  )
}

export default Newsletter
