import React, { useState, useEffect } from 'react';
import { styled } from '@mui/system';
import { Bubble } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import axios from 'axios';
import p1 from '../img/alu/p1.png';
import p2 from '../img/alu/p2.png';
import p3 from '../img/alu/p3.png';
import p4 from '../img/alu/p4.png';
import p5 from '../img/alu/p5.png';
import p6 from '../img/alu/p6.png';
import p7 from '../img/alu/p7.png';
import p8 from '../img/alu/p8.png';
import p9 from '../img/alu/p9.png';
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
import cou22 from '../img/cou/cou-8.jpg';
import cou23 from '../img/cou/cou-9.jpg';
import cou24 from '../img/cou/cou-10.png';
import cou25 from '../img/cou/cou-11.jpg';
import cou26 from '../img/cou/cou-12.jpg';
import cou27 from '../img/cou/cou-13.jpg';

const tutorImages = [p1, p2, p3, p4, p5, p6, p7, p8, p9];
const courseImages = [cou1, cou2, cou3, cou4, cou5, cou6, cou7, cou8, cou9, cou10, cou11, cou12, cou13, cou14, cou15, cou16, cou17, cou18, cou19, cou20, cou21, cou22, cou23, cou24, cou25, cou26, cou27];

const Header = () => (
  <header style={{ padding: '10px', textAlign: 'center', background: '#f5f5f5' }}>
    <h1>Tutor Schedules</h1>
  </header>
);

const Footer = () => (
  <footer style={{ padding: '10px', textAlign: 'center', background: '#f5f5f5' }}>
    <p>&copy; 2024 Your Company. All rights reserved.</p>
  </footer>
);

const LayoutContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  height: 'calc(100vh - 80px)', // Adjust height based on header and footer
});

const MainContent = styled('div')({
  display: 'flex',
  flex: 1,
  overflow: 'hidden',
});

const LeftPanel = styled('div')({
  width: '250px',
  overflowY: 'auto',
  paddingRight: '20px',
  borderRight: '1px solid #ccc',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

const CenterPanel = styled('div')({
  flex: 1,
  display: 'flex',
  flexDirection: 'row',
  paddingLeft: '20px',
  overflowY: 'auto',
  alignItems: 'flex-start',
});

const TutorImage = styled('img')({
  width: '100%',
  cursor: 'pointer',
  marginBottom: '5px',
});

const TutorDetail = styled('div')({
  flex: 1,
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
});

const TutorImageLarge = styled('img')({
  maxWidth: '200px',
  height: '200px',
  marginRight: '20px',
  borderRadius: '10px',
});

const CoursesGridContainer = styled('div')({
  padding: '10px 20px',
});

const CoursesGridTitle = styled('h2')({
  textAlign: 'center',
  margin: '20px 0',
});

const CoursesGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '20px',
  width: '100%',
});

const CourseItem = styled('div')({
  textAlign: 'center',
});

const CourseImage = styled('img')({
  width: '100%',
  height: '100px',
  objectFit: 'cover',
  borderRadius: '8px',
});

const BubbleChartContainer = styled('div')({
  width: '600px',
  height: '400px',
  marginTop: '20px',
  marginLeft: '20px',
});

const Tutors = () => {
  const [tutorsData, setTutorsData] = useState([]);
  const [selectedTutor, setSelectedTutor] = useState(null);

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        const response = await axios.get('http://localhost:8080/tutors/getall');
        setTutorsData(response.data);
        if (response.data.length > 0) {
          setSelectedTutor(response.data[0]); // Set initial selected tutor
        }
      } catch (error) {
        console.error('Error fetching tutors:', error);
      }
    };

    fetchTutors();
  }, []);

  const handleTutorClick = (tutor) => {
    setSelectedTutor(tutor);
  };

  if (!selectedTutor) {
    return <div>Loading...</div>; // Handle case where no tutor is selected
  }

  const bubbleChartData = {
    datasets: [
      {
        label: 'Success Rate',
        data: [
          {
            x: selectedTutor.successRate,
            y: selectedTutor.failureRate,
            r: 20,
          },
        ],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const getCourseImages = (index) => {
    // Map tutor index to course images
    return courseImages.slice(index * 3, (index + 1) * 3);
  };

  return (
    <>
      <Header />
      <LayoutContainer>
        <MainContent>
          <LeftPanel>
            {tutorsData.map((tutor) => (
              <div key={tutor.tutorId} style={{ display: 'flex', alignItems: 'center' }}>
                <TutorImage
                  src={tutor.tutorImage}
                  alt={tutor.tutorName}
                  onClick={() => handleTutorClick(tutor)}
                  style={{ width: '50px', height: '50px', marginRight: '10px' }}
                />
                <div>
                  <div>{tutor.tutorName}</div>
                  <div>{tutor.qualification}</div>
                </div>
              </div>
            ))}
          </LeftPanel>
          <CenterPanel>
            <TutorDetail>
              <TutorImageLarge src={selectedTutor.tutorImage} alt={selectedTutor.tutorName} />
              <h2>{selectedTutor.tutorName}</h2>
              <h3>{selectedTutor.qualification}</h3>
              <p>{selectedTutor.description}</p>
            </TutorDetail>
            <BubbleChartContainer>
              <Bubble data={bubbleChartData} />
            </BubbleChartContainer>
          </CenterPanel>
        </MainContent>
        <CoursesGridContainer>
          <CoursesGridTitle>Courses</CoursesGridTitle>
          <CoursesGrid>
            {getCourseImages(tutorsData.indexOf(selectedTutor)).map((img, index) => (
              <CourseItem key={index}>
                <CourseImage src={img} alt={`Course ${index + 1}`} />
              </CourseItem>
            ))}
          </CoursesGrid>
        </CoursesGridContainer>
      </LayoutContainer>
      <Footer />
    </>
  );
};

export default Tutors;
