import React, { useState, useEffect,useRef } from 'react';
import { Container, Grid, Button as MuiButton, AppBar, Toolbar, IconButton, Typography, InputBase, Badge,Link , Card, CardMedia, CardContent} from '@mui/material';
import { Search, ShoppingCart, AccountCircle,Facebook, Twitter, Instagram, LinkedIn, Email, Phone } from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';
import Marquee from 'react-fast-marquee';
import styledComponents from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../Assets/Home.css';
import slide1 from '../img/slide/slide1.jpg';
import slide2 from '../img/slide/slide2.jpg';
import slide3 from '../img/slide/slide3.jpg';
import slide4 from '../img/slide/slide4.jpg';
import slide5 from '../img/slide/slide5.jpg';
import slide6 from '../img/slide/slide6.jpg';
import adv1 from '../img/Adv/adv1.png';
import adv2 from '../img/Adv/adv2.png';
import adv3 from '../img/Adv/adv3.png';
import m1 from '../img/marq/m1.png';
import m2 from '../img/marq/m2.png';
import m3 from '../img/marq/m3.png';
import m4 from '../img/marq/m4.png';
import m5 from '../img/marq/m5.png';
import m6 from '../img/marq/m6.png';
import m7 from '../img/marq/m7.png';
import m8 from '../img/marq/m8.png';
import m9 from '../img/marq/m9.png';
import m10 from '../img/marq/m10.png';
import m11 from '../img/marq/m11.png';
import m12 from '../img/marq/m12.png';
import m13 from '../img/marq/m13.png';
import m14 from '../img/marq/m14.png';
import m15 from '../img/marq/m15.png';
import m16 from '../img/marq/m16.png';
import s1 from '../img/stu/s1.png';
import s2 from '../img/stu/s2.png';
import s3 from '../img/stu/s3.png';
import p1 from '../img/alu/p1.png'
import p9 from '../img/alu/p9.png'
import p2 from '../img/alu/p2.png'
import p3 from '../img/alu/p3.png'
import p4 from '../img/alu/p4.png'
import p5 from '../img/alu/p5.png'
import p6 from '../img/alu/p6.png'
import p7 from '../img/alu/p7.png'
import p8 from '../img/alu/p8.png'
import { Link as Rude  } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const FancyButton = () => {
  return (
    <div className="container">
      <Rude to="/plan" className="button button--typeA">
        <div className="button__wrapper">
          <div className="material1"></div>
          <div className="material2"></div>
        </div>
        <span className="button__text">ENTER</span>
        <div className="bird">
          <div className="block block_A">
            <div className="inner A_1"></div>
            <div className="inner A_2"></div>
          </div>
          <div className="block block_B">
            <div className="inner B_1"></div>
            <div className="inner B_2"></div>
          </div>
          <div className="block block_C">
            <div className="inner C_1"></div>
            <div className="inner C_2"></div>
          </div>
          <div className="block block_D"></div>
          <div className="block block_E">
            <div className="inner E_1"></div>
            <div className="inner E_2"></div>
          </div>
          <div className="block block_F">
            <div className="inner F_1"></div>
            <div className="inner F_2"></div>
          </div>
        </div>
      </Rude>
    </div>
  );
};
const images = [m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12,m13,m14,m15,m16];

const MarqueeImages = () => {
  return (
    <Marquee speed={50} pauseOnHover={true}>
      {images.map((src, index) => (
        <div key={index} className="marquee-image">
          <img src={src} alt={`Marquee Image ${index + 1}`} />
        </div>
      ))}
    </Marquee>
  );
};
const alumniData = [
  { imgSrc: p1, name: 'John Doe', degree: 'MBA', workplace: 'Google', rating: 5, feedback: 'Great experience!' },
  { imgSrc: p2, name: 'Jane Smith', degree: 'PhD', workplace: 'Walmart', rating: 4, feedback: 'Loved the program!' },
  { imgSrc: p3, name: 'Mark', degree: 'B.E', workplace: 'LinkedIn', rating: 5, feedback: 'Nice program' },
  { imgSrc: p4, name: 'Henry', degree: 'BCA', workplace: 'Amazon', rating: 4, feedback: 'Loved the program!' },
  { imgSrc: p5, name: 'Ronaro', degree: 'M.tech', workplace: 'Samsung', rating: 5, feedback: 'Great experience!' },
  { imgSrc: p6, name: 'Luffy', degree: 'PhD', workplace: 'Ford', rating: 4, feedback: 'Loved the program!' },
  { imgSrc: p7, name: 'Danny', degree: 'BBA', workplace: 'Tesla', rating: 5, feedback: 'Great experience!' },
  { imgSrc: p8, name: 'Mikey', degree: 'B.tech', workplace: 'lenovo', rating: 4, feedback: 'Loved the program!' },
  { imgSrc: p9, name: 'Namikase', degree: 'M.E', workplace: 'Dell', rating: 4, feedback: 'Loved the program!' },
  // Add more alumni data here
];

const AlumniSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <Slider {...settings}>
      {alumniData.map((alumni, index) => (
        <div key={index} className="alumni-card">
          <img src={alumni.imgSrc} alt={`Photo of ${alumni.name}`}  />
          <h3>{alumni.name}</h3>
          <p>{alumni.degree}</p>
          <p>{alumni.workplace}</p>
          <div className="rating">
            {'★'.repeat(alumni.rating)}{'☆'.repeat(5 - alumni.rating)}
          </div>
          <p className="feedback">{alumni.feedback}</p>
        </div>
      ))}
    </Slider>
  );
};
const ImageWithText = () => {
  const items = [
    { imgSrc: adv1, text: 'Access well-crafted, comprehensive study materials' },
    { imgSrc: adv2, text: 'Learn from seasoned tutors' },
    { imgSrc: adv3, text: 'Experience interactive live sessions.' },
  ];

  return (
    <div className="image-with-text-container">
      {items.map((item, index) => (
        <div className="image-item" key={index}>
          <div className="image-background">
            <img src={item.imgSrc} alt={`Image ${index + 1}`} />
          </div>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

// StyledCard Definition
const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
  },
  '& .MuiTypography-h5': {
    transition: 'color 0.3s ease-in-out, text-shadow 0.3s ease-in-out',
    '&:hover': {
      color: theme.palette.primary.main,
      textShadow: '0 0 10px rgba(0, 0, 255, 0.8)',
    },
  },
  '& .MuiTypography-body2': {
    transition: 'color 0.3s ease-in-out, text-shadow 0.3s ease-in-out',
    '&:hover': {
      color: theme.palette.secondary.main,
      textShadow: '0 0 10px rgba(255, 0, 0, 0.8)',
    },
  },
}));

// ArticleGrid Component
const articles = [
  {
    image: s2,
    title: '150+ Million Downloads',
    description: "BYJU'S app has over 150 million downloads on the app store.",
  },
  {
    image: s3,
    title: '4.7+ Star Rating',
    description: 'Our app holds an impressive 4.7+ star rating on the app store.',
  },
  {
    image: s1,
    title: '1701+ Cities Worldwide',
    description: 'We are available in over 1701 cities around the world.',
  },
];

const ArticleGrid = () => {
  return (
    <Container>
      <Grid container spacing={4} justifyContent="center">
        {articles.map((article, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <StyledCard>
              <CardMedia
                component="img"
                alt={article.title}
                height="100"
                image={article.image}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {article.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {article.description}
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
const SliderContainer = styled('div')({
  width: '100%',
  overflow: 'hidden',
  position: 'relative',
  padding: '0 20px',
});

const SliderWrapper = styled('div')({
  display: 'flex',
  transition: 'transform 0.5s ease',
});

const Slide = styled('div')({
  minWidth: '100%',
  position: 'relative',
});

const Image = styled('img')({
  width: '100%',
  height: '300px',
  // objectFit: 'cover', // Ensures the image covers the container
});

const SliderButton = styled('button')({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  background: 'rgba(255, 255, 255, 0.7)',
  border: 'none',
  cursor: 'pointer',
  fontSize: '18px',
  zIndex: 1,
  padding: '10px',
  '&:focus': {
    outline: 'none',
  },
});

const PrevButton = styled(SliderButton)({
  left: '20px',
});

const NextButton = styled(SliderButton)({
  right: '20px',
});

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [slide1,slide2,slide3,slide4,slide5,slide6];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 10 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [images.length]);

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const translateValue = -currentIndex * 100;
  return (
    <SliderContainer>
      <SliderWrapper style={{ transform: `translateX(${translateValue}%)` }}>
        {images.map((image, index) => (
          <Slide key={index}>
            <Image src={image} alt={`Slide ${index + 1}`} />
          </Slide>
        ))}
      </SliderWrapper>
      <PrevButton onClick={handlePrev}>&#10094;</PrevButton>
      <NextButton onClick={handleNext}>&#10095;</NextButton>
    </SliderContainer>
  );
};



const HomePage = () => {
  return (
    <div className="home-page">
      <Header/>
      <div className="intro">
        <div className="intro-text">
        <h2>Wisdom is not a product of schooling but of the lifelong attempt to acquire it.</h2>
        <p>Your gateway to interactive learning with Ours</p>
          <FancyButton href="#" className="button button--typeA">
            <div className="button__wrapper">
              <div className="material1"></div>
              <div className="material2"></div>
            </div>
            <span className="button__text">Explore Now</span>
          </FancyButton>
        </div>
      </div>
      <section className="section">
        <h2>Explore Our Learning Programs</h2>
        <ImageSlider />
      </section>

      <section className="videos">
        <h2>Sample Videos</h2>
        <div className="video-grid">
          <video src="sample-video1.mp4" controls></video>
          <video src="sample-video2.mp4" controls></video>
          <video src="sample-video1.mp4" controls></video>
          <video src="sample-video2.mp4" controls></video>
        </div>
      </section>

      <section className="section">
        <h2>Our Students and Parents Love Us</h2>
        <ArticleGrid/>
      </section>

      <section className="section">
        <h2>Get the NextGenAcademy Advantage</h2>
        <div className="home-page">
      <ImageWithText />
      {/* Other components */}
    </div>
       
      </section>

      <section className="section">
        <h2>Our Alumni</h2>
        <AlumniSlider/>
      </section>
      <section className="section">
        <h2>Sponsors</h2>
        <MarqueeImages/>
      </section>
      <Footer/>
    </div>
  );
};

export default HomePage;
