// import logo from './logo.svg';
import insightPopLogo from './assets/images/logo/insight-Pop-Logo.png';
import './App.css';
import MinimizeBar from './components/MinimizeBar/MinimizeBar';
import FeedbackForm from './components/FeedbackForm/FeedbackForm';
import { useState } from 'react';

function App() {
  // the state that's lifted up that I'll pass to both MinimizeBar & FeedbackForm
  const [isDisplayed, setDisplay] = useState(true);

  return (
    <div className='App'>
      <header className='App-header'>
        {/* <img src={logo} className='App-logo' alt='logo' /> */}
        <img src={insightPopLogo} alt='logo of Insight Pop' />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          Where Customer Voices Shine – InsightPop
        </p>
      </header>
      <MinimizeBar isDisplayed={isDisplayed} setDisplay={setDisplay} />
      <FeedbackForm
        isDisplayed={isDisplayed}
        onSendFeedback={() => {
          setDisplay(false); // This hides the feedback form
        }}
      />
    </div>
  );
}

export default App;
