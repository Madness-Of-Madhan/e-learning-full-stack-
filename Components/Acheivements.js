import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import axios from 'axios';
import '../Assets/Placement.css'; // Make sure to include your styles

const Acheivements = () => {
  const [achievements, setAchievements] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);
  const articleRef = useRef(null);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/getall');
        console.log('Fetched achievements:', response.data);
        setAchievements(response.data);
      } catch (error) {
        console.error('Error fetching achievements:', error);
      }
    };

    fetchAchievements();
  }, []);

  const nextSlide = () => {
    console.log('Current index before update:', currentIndex);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % achievements.length);
  };

  const startSlider = () => {
    console.log('Slider started');
    if (achievements.length > 1) {
      intervalRef.current = setInterval(nextSlide, 3000);
    }
  };

  const stopSlider = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    if (!isPaused) {
      startSlider();
    } else {
      stopSlider();
    }

    return () => stopSlider();
  }, [isPaused]);

  useEffect(() => {
    gsap.fromTo(
      `.image-container img`,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );
    gsap.fromTo(
      articleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, [currentIndex]);

  if (achievements.length === 0) {
    return <div>Loading...</div>;
  }

  if (currentIndex >= achievements.length) {
    return <div>Error: Index out of range</div>;
  }

  const { achievementImage, article, achievementName } = achievements[currentIndex] || {};

  return (
    <div className="page-container">
      <header className="header">
        <h1>Achievements</h1>
      </header>
      <div className="content">
        <div className="image-container">
          {achievementImage ? (
            <img src={achievementImage} alt={`Slide ${currentIndex}`} />
          ) : (
            <div>No image available</div>
          )}
          <div className="description">
            {achievementName || 'No description available'}
          </div>
        </div>
        <div className="article-container" ref={articleRef}>
          {article || 'No article available'}
        </div>
        <button className='but' onClick={() => setIsPaused(!isPaused)}>
          {isPaused ? 'Resume' : 'Pause'}
        </button>
      </div>
    </div>
  );
};

export default Acheivements;
