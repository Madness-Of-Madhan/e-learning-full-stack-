import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, Avatar, Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Container, Button, IconButton, Dialog, DialogTitle, DialogContent, TextField, DialogActions, Grid, Paper, Tooltip
} from '@mui/material';
import { Menu, BarChart, People, School, Book, Add, Delete} from '@mui/icons-material';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';

const studentData = {
  labels: ['Student 1', 'Student 2', 'Student 3', 'Student 4', 'Student 5', 'Student 6', 'Student 7', 'Student 8', 'Student 9', 'Student 10'],
  datasets: [
    {
      label: 'Progress (%)',
      data: [80, 70, 85, 60, 90, 75, 65, 88, 92, 77],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const tutorData = {
  labels: ['Tutor 1', 'Tutor 2', 'Tutor 3', 'Tutor 4', 'Tutor 5', 'Tutor 6', 'Tutor 7', 'Tutor 8', 'Tutor 9', 'Tutor 10'],
  datasets: [
    {
      label: 'Success Rate (%)',
      data: [90, 75, 80, 85, 70, 88, 78, 92, 81, 76],
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 1,
    },
  ],
};
  const API_URL1='http://localhost:8080/course/post';
  const API_URL2='http://localhost:8080/materials/post';
  const API_URL3='http://localhost:8080/tutors/post';
  const API_URL4='http://localhost:8080/register/newuser';
  const API_URL5='http://localhost:8080/course/delete';
  const API_URL6='http://localhost:8080/materials/delete';
  const API_URL7='http://localhost:8080/tutors/delete';
  const API_URL8='http://localhost:8080/register/delete';
  const API_URL9='http://localhost:8080/api/achievements';
  const API_URL10='http://localhost:8080/api/delete';
const Admin = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState('');
  const [openAddCourse, setOpenAddCourse] = useState(false);
  const [courseName, setCourseName] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [courseImage, setCourseImage] = useState(null);
  const [openAddMaterial, setOpenAddMaterial] = useState(false);
  const [materialsName, setMaterialTitle] = useState('');
  const [materialsDescription, setMaterialDescription] = useState('');
  const [materialArticle, setMaterialArticle] = useState('');
  const [materialFile, setMaterialFile] = useState(null);
  const [openAddTutor, setOpenAddTutor] = useState(false);
  const[openAcheivement,setOpenAchievement]=useState(false);
  const [tutorName, setTutorName] = useState('');
  const[qualification,setQualification]=useState('');
  const[description,setDescription]=useState('');
  const [openAddStudent, setOpenAddStudent] = useState(false);
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[confirmPassword,setConfirmPassword]=useState('');
  const[phoneNumber,setPhoneNumber]=useState('');
  const [openConfirmDelete, setOpenConfirmDelete] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const[courseId,setCourseId]=useState('');
  const[tutorId,setTutorId]=useState('');
  const[materialId,setMaterialId]=useState('');
  const[id,setId]=useState('');
  const[achievementName,setAchievementName]=useState('');
  const[achievementId,setAchievementId]=useState('');
  const[article,setArticle]=useState('');
  const[materialImage,setMaterialImage]=useState('');
  const[tutorImage,setTutorImage]=useState('');
  const[achievementImage,setAchievementImage]=useState('');
 

  const initialAchievements = [
    { id: 1, description: 'Achievement 1', article: 'Article content for Achievement 1' },
    { id: 2, description: 'Achievement 2', article: 'Article content for Achievement 2' },
    { id: 3, description: 'Achievement 3', article: 'Article content for Achievement 3' },
    { id: 4, description: 'Achievement 4', article: 'Article content for Achievement 4' },
    { id: 5, description: 'Achievement 5', article: 'Article content for Achievement 5' },
  ];
  const [achievements, setAchievements] = useState(initialAchievements);

  const [achedata, setAcheData] = useState({
    achievementName:'',
    article:'',
    achievementImage:''
  });
  const [coursedata, setCourseData] = useState({
    courseName:'',
    courseDescription:'',
    tutorName:'',
    courseImage:''
  });
  const [materialData, setMaterialData] = useState({
    materialsName:'',
    materialsDescription:'',
    materialArticle:'',
    materialImage:''
  });
  const [tutorsData, setTutorData] = useState({
    tutorName:'',
    qualification :'',
    description:'',
    courseName:'',
    tutorImage:''
  });
  const [studentsData, setStudentData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '', // Added phoneNumber to formData
  });

  
  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    setDrawerOpen(false);
  };
  const openDeleteConfirmation = (itemId) => {
    setItemToDelete(itemId);
    setOpenConfirmDelete(true);
  };
  
  const handleCloseConfirmDelete = () => {
    setItemToDelete(null);
    setOpenConfirmDelete(false);
  };

  const handleOpenAddCourse = () => setOpenAddCourse(true);
  const handleCloseAddCourse = () => setOpenAddCourse(false);
  const handleAddCourse = async (event) => {
    event.preventDefault();
    try {
      await axios.post(API_URL1, {
        courseName,
        courseDescription,
        tutorName, 
        courseImage// Include phoneNumber in the payload
      });
      console.log('Course Added', coursedata); 
    } catch (error) {
      console.error('Error Corseadding', error);
    }
    console.log({ courseName, courseDescription,tutorName, courseImage });
    handleCloseAddCourse();
  };

  const handleOpenAddMaterial = () => setOpenAddMaterial(true);
  const handleCloseAddMaterial = () => setOpenAddMaterial(false);
  const handleAddMaterial = async (event) => {
    event.preventDefault();
    try {
      await axios.post(API_URL2, {
        materialsName,
        materialsDescription,
        materialArticle,
        materialImage// Include phoneNumber in the payload
      });
      console.log('Materials Added', materialData); 
    } catch (error) {
      console.error('Error Adding', error);
    }
    // Add material logic
    console.log({ materialsName, materialsDescription,materialArticle,materialImage });
    handleCloseAddMaterial();
  };

  const handleOpenAddTutor = () => setOpenAddTutor(true);
  const handleCloseAddTutor = () => setOpenAddTutor(false);
  const handleAddTutor = async (event) => {
  event.preventDefault();
  try {
    const response = await axios.post(API_URL3, {
      tutorName,
      qualification,
      description,
      courseName,
      tutorImage
    });
    console.log('Tutor Added', response.data); // Log the response from the backend
  } catch (error) {
    console.error('Error Adding Tutor', error);
  }
  handleCloseAddTutor();
};


  const handleOpenAddStudent = () => setOpenAddStudent(true);
  const handleCloseAddStudent = () => setOpenAddStudent(false);
  const handleAddStudent = async (event) => {
    event.preventDefault();
    try {
      await axios.post(API_URL4, {
        email,
        password,
        confirmPassword,
        phoneNumber,// Include phoneNumber in the payload
      });
      console.log('Student Data', studentsData); 
    } catch (error) {
      console.error('Error Adding', error);
    }
    console.log({ email,password,confirmPassword,phoneNumber });
    handleCloseAddStudent();
  };
  const handleOpenAcheivement = () => setOpenAchievement(true);
  const handleCloseAchievementt = () => setOpenAchievement(false);
    const handleAddAchievemt = async (event) => {
      event.preventDefault();
    try {
      await axios.post(API_URL9, {
        achievementName,
        article,
        achievementImage
      });
      console.log('Tutor Added', achedata); 
    } catch (error) {
      console.error('Error Adding', error);
    }
    console.log({ achievementName,article});
    handleCloseAchievementt();
    };

    const handleRemoveCourse = async (courseId) => {
      try {
        await axios.delete(`${API_URL5}/delete/${courseId}`);
        console.log(`Course with ID ${courseId} removed`);
      } catch (error) {
        console.error('Error removing course:', error);
      }
    };

  const handleRemoveMaterial = async (materialId) => {
    try {
      await axios.delete(`${API_URL6}/${materialId}`);
      console.log(`Material with ID ${materialId} removed`);
      // Update the state to remove the material from the UI
    } catch (error) {
      console.error('Error Removing Material', error);
    }
  };

  const handleRemoveTutor = async (tutorId) => {
    try {
      await axios.delete(`${API_URL7}/${tutorId}`);
      console.log(`Tutor with ID ${tutorId} removed`);
      // Update the state to remove the tutor from the UI
    } catch (error) {
      console.error('Error Removing Tutor', error);
    }
  };

  const handleRemoveStudent = async (id) => {
    try {
      await axios.delete(`${API_URL8}/${id}`);
      console.log(`Student with ID ${id} removed`);
      // Update the state to remove the student from the UI
    } catch (error) {
      console.error('Error Removing Student', error);
    }
  };
  const handleRemoveAcheivement = async (achievementId) => {
    try {
      await axios.delete(`${API_URL10}/${achievementId}`);
      console.log(`Acheivement with ID ${achievementId} removed`);
      // Update the state to remove the student from the UI
    } catch (error) {
      console.error('Error Removing Acheivement', error);
    }
  };
  const handleMaterialUpload = (event) => setMaterialFile(event.target.files[0]);
  return (
    <div>
      <Header />
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setDrawerOpen(!drawerOpen)}>
              <Menu />
            </IconButton>
            <Typography variant="h6">Admin Page</Typography>
          </Toolbar>
        </AppBar>

        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          sx={{ width: 240, flexShrink: 0, [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' } }}
        >
          <Toolbar />
          <Box sx={{ overflow: 'auto' }}>
            <List>
              <ListItem button onClick={() => handleTabChange('studentProgress')}>
                <ListItemIcon><BarChart /></ListItemIcon>
                <ListItemText primary="Student Progress" />
              </ListItem>
              <ListItem button onClick={() => handleTabChange('tutorProgress')}>
                <ListItemIcon><School /></ListItemIcon>
                <ListItemText primary="Tutor Progress" />
              </ListItem>
              <ListItem button onClick={() => handleTabChange('manageCourses')}>
                <ListItemIcon><Book /></ListItemIcon>
                <ListItemText primary="Manage Courses" />
              </ListItem>
              <ListItem button onClick={() => handleTabChange('manageStudyMaterials')}>
                <ListItemIcon><Book /></ListItemIcon>
                <ListItemText primary="Manage Study Materials" />
              </ListItem>
              <ListItem button onClick={() => handleTabChange('manageTutors')}>
                <ListItemIcon><People /></ListItemIcon>
                <ListItemText primary="Add and Remove Tutors" />
              </ListItem>
              <ListItem button onClick={() => handleTabChange('manageStudents')}>
                <ListItemIcon><People /></ListItemIcon>
                <ListItemText primary="Add and Remove Students" />
              </ListItem>
              <ListItem button onClick={() => handleTabChange('manageAcheivement')}>
                <ListItemIcon><People /></ListItemIcon>
                <ListItemText primary="Manage Acheivement" />
              </ListItem>
            </List>
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {!selectedTab && (
            <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
              <Avatar sx={{ width: 100, height: 100 }} src="/admin-avatar.jpg" alt="Admin" />
              <Typography variant="h4" sx={{ mt: 2 }}>Admin Name</Typography>
              <Typography variant="h6">Company Name</Typography>
              <Typography variant="body1">Degree: Master's in Education</Typography>
              <Typography variant="body2" sx={{ mt: 1, textAlign: 'center' }}>
                Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio.
              </Typography>
            </Container>
          )}

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {/* Content for each section */}
          {selectedTab === 'studentProgress' && (
            <Container>
              <Typography variant="h5">Student Progress</Typography>
              <Bar data={studentData} />
            </Container>
          )}
          {selectedTab === 'tutorProgress' && (
            <Container>
              <Typography variant="h5">Tutor Progress</Typography>
              <Bar data={tutorData} />
            </Container>
          )}
          {selectedTab === 'manageCourses' && (
            <Container>
              <Typography variant="h5">Manage Courses</Typography>
              <Grid container spacing={2} sx={{ my: 2 }}>
                <Grid item xs={4}>
                  <Tooltip title="Total Courses">
                    <Paper sx={{ padding: 2, backgroundColor: '#42a5f5', color: '#fff', '&:hover': { backgroundColor: '#1e88e5' } }}>
                      <Typography variant="h6">Total Courses: 20</Typography>
                    </Paper>
                  </Tooltip>
                </Grid>
                <Grid item xs={4}>
                  <Tooltip title="Active Courses">
                    <Paper sx={{ padding: 2, backgroundColor: '#66bb6a', color: '#fff', '&:hover': { backgroundColor: '#43a047' } }}>
                      <Typography variant="h6">Active Courses: 15</Typography>
                    </Paper>
                  </Tooltip>
                </Grid>
                <Grid item xs={4}>
                  <Tooltip title="Non-Active Courses">
                    <Paper sx={{ padding: 2, backgroundColor: '#ef5350', color: '#fff', '&:hover': { backgroundColor: '#e53935' } }}>
                      <Typography variant="h6">Non-Active Courses: 5</Typography>
                    </Paper>
                  </Tooltip>
                </Grid>
              </Grid>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <IconButton color="primary" onClick={handleOpenAddCourse}>
                  <Add />
                </IconButton>
                <IconButton color="secondary" onClick={() => openDeleteConfirmation(courseId)}>
                  <Delete />
                </IconButton>
                <Typography sx={{ ml: 2 }}>Add or Remove Course</Typography>
              </Box>
              <Dialog open={openAddCourse} onClose={handleCloseAddCourse}>
                <DialogTitle>Add New Course</DialogTitle>
                <DialogContent>
                  <TextField
                    autoFocus
                    margin="dense"
                    label="Course Name"
                    fullWidth
                    value={courseName}
                    onChange={(e) => setCourseName(e.target.value)}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    label="Tutor Name"
                    fullWidth
                    value={tutorName}
                    onChange={(e) => setTutorName(e.target.value)}
                  />
                  <TextField
                    margin="dense"
                    label="Course Article"
                    fullWidth
                    multiline
                    rows={4}
                    value={courseDescription}
                    onChange={(e) => setCourseDescription(e.target.value)}
                  />
                  <TextField
                    margin="dense"
                    label="Course URL"
                    fullWidth
                    multiline
                    value={courseImage}
                    onChange={(e) => setCourseImage(e.target.value)}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleCloseAddCourse}>Cancel</Button>
                  <Button onClick={handleAddCourse}>Add</Button>
                </DialogActions>
              </Dialog>

              <Dialog open={openConfirmDelete} onClose={handleCloseConfirmDelete}>
               <DialogTitle>Confirm Delete</DialogTitle>
                <DialogContent>
                <Typography>Are you sure you want to delete this item?</Typography>
              <TextField
                autoFocus
                margin="dense"
                label="Item ID"
                fullWidth
                variant="standard"
                value={courseId}
                onChange={(e)=>setCourseId(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleCloseConfirmDelete}>Cancel</Button>
            <Button onClick={handleRemoveCourse} color="error">Delete</Button>
            </DialogActions>
            </Dialog>

              <Grid container spacing={2} sx={{ mt: 2 }}>
                {[...Array(15).keys()].map((i) => (
                  <Grid item xs={12} sm={6} md={4} key={i}>
                    <Paper sx={{ padding: 2, textAlign: 'center' }}>
                      <Typography variant="h6">Course {i + 1}</Typography>
                      <Typography variant="body2">Description of course {i + 1}</Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Container>
          )}
          {selectedTab === 'manageStudyMaterials' && (
            <Container>
              <Typography variant="h5">Manage Study Materials</Typography>
              <Grid container spacing={2} sx={{ my: 2 }}>
                <Grid item xs={4}>
                  <Tooltip title="Total Materials">
                    <Paper sx={{ padding: 2, backgroundColor: '#42a5f5', color: '#fff', '&:hover': { backgroundColor: '#1e88e5' } }}>
                      <Typography variant="h6">Total Materials: 50</Typography>
                    </Paper>
                  </Tooltip>
                </Grid>
                <Grid item xs={4}>
                  <Tooltip title="Available Materials">
                    <Paper sx={{ padding: 2, backgroundColor: '#66bb6a', color: '#fff', '&:hover': { backgroundColor: '#43a047' } }}>
                      <Typography variant="h6">Available Materials: 40</Typography>
                    </Paper>
                  </Tooltip>
                </Grid>
                <Grid item xs={4}>
                  <Tooltip title="Outdated Materials">
                    <Paper sx={{ padding: 2, backgroundColor: '#ef5350', color: '#fff', '&:hover': { backgroundColor: '#e53935' } }}>
                      <Typography variant="h6">Outdated Materials: 10</Typography>
                    </Paper>
                  </Tooltip>
                </Grid>
              </Grid>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <IconButton color="primary" onClick={handleOpenAddMaterial}>
                  <Add />
                </IconButton>
                <IconButton color="secondary" onClick={() => openDeleteConfirmation(materialId)}>
                  <Delete />
                </IconButton>
                <Typography sx={{ ml: 2 }}>Add or Remove Material</Typography>
              </Box>
              <Dialog open={openAddMaterial} onClose={handleCloseAddMaterial}>
                <DialogTitle>Add New Material</DialogTitle>
                <DialogContent>
                  <TextField
                    autoFocus
                    margin="dense"
                    label="Material Title"
                    fullWidth
                    value={materialsName}
                    onChange={(e) => setMaterialTitle(e.target.value)}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    label="Material Image"
                    fullWidth
                    value={materialImage}
                    onChange={(e) => setMaterialImage(e.target.value)}
                  />
                  <TextField
                    margin="dense"
                    label="Material Description"
                    fullWidth
                    multiline
                    rows={2}
                    value={materialsDescription}
                    onChange={(e) => setMaterialDescription(e.target.value)}
                  />
                  <TextField
                    margin="dense"
                    label="Material Article"
                    fullWidth
                    multiline
                    rows={4}
                    value={materialArticle}
                    onChange={(e) => setMaterialArticle(e.target.value)}
                  />
                  <Button variant="contained" component="label">
                    Upload File
                    <input type="file" hidden onChange={handleMaterialUpload} />
                  </Button>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleCloseAddMaterial}>Cancel</Button>
                  <Button onClick={handleAddMaterial}>Add</Button>
                </DialogActions>
              </Dialog>
              <Dialog open={openConfirmDelete} onClose={handleCloseConfirmDelete}>
              <DialogTitle>Confirm Delete</DialogTitle>
               <DialogContent>
               <Typography>Are you sure you want to delete this item?</Typography>
             <TextField
               autoFocus
               margin="dense"
               label="Item ID"
               fullWidth
               variant="standard"
               value={materialId}
               onChange={(e)=>setMaterialId(e.target.value)}
               />
           </DialogContent>
           <DialogActions>
           <Button onClick={handleCloseConfirmDelete}>Cancel</Button>
           <Button onClick={handleRemoveMaterial} color="error">Delete</Button>
           </DialogActions>
           </Dialog>
              <Grid container spacing={2} sx={{ mt: 2 }}>
                {[...Array(15).keys()].map((i) => (
                  <Grid item xs={12} sm={6} md={4} key={i}>
                    <Paper sx={{ padding: 2, textAlign: 'center' }}>
                      <Typography variant="h6">Material {i + 1}</Typography>
                      <Typography variant="body2">Description of material {i + 1}</Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Container>
          )}
          {selectedTab === 'manageTutors' && (
            <Container>
              <Typography variant="h5">Add and Remove Tutors</Typography>
              <Grid container spacing={2} sx={{ my: 2 }}>
                <Grid item xs={4}>
                  <Tooltip title="Total Tutors">
                    <Paper sx={{ padding: 2, backgroundColor: '#42a5f5', color: '#fff', '&:hover': { backgroundColor: '#1e88e5' } }}>
                      <Typography variant="h6">Total Tutors: 30</Typography>
                    </Paper>
                  </Tooltip>
                </Grid>
                <Grid item xs={4}>
                  <Tooltip title="Active Tutors">
                    <Paper sx={{ padding: 2, backgroundColor: '#66bb6a', color: '#fff', '&:hover': { backgroundColor: '#43a047' } }}>
                      <Typography variant="h6">Active Tutors: 25</Typography>
                    </Paper>
                  </Tooltip>
                </Grid>
                <Grid item xs={4}>
                  <Tooltip title="Inactive Tutors">
                    <Paper sx={{ padding: 2, backgroundColor: '#ef5350', color: '#fff', '&:hover': { backgroundColor: '#e53935' } }}>
                      <Typography variant="h6">Inactive Tutors: 5</Typography>
                    </Paper>
                  </Tooltip>
                </Grid>
              </Grid>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <IconButton color="primary" onClick={handleOpenAddTutor}>
                  <Add />
                </IconButton>
                <IconButton color="secondary" onClick={() => openDeleteConfirmation(tutorId)}>
                  <Delete />
                </IconButton>
                <Typography sx={{ ml: 2 }}>Add or Remove Tutor</Typography>
              </Box>
              <Dialog open={openAddTutor} onClose={handleCloseAddTutor}>
                <DialogTitle>Add New Tutor</DialogTitle>
                <DialogContent>
                  <TextField
                    autoFocus
                    margin="dense"
                    label="Tutor Name"
                    fullWidth
                    value={tutorName}
                    onChange={(e) => setTutorName(e.target.value)}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    label="Qualification"
                    fullWidth
                    value={qualification}
                    onChange={(e) => setQualification(e.target.value)}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    label="Tutor Image"
                    fullWidth
                    value={tutorImage}
                    onChange={(e) => setTutorImage(e.target.value)}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    label="Descripton"
                    fullWidth
                    value={description}
                    rows={4}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleCloseAddTutor}>Cancel</Button>
                  <Button onClick={handleAddTutor}>Add</Button>
                </DialogActions>
              </Dialog>
              <Dialog open={openConfirmDelete} onClose={handleCloseConfirmDelete}>
               <DialogTitle>Confirm Delete</DialogTitle>
                <DialogContent>
                <Typography>Are you sure you want to delete this item?</Typography>
              <TextField
                autoFocus
                margin="dense"
                label="Item ID"
                fullWidth
                variant="standard"
                value={tutorId}
                onChange={(e)=>setTutorId(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleCloseConfirmDelete}>Cancel</Button>
            <Button onClick={handleRemoveTutor} color="error">Delete</Button>
            </DialogActions>
            </Dialog>
              <Grid container spacing={2} sx={{ mt: 2 }}>
                {[...Array(15).keys()].map((i) => (
                  <Grid item xs={12} sm={6} md={4} key={i}>
                    <Paper sx={{ padding: 2, textAlign: 'center' }}>
                      <Typography variant="h6">Tutor {i + 1}</Typography>
                      <Typography variant="body2">Details of tutor {i + 1}</Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Container>
          )}
          {selectedTab === 'manageStudents' && (
            <Container>
              <Typography variant="h5">Add and Remove Students</Typography>
              <Grid container spacing={2} sx={{ my: 2 }}>
                <Grid item xs={4}>
                  <Tooltip title="Total Students">
                    <Paper sx={{ padding: 2, backgroundColor: '#42a5f5', color: '#fff', '&:hover': { backgroundColor: '#1e88e5' } }}>
                      <Typography variant="h6">Total Students: 50</Typography>
                    </Paper>
                  </Tooltip>
                </Grid>
                <Grid item xs={4}>
                  <Tooltip title="Active Students">
                    <Paper sx={{ padding: 2, backgroundColor: '#66bb6a', color: '#fff', '&:hover': { backgroundColor: '#43a047' } }}>
                      <Typography variant="h6">Active Students: 45</Typography>
                    </Paper>
                  </Tooltip>
                </Grid>
                <Grid item xs={4}>
                  <Tooltip title="Inactive Students">
                    <Paper sx={{ padding: 2, backgroundColor: '#ef5350', color: '#fff', '&:hover': { backgroundColor: '#e53935' } }}>
                      <Typography variant="h6">Inactive Students: 5</Typography>
                    </Paper>
                  </Tooltip>
                </Grid>
              </Grid>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <IconButton color="primary" onClick={handleOpenAddStudent}>
                  <Add />
                </IconButton>
                <IconButton color="secondary" onClick={() => openDeleteConfirmation(id)}>
                  <Delete />
                </IconButton>
                <Typography sx={{ ml: 2 }}>Add or Remove Student</Typography>
              </Box>
              <Dialog open={openAddStudent} onClose={handleCloseAddStudent}>
                <DialogTitle>Add New Student</DialogTitle>
                <DialogContent>
                  <TextField
                    autoFocus
                    margin="dense"
                    label="Student Name"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    label="Password"
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    label="Confrim Password"
                    fullWidth
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <TextField
                    margin="dense"
                    label="Phone Number"
                    fullWidth
                    multiline
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleCloseAddStudent}>Cancel</Button>
                  <Button onClick={handleAddStudent}>Add</Button>
                </DialogActions>
              </Dialog>
              <Dialog open={openConfirmDelete} onClose={handleCloseConfirmDelete}>
               <DialogTitle>Confirm Delete</DialogTitle>
                <DialogContent>
                <Typography>Are you sure you want to delete this item?</Typography>
              <TextField
                autoFocus
                margin="dense"
                label="Item ID"
                fullWidth
                variant="standard"
                value={id}
                onChange={(e)=>setId(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleCloseConfirmDelete}>Cancel</Button>
            <Button onClick={handleRemoveStudent} color="error">Delete</Button>
            </DialogActions>
            </Dialog>
              <Grid container spacing={2} sx={{ mt: 2 }}>
                {[...Array(15).keys()].map((i) => (
                  <Grid item xs={12} sm={6} md={4} key={i}>
                    <Paper sx={{ padding: 2, textAlign: 'center' }}>
                      <Typography variant="h6">Student {i + 1}</Typography>
                      <Typography variant="body2">Details of student {i + 1}</Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Container>
          )}
          {selectedTab === 'manageAcheivement' && (
            <Container>
              <Typography variant="h5">Manage Acheivement</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <IconButton color="primary" onClick={handleOpenAcheivement}>
                  <Add />
                </IconButton>
                <IconButton color="secondary" onClick={() => openDeleteConfirmation(achievementId)}>
                  <Delete />
                </IconButton>
                <Typography sx={{ ml: 2 }}>Add or Remove Achievement</Typography>
              </Box>
              <Dialog open={openAcheivement} onClose={handleCloseAchievementt}>
                <DialogTitle>Add Acheivement</DialogTitle>
                <DialogContent>
                  <TextField
                    autoFocus
                    margin="dense"
                    label="Acheivement Name"
                    fullWidth
                    value={achievementName}
                    onChange={(e) => setAchievementName(e.target.value)}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    label="Acheivement Image"
                    fullWidth
                    value={achievementImage}
                    onChange={(e) => setAchievementImage(e.target.value)}
                  />
                  <TextField
                    margin="dense"
                    label="Article"
                    fullWidth
                    multiline
                    rows={4}
                    value={article}
                    onChange={(e) => setArticle(e.target.value)}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleCloseAchievementt}>Cancel</Button>
                  <Button onClick={handleAddAchievemt}>Add</Button>
                </DialogActions>
              </Dialog>
              <Dialog open={openConfirmDelete} onClose={handleCloseConfirmDelete}>
               <DialogTitle>Confirm Delete</DialogTitle>
                <DialogContent>
                <Typography>Are you sure you want to delete this item?</Typography>
              <TextField
                autoFocus
                margin="dense"
                label="Item ID"
                fullWidth
                variant="standard"
                value={achievementId}
                onChange={(e)=>setAchievementId(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleCloseConfirmDelete}>Cancel</Button>
            <Button onClick={handleRemoveAcheivement} color="error">Delete</Button>
            </DialogActions>
            </Dialog>
            <Grid container spacing={2} sx={{ mt: 4 }}>
          {achievements.map((ach) => (
          <Grid item xs={12} sm={12} md={12} key={ach.id}>
            <Paper sx={{ padding: 2, textAlign: 'center' }}>
              <Typography variant="h6">{ach.description}</Typography>
              <Typography variant="body2">{ach.article}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
            </Container>
          )}
        </Box>
        <Footer />
      </Box>
      </Box>
    </div>
  );
};
export default Admin;
