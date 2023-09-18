import React, { useState } from 'react';
import './Sentimental.css';
import Sentimentalsect from '../Assets/Sentimentalanlysis.png';
import axios from 'axios';

function Sentimental() {
  const [userinput, setUserinput] = useState('');
  const [userOutput, setUserOutput] = useState(null); // Initialize userOutput as null

  const inputchange = (e) => {
    setUserinput(e.target.value);
  }

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      const querys = userinput;
  
      const requestBody = {
        text: querys
      };

      const headerObject = {
        'Content-Type': 'application/json',
        "Accept": "*/*",
      }

      const dashboardsApi = "http://sentiment.apprikart.com/api/extract_aspect_opinion_pairs";

      axios.post(dashboardsApi, requestBody, { headers: headerObject })
        .then((response) => {
          const responseData = response.data.result;

          const lines = responseData.split('\n');

          const positiveAspects = [];
          const negativeAspects = [];

          let isPositive = false;
          let isNegative = false;

          lines.forEach((line) => {
            if (line.startsWith('Positive:')) {
              isPositive = true;
              isNegative = false;
            } else if (line.startsWith('Negative:')) {
              isPositive = false;
              isNegative = true;
            } else if (isPositive) {
              positiveAspects.push(line.replace(/^-/, '').trim());
            } else if (isNegative) {
              negativeAspects.push(line.replace(/^-/, '').trim());
            }
          });

          setUserOutput({
            Positive: positiveAspects,
            Negative: negativeAspects,
          });
        })
        .catch((err) => {
          console.error("API Error:", err);
          // Handle errors here
        });
    }
  }

  return (
    <div className='full-container'>
      <div>
        <div className='sentimental-heading-section'><b>Sentimental Analysis</b></div>
      </div>

      <div className='sentimental-card-flexbox-container'>
        <div className='sentimental-input-section' >
          <div style={{ color: 'black' }}><b>Input -section</b></div>
          <div className='input-section-image'>
            <img src={Sentimentalsect} alt="analysis" className='input-section-image-div' />
          </div>
          <div style={{ color: 'black'}} className='enter-name-div' >
            Enter input:
          </div>
          <div>
          <textarea
  value={userinput}
  placeholder='Enter text'
  onChange={(e) => inputchange(e)}
  onKeyDown={(e) => handleEnter(e)} 
  className='input-text-div'
  style={{ minHeight: '10px' }} // Set a minimum height for the textarea
/>
          </div>
        </div>

        {userOutput && ( // Check if userOutput is not null
          <div className='sentimental-output-section' style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ color: 'black' }}><b>Sentimental Analysis Output</b></div>
            <div className='output-section-image'>
              <img src={Sentimentalsect} alt="analysis" className='output-section-image-div' />
            </div>
            <div className='output-text-div' style={{ textAlign: "center", flex: 1, overflowY: 'auto',paddingTop:"10px",paddingBottom:"10px" }}>
              <div>
                <b>Positive Aspects:</b>
                <ul>
                  {userOutput.Positive.map((aspect, index) => (
                    <li key={index}>{aspect}</li>
                  ))}
                </ul>
              </div>
              <div>
                <b>Negative Aspects:</b>
                <ul>
                  {userOutput.Negative.map((aspect, index) => (
                    <li key={index}>{aspect}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sentimental;
