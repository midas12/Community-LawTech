import { useEffect, useState } from 'react';
import axiosInstance from '../Api/axiosInstance';

const Mission = () => {
  const [missionContent, setMissionContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMissionContent = async () => {
      try {
        const response = await axiosInstance.get('/mission');
        setMissionContent(response.data.content);
      } catch (error) {
        console.error('Error fetching mission content:', error);
        setError('Failed to load mission content. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchMissionContent();
  }, []);

  return (
    <div className="mission-page">
      {isLoading ? (
        <div role="status">
          <p>Loading...</p>
        </div>
      ) : error ? (
        <p role="alert">{error}</p>
      ) : (
        <div className="mission-content">
          <h1>Our Mission</h1>
          <p>{missionContent}</p>
        </div>
      )}
    </div>
  );
};

export default Mission;
