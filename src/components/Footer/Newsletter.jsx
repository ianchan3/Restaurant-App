import React, {useState} from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

export default function Newsletter() {
  const [feedback, setFeedback] = useState(false);
  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading" id="app__newsletter-heading">
        <SubHeading title="Contact Us" />
        <h1 className="headtext__cormorant">Have A Question or Concern?</h1>
      </div>
      <form action="https://formsubmit.co/4f1ac02d2904fffb3d028bcc5e802dda" method="POST"> 
        <div className="app__newsletter-input flex__center">
          <input type="email" name="email" placeholder="Enter your email address" />
          <input type="name" name="name" placeholder="Enter Your Name" />
          <textarea type="name" name="comments" placeholder="Comments/Questions" />
          <button type="button" className="custom__button" onClick={() => setFeedback(true)}>Submit Feedback</button>
          { feedback ? 
            <h3 className="p__cormorant" id="feedback">Thank you for your feedback!</h3>
            : ""
          }
        </div>
      </form>
    </div>
  )
}

