import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import firstCarousel from '../image/firstCarousel.jpg'
import secondCarousel from '../image/secondCarousel.jpg'
// import ArtritisReumatoide from '../image/ArtritisReumatoide.jpg'
class CarouselHome extends React.Component {

    render(){
        return(
<Carousel>
{/* <Carousel.Item>
<Link to="/quienes-somos"><img
  className="d-block w-100"
  src={ArtritisReumatoide}
  alt="First slide"
/></Link>
<Carousel.Caption>
</Carousel.Caption>
</Carousel.Item> */}
<Carousel.Item>
<Link to="/quienes-somos"><img
  className="d-block w-100"
  src={firstCarousel}
  alt="First slide"
/></Link>
<Carousel.Caption>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
  className="d-block w-100"
  src={secondCarousel}
  alt="Third slide"
/>
<Carousel.Caption>

</Carousel.Caption>
</Carousel.Item>
</Carousel>
)
    }
}

export default CarouselHome;
