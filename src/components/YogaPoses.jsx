import React from "react";
import "./YogaPoses.css";


const YogaPoses = () => {
  return (
    <div className="yoga-poses">
      <h1>Explore Yoga Poses</h1>
      <div className="poses-grid">
        <div className="pose-card">
          <img src="./Ustrasana.jpg" alt="Pose 1" />
          <h3>Ustrasana</h3>
        </div>
        <div className="pose-card">
          <img src="./Utthita Trikonasana.jpg" alt="Pose 2" />
          <h3>Utthita Trikonasana</h3>
        </div>
      </div>
      <div className="poses-grid">
      <div className="pose-card">
          <img src="./Parivrtta Parsvakonasana.jpg" alt="Pose 2" />
          <h3>Parivrtta Parvakonasana</h3>
        </div>
        <div className="pose-card">
          <img src="./yoga-group-classes.jpg" alt="Pose 1" />
          <h3>Group Yoga</h3>
        </div>

      </div>
    </div>
  );
};

export default YogaPoses;
