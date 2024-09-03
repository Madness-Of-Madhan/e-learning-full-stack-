import React, { useState, useEffect } from 'react';
import { Route, Routes, useParams, Link } from 'react-router-dom';
import { Grid, Pagination } from '@mui/material';
import { borderRadius, styled } from '@mui/system';
import axios from 'axios';

// Import images
import cou1 from '../img/cou/cou-1.jpg';
import cou2 from '../img/cou/cou-17.jpg';
import cou3 from '../img/cou/cou-3.jpg';
import cou4 from '../img/cou/cou-4.png';
import cou5 from '../img/cou/cou-5.png';
import cou6 from '../img/cou/cou-6.png';
import cou7 from '../img/cou/cou-7.png';
import cou8 from '../img/cou/cou-8.jpg';
import cou9 from '../img/cou/cou-9.jpg';
import cou10 from '../img/cou/cou-10.png';
import cou11 from '../img/cou/cou-11.jpg';
import cou12 from '../img/cou/cou-12.jpg';
import cou13 from '../img/cou/cou-13.jpg';
import cou14 from '../img/cou/cou-14.jpg';
import cou15 from '../img/cou/cou-15.jpg';
import cou16 from '../img/cou/cou-1.jpg';
import cou17 from '../img/cou/cou-17.jpg';
import cou18 from '../img/cou/cou-3.jpg';
import cou19 from '../img/cou/cou-4.png';
import cou20 from '../img/cou/cou-5.png';
import cou21 from '../img/cou/cou-6.png';
import cou22 from '../img/cou/cou-7.png';
import cou23 from '../img/cou/cou-8.jpg';
import cou24 from '../img/cou/cou-9.jpg';
import cou25 from '../img/cou/cou-10.png';
import cou26 from '../img/cou/cou-11.jpg';
import cou27 from '../img/cou/cou-12.jpg';
import cou28 from '../img/cou/cou-13.jpg';
import cou29 from '../img/cou/cou-14.jpg';
import cou30 from '../img/cou/cou-15.jpg';
import { Any } from 'react-spring';

// Map the imported images to an array with titles
const images = [
  { src: cou1, title: 'Course 1' },
  { src: cou2, title: 'Course 2' },
  { src: cou3, title: 'Course 3' },
  { src: cou4, title: 'Course 4' },
  { src: cou5, title: 'Course 5' },
  { src: cou6, title: 'Course 6' },
  { src: cou7, title: 'Course 7' },
  { src: cou8, title: 'Course 8' },
  { src: cou9, title: 'Course 9' },
  { src: cou10, title: 'Course 10' },
  { src: cou11, title: 'Course 11' },
  { src: cou12, title: 'Course 12' },
  { src: cou13, title: 'Course 13' },
  { src: cou14, title: 'Course 14' },
  { src: cou15, title: 'Course 15' },
  { src: cou16, title: 'Course 16' },
  { src: cou17, title: 'Course 17' },
  { src: cou18, title: 'Course 18' },
  { src: cou19, title: 'Course 19' },
  { src: cou20, title: 'Course 20' },
  { src: cou21, title: 'Course 21' },
  { src: cou22, title: 'Course 22' },
  { src: cou23, title: 'Course 23' },
  { src: cou24, title: 'Course 24' },
  { src: cou25, title: 'Course 25' },
  { src: cou26, title: 'Course 26' },
  { src: cou27, title: 'Course 27' },
  { src: cou28, title: 'Course 28' },
  { src: cou29, title: 'Course 29' },
  { src: cou30, title: 'Course 30' },
];

// Dummy articles for each image
const articles = Array.from({ length: 30 }, (_, i) => `This is a long article for Image ${i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`);

const Header = () => (
  <header style={{ padding: '10px', textAlign: 'center', background: '#f5f5f5' }}>
    <h1>Study Materials</h1>
  </header>
);

const Footer = () => (
  <footer style={{ padding: '10px', textAlign: 'center', background: '#f5f5f5' }}>
    <p>&copy; 2024 Study Materials</p>
  </footer>
);

const GridItem = styled('div')({
  position: 'relative',
  overflow: 'hidden',
  
  '& img': {
    width: '100%',
    height: '200px', // Fixed height for uniform image size
    objectFit: 'cover', // Ensures images cover the container without distortion
    transition: 'transform 0.3s ease',
    borderRadius:'2px'
    
  },
  '&:hover img': {
    transform: 'scale(1.05)',
  },
  '& .title': {
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    textAlign: 'center',
    padding: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    boxSizing: 'border-box',
  }
});

const GridPage = () => {
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get('http://localhost:8080/materials/getAll');
        setData(response.data);
      } catch (e) {
        console.log(e);
      } 
    };
    fetch();
  }, []);

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const imagesPerPage = 10;
  const startIndex = (page - 1) * imagesPerPage;
  const paginatedData = data.slice(startIndex, startIndex + imagesPerPage);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div>
    
        <Grid container spacing={2} style={{ padding: '20px' }}>
          {paginatedData.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={startIndex + index}>
              <Link to={`/materials/detail/${startIndex + index}`}>
                <GridItem>
                  <img src={item.materialImage || 'default_image_url'} alt={item.materialsName} />
                  <div className="title">{item.materialsName}</div>
                </GridItem>
              </Link>
            </Grid>
          ))}
        </Grid>
      
      <Pagination count={Math.ceil(data.length / imagesPerPage)} page={page} onChange={handleChange} style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }} />
    </div>
  );
};


const DetailContainer = styled('div')({
  padding: '20px',
  transition: 'all 0.5s ease-in-out',
  opacity: 0,
  transform: 'scale(0.9)',
});

const Image = styled('img')({
  width: '100%',
  maxHeight: '400px',
  objectFit: 'cover',
  transition: 'all 0.5s ease-in-out',
});

const Article = styled('article')({
  marginTop: '20px',
  fontSize: '18px',
  lineHeight: '1.6',
  transition: 'opacity 0.5s ease-in-out',
  opacity: 0,
});

const DetailPage = () => {
  const { id } = useParams();
  const imageIndex = parseInt(id, 10);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <DetailContainer style={{ opacity: loaded ? 1 : 0, transform: loaded ? 'scale(1)' : 'scale(0.9)' }}>
      <Image src={images[imageIndex].src} alt={`Image ${imageIndex + 1}`} style={{ opacity: loaded ? 1 : 0 }} />
      <Article style={{ opacity: loaded ? 1 : 0 }}>
        {articles[imageIndex]}
      </Article>
    </DetailContainer>
  );
};

const Materials = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<GridPage />} />
      <Route path="/detail/:id" element={<DetailPage />} />
    </Routes>
    <Footer />
  </>
);

export default Materials;
