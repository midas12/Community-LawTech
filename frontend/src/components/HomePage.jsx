import { useEffect } from "react";
import axios from "axios";
//import "./HomePage.css";

const HomePage = () => {
    useEffect(() => {
        axios.get('/api/endpoint')
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('There was an error making the request!', error);
            });
    }, []);

    return (
        <section className="hero">
            <div className="container hero-content">
                <h2>Empowering Communities with Legal Support</h2>
                <p>
                    Community LawTech connects you with accredited community lawyers who
                    understand your needs. Our platform offers culturally and linguistically
                    appropriate legal support in areas like immigration, housing, and employment.
                </p>
                <div className="hero-buttons">
                    <button className="btn btn-primary">Find Lawyers</button>
                    <button className="btn btn-outline-secondary">Donate Now</button>
                </div>
            </div>
        </section>
    );
};

export default HomePage;
