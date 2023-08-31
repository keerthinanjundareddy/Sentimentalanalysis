import React, { useState } from 'react';
import './Sentimental.css';
import Sentimentalsect from '../Assets/Sentimentalanlysis.png'

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
        <div className='sentimental-heading-section'><b>Sentimental Analysis</b></div>
      </div>

      <div className='sentimental-card-flexbox-container'>
        <div className='sentimental-input-section'>
          <div style={{ color: 'black' }}><b>Input -section</b></div>
          <div className='input-section-image'>
            <img src={Sentimentalsect} alt="analysis" className='input-section-image-div' />
          </div>
          <div style={{ color: 'black' }} className='enter-name-div'>
            Enter input:
          </div>
          <div>
            <input
              type="text"
              value={userinput}
              placeholder='Enter text'
              onChange={(e) => inputchange(e)}
              onKeyDown={(e) => handleEnter(e)} // Call handleEnter on key down
              className='input-text-div'
            />
          </div>
        </div>

        {/* Conditionally render the output section */}
        {userOutput && (
          <div className='sentimental-output-section'>
            <div style={{ color: 'black' }}><b>Sentimental Analysis Output</b></div>
            {/* <div className='final-sentimental-div' style={{ color: 'black' }}>
             <b> Sentimental Analysis Output </b>
            </div> */}
            <div className='output-section-image'>
              <img src={Sentimentalsect } alt="analysis" className='output-section-image-div'/>
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
        )}
      </div>
    </div>
  );
}

export default Sentimental;
