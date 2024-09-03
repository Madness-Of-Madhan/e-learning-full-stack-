import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Button, TextField, Rating, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios';
// Styled components
const Header = styled('header')({
  padding: '10px',
  textAlign: 'center',
  background: '#f5f5f5',
});

const Footer = styled('footer')({
  padding: '10px',
  textAlign: 'center',
  background: '#f5f5f5',
});

const FeedbackSection = styled('div')({
  padding: '20px',
  background: '#e0e0e0',
  marginBottom: '20px',
});

const FeedbackList = styled('div')({
  marginTop: '20px',
  padding: '10px',
  background: '#f0f0f0',
});

const FeedbackItem = styled('div')({
  padding: '10px',
  borderBottom: '1px solid #ccc',
});
const ChatboxContainer = styled('div')({
  marginTop: '20px',
  padding: '20px',
  background: '#f9f9f9',
  border: '1px solid #ddd',
  borderRadius: '8px',
});


const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [feedbackList, setFeedbackList] = useState([]);


  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSendFeedback = () => {
    if (feedback) {
      setFeedbackList([{ feedback, rating }, ...feedbackList]);
      setFeedback('');
      setRating(0);
    }
  };

 
  const[question,setquestion]=useState("");
  const[answer,setanswer]=useState("");
  const generateAnswer =async () =>
  {
    setanswer("loading...");
   const response=await axios({
    url:"https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=AIzaSyDyu1y8ctXK6WDi-9dG_OQsCemhh6MZMvw",
    method:"post",
    data:{
      contents: [
        {
          role: "user",
          parts: [
            {
              text: question
            }
          ]
        }
      ]
    },
    })
  setanswer(response['data']['candidates'][0]['content']['parts'][0]['text']);
  };

  return (
    <>
      <Header>
        <h1>Feedback Page</h1>
      </Header>
      <Container>
        <FeedbackSection>
          <Typography variant="h5">Leave Your Feedback</Typography>
          <TextField
            label="Your Feedback"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={feedback}
            onChange={handleFeedbackChange}
            margin="normal"
          />
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
          />
          <Button variant="contained" color="primary" onClick={handleSendFeedback} style={{ marginTop: '10px' }}>
            Send
          </Button>
        </FeedbackSection>
        <FeedbackList>
          <Typography variant="h6">Feedback Received</Typography>
          {feedbackList.length === 0 && <Typography>No feedback yet.</Typography>}
          {feedbackList.map((item, index) => (
            <FeedbackItem key={index}>
              <Typography>{item.feedback}</Typography>
              <Rating name="read-only" value={item.rating} readOnly />
            </FeedbackItem>
          ))}
        </FeedbackList>
        <ChatboxContainer>
          <Typography variant="h5">Student Area</Typography>
          <TextField
            label="Type your message"
            variant="outlined"
            fullWidth
            multiline
            rows={2}
            value={question}
            onChange={(e)=>setquestion(e.target.value)}
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={generateAnswer}  style={{ marginTop: '10px' }}>
            Send
          </Button>
          <p>{answer}</p>
        </ChatboxContainer>
      </Container>
      <Footer>
        <p>&copy; 2024 Feedback Page</p>
      </Footer>
    </>
  );
};

export default Feedback;
