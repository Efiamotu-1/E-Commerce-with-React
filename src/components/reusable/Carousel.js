import React from 'react'
import {Carousel} from 'react-bootstrap'

function Slider() {
    return (
        <>

<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://rukminim1.flixcart.com/flap/1688/280/image/b2199b040513b1ae.jpg?q=50"
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://rukminim1.flixcart.com/flap/1688/280/image/3510acb9d34b51dc.jpg?q=50"
      alt="Second slide"
    />


  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://rukminim1.flixcart.com/flap/1688/280/image/a11b99e85190ffa2.jpg?q=50"
      alt="Third slide"
    />

   
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://rukminim1.flixcart.com/flap/1688/280/image/0cf3cc3e7cbf6531.jpg?q=50"
      alt="Third slide"
    />

   
  </Carousel.Item>
</Carousel>

        </>
    )
}
export default Slider

