import { useState } from 'react';
import './feedback-form.css';

export default function FeedbackForm(props) {
  const [topic, setTopic] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  if (!props.isDisplayed) {
    // If the form should not be displayed, render nothing
    return null;
  }
  return (
    <div className='chatBox'>
      <div className='feedbackForm'>
        <h2>InsightPop</h2>
        <p>
          Hello, any complaints for the team here at InsightPop? Write them
          below and the team will get an email based on your complaints.
        </p>
        <select value={topic} onChange={(e) => setTopic(e.target.value)}>
          <option value=''>Select a topic</option>
          <option value='billing'>Billing</option>
          <option value='product-suggestion'>
            Product Features & Suggestions
          </option>
          <option value='tech-support'>Tech Support</option>
        </select>
        <label htmlFor='email'>Enter your email for a response</label>
        <input type='email' required />
        <textarea
          value={feedbackMessage}
          onChange={(e) => setFeedbackMessage(e.target.value)}
        ></textarea>
        <button>Send</button>
      </div>
    </div>
  );
}
