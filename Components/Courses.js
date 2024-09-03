import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import '../Assets/Courses.css';
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
import { Link } from 'react-router-dom';

export const courses = [
  { id: uuidv4(), image: cou1, title: 'Course 1', article: 'This is a detailed article for Course 1.' },
  { id: uuidv4(), image: cou2, title: 'Course 2', article: 'This is a detailed article for Course 2.' },
  { id: uuidv4(), image: cou3, title: 'Course 3', article: 'This is a detailed article for Course 3.' },
  { id: uuidv4(), image: cou4, title: 'Course 4', article: 'This is a detailed article for Course 4.' },
  { id: uuidv4(), image: cou5, title: 'Course 5', article: 'This is a detailed article for Course 5.' },
  { id: uuidv4(), image: cou6, title: 'Course 6', article: 'This is a detailed article for Course 6.' },
  { id: uuidv4(), image: cou7, title: 'Course 7', article: 'This is a detailed article for Course 7.' },
  { id: uuidv4(), image: cou8, title: 'Course 8', article: 'This is a detailed article for Course 8.' },
  { id: uuidv4(), image: cou9, title: 'Course 9', article: 'This is a detailed article for Course 9.' },
  { id: uuidv4(), image: cou10, title: 'Course 10', article: 'This is a detailed article for Course 10.' },
  { id: uuidv4(), image: cou11, title: 'Course 11', article: 'This is a detailed article for Course 11.' },
  { id: uuidv4(), image: cou12, title: 'Course 12', article: 'This is a detailed article for Course 12.' },
  { id: uuidv4(), image: cou13, title: 'Course 13', article: 'This is a detailed article for Course 13.' },
  { id: uuidv4(), image: cou14, title: 'Course 14', article: 'This is a detailed article for Course 14.' },
  { id: uuidv4(), image: cou15, title: 'Course 15', article: 'This is a detailed article for Course 15.' }
];

const Header = () => (
  <header>
    <h1>Courses</h1>
  </header>
);

const Footer = () => (
  <footer>
    <p>&copy; 2024 Courses</p>
  </footer>
);

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get('http://localhost:8080/course/getAll');
        setData(response.data);
        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetch();
  }, []);

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
    <>
      <Header />
      <div className="LayoutContainer">
        <div className="ProjectorContainer">
          <img className="ProjectorImage" src={selectedCourse.courseImage} alt={selectedCourse.courseName} />
          <article className="ProjectorArticle">{selectedCourse.courseDescription}</article>
        </div>
        <div className="SliderContainer">
          <Slider {...sliderSettings}>
            {data.length > 0 ? data.map((course) => (
              <div key={course.id} onClick={() => handleCourseClick(course)} className="SliderItem">
                <img className="CourseImage" src={course.courseImage} alt={course.courseName} />
                <div className="SliderTitle">{course.courseName}</div>
                <div className="CourseId">ID: {course.courseId}</div> {/* Display the UUID */}
              </div>
            )) : (
              <div>Loading...</div>
            )}
          </Slider>
        </div>
        <Link to="/enroll" className='join'>Join Now</Link>
      </div>
      <Footer />
    </>
  );
};

export default Courses;
