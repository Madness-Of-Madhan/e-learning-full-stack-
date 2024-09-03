import React, { useContext } from 'react';
import { Container, Typography, Avatar, Grid, Card, CardContent } from '@mui/material';
import { styled } from '@mui/system';
import { PaymentContext } from './PaymentContext'; // Adjust path as needed
import { Bar, Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // Required for Chart.js

const ProfileContainer = styled(Container)({
  paddingTop: '20px',
  paddingBottom: '20px',
});

const UserInfo = styled(Card)({
  display: 'flex',
  alignItems: 'center',
  padding: '20px',
  marginBottom: '20px',
});

const UserAvatar = styled(Avatar)({
  width: '100px',
  height: '100px',
  marginRight: '20px',
});

const CoursesContainer = styled(Grid)({
  marginBottom: '20px',
});

const Profile = () => {
  const { paymentInfo, courses } = useContext(PaymentContext); 
  const barChartData = {
    labels: ['In Progress', 'Learned', 'Enrolled', 'Planned'],
    datasets: [{
      label: 'Number of Courses',
      data: [courses.inProgress.length, courses.learned.length, courses.enrolled.length, courses.planned.length],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    }],
  };

  const pieChartData = {
    labels: ['In Progress', 'Learned', 'Enrolled', 'Planned'],
    datasets: [{
      data: [courses.inProgress.length, courses.learned.length, courses.enrolled.length, courses.planned.length],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#4BC0C0'
      ],
      hoverOffset: 4,
    }],
  };

  return (
    <ProfileContainer>
      <UserInfo>
        <UserAvatar alt="User Name" src="/path-to-avatar.jpg" />
        <div>
          <Typography variant="h5">User Name</Typography>
          <Typography variant="body1">Degree: User's Degree</Typography>
          <Typography variant="body1">Total Payment: ${paymentInfo.amount || 'N/A'}</Typography>
          <Typography variant="body1">Payment Method: {paymentInfo.method || 'N/A'}</Typography>
        </div>
      </UserInfo>

      <Typography variant="h6" gutterBottom>
        Courses
      </Typography>
      <CoursesContainer container spacing={2}>
        {Object.keys(courses).map((key) => (
          <Grid item xs={12} sm={6} md={3} key={key}>
            <Card>
              <CardContent>
                <Typography variant="h6">{key.charAt(0).toUpperCase() + key.slice(1)}</Typography>
                <ul>
                  {courses[key].map((course, index) => (
                    <li key={index}>{course}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </CoursesContainer>

      <Typography variant="h6" gutterBottom>
        Performance
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Bar data={barChartData} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Pie data={pieChartData} />
        </Grid>
      </Grid>
    </ProfileContainer>
  );
};

export default Profile;
