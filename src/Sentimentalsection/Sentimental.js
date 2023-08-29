import React, { useState } from 'react';
import './Sentimental.css';

function Sentimental() {
  const [userinput, setUserinput] = useState('');
  const [userOutput, setUserOutput] = useState('');

  console.log('userinput', userinput);

  const inputchange = (e) => {
    setUserinput(e.target.value);
  }

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      // Perform sentiment analysis here and set the result to 'positive'
      setUserOutput('positive');
    }
  }

  return (
    <div className='full-container'>
      <div>
        <div className='heading-section'>Sentimental Analysis</div>
      </div>

      <div className='sentimental-card-flexbox-container'>
        <div className='sentimental-input-section'>
          <div style={{ color: 'white' }}>Input -section</div>
          <div style={{ color: 'white' }} className='enter-name-div'>
            Enter input:
          </div>
          <div>
            <input
              type="text"
              value={userinput}
              placeholder='enter text'
              onChange={(e) => inputchange(e)}
              onKeyDown={(e) => handleEnter(e)} // Call handleEnter on key down
              className='input-text-div'
            />
          </div>
        </div>
        <div className='sentimental-output-section'>
          <div style={{ color: 'white' }}>Output -section</div>
          <div className='final-sentimental-div' style={{ color: 'white' }}>
                 sentimental Analysis Output
          </div>
          <div>
            <input
              type="text"
              value={userOutput}
              className='output-text-div'
              readOnly // Make the output field read-only
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sentimental;
