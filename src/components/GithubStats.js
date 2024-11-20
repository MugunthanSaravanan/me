// GithubStats.js

import React, { useEffect, useState } from 'react';
import './GithubStats.scss'; // Import SCSS file for styles

const GithubStats = ({ username }) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Use setTimeout to delay setting animationComplete to true
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 100);

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`github-stats-container ${animationComplete ? 'animated' : ''}`}>
      <br></br>
      <h2>GitHub</h2> {/* Add title "Github" */}
      <br></br>
      <br></br>
      <div className="github-stats-item">
        <img 
          src={`https://github-profile-trophy.vercel.app/?username=${username}&show_icons=true&theme=tokyoday`} 
          alt={`${username} GitHub stats`} 
        />
      </div>
      <br></br>
      <div className="github-stats-row">
        <div className="github-stats-item">
          <img 
            src={`https://github-readme-stats.vercel.app/api/top-langs?username=${username}&show_icons=true&locale=en&layout=compact`} 
            alt={`${username} top languages`} 
            onMouseEnter={e => e.currentTarget.classList.add('pop-up-effect')} // Add pop-up effect on mouse enter
            onMouseLeave={e => e.currentTarget.classList.remove('pop-up-effect')} // Remove pop-up effect on mouse leave
          />
        </div>
        <div className="github-stats-item">
          <img 
            src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyoday`} 
            alt={`${username} GitHub stats`} 
            onMouseEnter={e => e.currentTarget.classList.add('pop-up-effect')} // Add pop-up effect on mouse enter
            onMouseLeave={e => e.currentTarget.classList.remove('pop-up-effect')} // Remove pop-up effect on mouse leave
          />
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="github-stats-item">
        <img 
          src={`https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${username}`} 
          alt={`${username} GitHub streak`} 
        />
      </div>
      <br></br>
      <div className="github-stats-item">
        <img 
          src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}`} 
          alt={`${username} GitHub streak`} 
        />
      </div>
    </div>
  );
}

export default GithubStats;
