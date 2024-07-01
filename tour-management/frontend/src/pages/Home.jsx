import React from 'react';
import '../styles/home.css'
import { Container,Row , Col} from 'reactstrap' ;
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
;
import experienceImg from '../assets/images/experience.png';
import Subtitle from './../shared/Subtitle';
import Testimonials from '../components/Testimonial/Testimonials';
import SearchBar from "../shared/SearchBar";
import ServiceList from '../services/ServiceList';
// import ServiceCard from '../services/ServiceCard'
import Newsletter from '../shared/Newsletter';        
import MesonryImagesGallery from '../components/imgage-gallery/MesonryImagesGallery';
import FeaturedTourList from '../components/Featured-toures/FeaturedTourList';
const Home = () => {
  return (
<>
<section>
  <Container>
    <Row>
      <Col lg="6">
      <div className="hero__content">
        <div className="hero__subtitle d-flex align-items-center">
          <Subtitle subtitle={' know before you go '} />
          <img src={ worldImg } alt="" srcset="" />
        </div>
        <h1>
          Travelling opens the door to creating{""}
          <span className="highlight">memories</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga sint obcaecati ipsum dicta dolorum 
          accusantium soluta 
          sapiente odit adipisci fugiat ad repellendus dignissimos libero
           hic quaerat explicabo, alias pariatur quod accusamus non doloribus. Ipsam?
        </p>
        </div>
        </Col>

        <Col lg="2">
        <div className="hero__img-box">
          <img src={heroImg} alt=""  />
        </div>
        </Col>
        <Col lg="2">
        <div className="hero__img-box mt-4">
          <video src={ heroVideo} alt="" controls />
        </div>
        </Col>
        <Col lg="2">
        <div className="hero__img-box mt-5">
          <img src={heroImg02} alt="" />
        </div>
        </Col>
        <SearchBar />
    </Row>
  </Container>
</section>
        {/*hero*/ }
 <section>
<Container>
  <Row>
    <Col lg='3'>
    <h5 className="servuces__subtitle">what we serve</h5>
    <h2 className="services__title">we offer our best services </h2>

    </Col>
    <ServiceList />
  </Row>
</Container>
 </section>


 {/* ===============   featured tour section stat      =======================  */}
 {/* ===============   featured tour section end      =======================  */}

<section>
  <Container>
    <Row>
    <Col lg='12' className='mb-5'>
    
      <Subtitle subtitle={"Explore"} />
    <h2 className="featured__tour-title">Our featured tours</h2>
    
    </Col>
    <FeaturedTourList />
    </Row>
    </Container></section>
    {/* {featured tour section end} */}
    {/* {experience tour section start} */}

<section>
  <Container>
    <Row>
    <Col lg='6'>
    <div className="experience__content">
      <Subtitle subbtitle={'Experience'}/>
      <h2>
        with our all experience <br/> we will serve you 
      </h2>
      <p>Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Et expedita itaque maiores deleniti beatae? Quia?</p>
    </div>
    <div className="counter_wrapper d-flex align-items-center gap-5">
      <div className="counter__box">
        <span>12k+</span>
        <h6>successful</h6>
      </div>
      <div className="counter__box">
        <span>2k+</span>
        <h6>Regular clients</h6>
      </div>
      <div className="counter__box">
        <span>5k+</span>
        <h6>yaers experienc</h6>
      </div>
    </div>
    </Col>
    <Col lg='6'>
    <div className="experience__img">
      <img src={experienceImg} alt="" srcset="" />
    </div>
    </Col>
    </Row>

  </Container>
</section>
    {/* {experience tour section end} */}
    {/* {gallery section start} */}
<section>
  <Container>
    <Row>
      <Col lg='12'>
      <Subtitle subtitle={'Gallery'} />
      <h2 className="gallery__title"> Visit our customer tour galllery</h2>
      </Col>
      <Col lg='12'>
<MesonryImagesGallery />
      </Col>
    </Row>
  </Container>
</section>

    {/* {gallerysection end} */}
    {/* {testimonial section strat} */}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
          <Subtitle subtitle={'fans Love'} />
          <h2 className="testimonial__title">What our fans say us</h2>
          </Col>
          <Col lg='12'>
          <Testimonials />
          </Col>
        </Row>
      </Container>
    </section>
    {/* {testimonialsection end} */}
    {/* {newsletter start} */}
    <Newsletter />

    </>
);
};
export default Home
