import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';
import axiosInstance from '../Api/axiosInstance';
const OurLegalSupport = () => {
  const [supportList, setSupportList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSupport();
  }, []);

  const fetchSupport = async () => {
    try {
      const { data } = await axiosInstance.get('/ourLegalSupport');
      if (data.success) {
        setSupportList(data.data);
      } else {
        toast.error('Failed to fetch support data!');
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred while fetching support data.');
      setError('Failed to load support data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="our-legal-support">
      <Helmet>
        <title>Our Legal Support</title>
        <meta name="description" content="Explore our comprehensive legal support offerings." />
      </Helmet>
      <header className="page-header">
        <h1>Our Legal Support</h1>
        <p>Providing comprehensive and reliable support for all your legal needs.</p>
      </header>

      <section className="support-list">
        {loading ? (
          <div role="status">
            <p>Loading support data...</p> {/* You can replace this with a spinner */}
          </div>
        ) : error ? (
          <p role="alert">{error}</p>
        ) : (
          <ul>
            {supportList.length > 0 ? (
              supportList.map((support) => (
                <li key={support.id} className="support-item">
                  <h3>{support.title}</h3>
                  <p>{support.description}</p>
                </li>
              ))
            ) : (
              <p>No support items available.</p>
            )}
          </ul>
        )}
      </section>
    </div>
  );
};

export default OurLegalSupport;
