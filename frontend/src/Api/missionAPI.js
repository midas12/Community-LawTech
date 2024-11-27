import { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosInstance';

const Mission = () => {
  const [missionContent, setMissionContent] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMissionContent = async () => {
      try {
        const response = await axiosInstance.get('/mission');
        setMissionContent(response.data);
      } catch (error) {
        console.error('Error fetching mission content:', error);
        setError('Failed to load mission content');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMissionContent();
  }, []);

  return (
    <div className="mission-page">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <header className="mission-header">
            <h1>{missionContent.title}</h1>
          </header>
          <section className="mission-content">
            <p>{missionContent.description}</p>
            {missionContent.image && (
              <img
                src={missionContent.image}
                alt="Mission Illustration"
                className="mission-image"
              />
            )}
          </section>
        </>
      )}
    </div>
  );
};

export default Mission;
