import React from "react";
import "./Tutorials.css"; 

const tutorials = [
  { title: "Beginner Yoga Flow", videoId: "v7AYKMP6rOE" },
  { title: "Yoga For Anxiety and Stress", videoId: "hJbRpHZr_d0" },
  { title: "10-Minute Yoga for Flexibility", videoId: "4pKly2JojMw" },
  { title: "15 MIN FULL BODY STRETCH - Improve Mobility and Flexibility", videoId: "i6TzP2COtow" },
  { title: "30-Minute Yoga For Beginners ", videoId: "AB3Y-4a3ZrU" },
  { title: "DAY 7 Back to Basics - 15 MIN FULL BODY STRETCH For Rest Day, Improve Mobility & Flexibility", videoId: "aO1boUJhjvk" },
  { title: "Basic YOGA ASANAS for GOOD HEALT", videoId: "149Iac5fmoE" },
  { title: "SURYA NAMASKAR FOR BEGINNERS", videoId: "1xRX1MuoImw" },
  { title: "15 Min Daily Yoga Routine for Beginners", videoId: "s2NQhpFGIOg" },
  { title: "Meditation Is Easier Than You Think", videoId: "thcEuMDWxoI" },
  { title: "5-Minute Meditation You Can Do Anywheres", videoId: "inpok4MKVLM" },
  { title: "3 Most Effective Pranayamas - Deep Breathing Exercises", videoId: "395ZloN4Rr8" }
];

const Tutorials = () => {
  return (
    <div className="tutorials-container">
      <h2 className="tutorials-title">Yoga Tutorials</h2>
      <div className="cards-container">
        {tutorials.map((tutorial, index) => (
          <div key={index} className="tutorial-card">
            <iframe
              src={`https://www.youtube.com/embed/${tutorial.videoId}`}
              title={tutorial.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <h3>{tutorial.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tutorials;
