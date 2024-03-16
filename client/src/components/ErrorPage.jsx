import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();

    const goToPreviousPage = () => {
        navigate(-1); // Navigate back one step
    };

    return (
        <div className="container error-container">
            <h1 className="display-4">Oops! Something went wrong.</h1>
            <p className="lead">We're sorry, but it seems there's been an error. Please try again later.</p>
            <button onClick={goToPreviousPage}>Back to Previous Page</button>
        </div>
    );
};

export default ErrorPage;
