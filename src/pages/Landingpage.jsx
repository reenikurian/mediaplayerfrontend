import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Landingpage() {
  return (
   <>
   <Container className='mt-5 mb-5 d-flex align-items-center justify-content-evenly w-100'>
        <Row>
             <Col>
              <h3 className='textstyle'>Welcome To <span className='text-warning'>Media Player</span> </h3>
              <p className='textstyle' style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, earum non reiciendis distinctio fuga quos perferendis praesentium dolores provident nihil aut voluptatibus nisi, nemo iste. Natus sequi consequuntur id aliquid. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum aliquid recusandae cum quo! Ipsam id eos fuga illum. Sunt labore ut magnam ducimus quasi distinctio, commodi vitae earum laudantium nemo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro illum aperiam nihil minima perspiciatis alias ad natus et, ea cumque laboriosam quis hic veniam eius facere nulla, asperiores animi. Laudantium?</p>
              <Link to='/home'>
              <button className='btn btn-warning mt-5'>Get Started<i class="fa-solid fa-arrow-right ms-2"></i></button>
              </Link>
             </Col>
             <Col>
             <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" className='ms-5' height={'400px'} />
             </Col>
        </Row>
   </Container>
   <div className='container mt-5 mb-5' >
    <h3 className='textstyle mb-3'>Features</h3>
    <div className='cards d-flex align-items-center justify-content-evenly'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" 
      height={'250px'} />
      <Card.Body className='bg-dark '>
        <Card.Title className='textstyle' >Card Title</Card.Title>
        <Card.Text className='textstyle' >
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" 
      height={'250px'} />
      <Card.Body className='bg-dark '>
        <Card.Title className='textstyle' >Card Title</Card.Title>
        <Card.Text className='textstyle' >
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" 
      height={'250px'} />
      <Card.Body className='bg-dark '>
        <Card.Title className='textstyle' >Card Title</Card.Title>
        <Card.Text className='textstyle' >
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
   </div>
   <div className='container mt-5 mb-5 border border-2 border-secondary rounded p-5'>
      <Row>
        <Col>
        <h3 className='textstyle mb-3'>Simple and Powerfull</h3>
        <p className='textstyle'> <span className='fs-5 fw-bolder'>Play Everything:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nemo assumenda consequatur. Quisquam cum sint voluptas, nihil suscipit assumenda architecto itaque reprehenderit minima voluptatem veritatis, earum labore, iusto eius ducimus!</p>
        <p className='textstyle'> <span className='fs-5 fw-bolder'>Play Everything:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nemo assumenda consequatur. Quisquam cum sint voluptas, nihil suscipit assumenda architecto itaque reprehenderit minima voluptatem veritatis, earum labore, iusto eius ducimus!</p>
        <p className='textstyle'> <span className='fs-5 fw-bolder'>Play Everything:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nemo assumenda consequatur. Quisquam cum sint voluptas, nihil suscipit assumenda architecto itaque reprehenderit minima voluptatem veritatis, earum labore, iusto eius ducimus!</p>
        </Col>
        <Col>
        <div className='mt-3'>
          <iframe width="400" height="480" src="https://www.youtube.com/embed/RLzC55ai0eo" title="Heeriye (Official Video) Jasleen Royal ft Arijit Singh| Dulquer Salmaan| Aditya Sharma |Taani Tanvir" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        </Col>
      </Row>
   </div>
   </>
  )
}

export default Landingpage