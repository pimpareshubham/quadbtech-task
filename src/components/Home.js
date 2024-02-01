import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShowCard from './ShowCard';
import './Home.css';

const Home = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
        setShows(response.data);
        localStorage.setItem('response', JSON.stringify(response.data));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="card mt-3 mb-3">
      <h1 className="mb-2 mt-5 text-center fw-bold">TV Shows 🎬</h1>
      <div className="row">
        {shows.map(show => (
          <ShowCard key={show.show.id} show={show.show} />
        ))}
      </div>
    </div>
  );
};

export default Home;
