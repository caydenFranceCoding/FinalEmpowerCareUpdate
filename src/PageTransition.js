import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './PageTransition.css';

const PageTransition = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [prevPath, setPrevPath] = useState(null);

  // Show loader on ALL navigation events
  useEffect(() => {
    // Store previous path on location change
    if (prevPath !== location.pathname) {
      setIsLoading(true);
      setPrevPath(location.pathname);
    }

    // Hide loading state after a delay
    const hideLoader = () => {
      setTimeout(() => setIsLoading(false), 800);
    };

    // For page loads
    window.addEventListener('load', hideLoader);

    // For React navigation
    hideLoader();

    // When clicking on links, show loader
    const handleLinkClick = (e) => {
      if (e.currentTarget.tagName === 'A' && e.currentTarget.getAttribute('href')) {
        setIsLoading(true);
      }
    };

    document.addEventListener('click', handleLinkClick);

    return () => {
      window.removeEventListener('load', hideLoader);
      document.removeEventListener('click', handleLinkClick);
    };
  }, [location.pathname, prevPath]);

  return (
    <div className={`page-transition ${isLoading ? 'is-loading' : 'is-loaded'}`}>
      <div className="loader-container">
        <div className="boxes">
          <div className="box">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="box">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="box">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="box">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <p className="loading-text">Loading...</p>
      </div>
    </div>
  );
};

export default PageTransition;