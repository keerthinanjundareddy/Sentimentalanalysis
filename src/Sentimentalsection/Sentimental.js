import React, { useState } from 'react'
import './Sentimental.css'

function Sentimental() {
    const[userinput,setUserinput]=useState()
    const[userOutput,setUseroutput]=useState()

    console.log("userinput",userinput)
    const inputchange = (e) =>{
        setUserinput(e.target.value);
        console.log("userinput",userinput)
    }
  return (
    <>
   <div className='full-container'>

    <div>
        <div className='heading-section'> Sentimental Analysis</div>
    </div>

    <div className='sentimental-card-flexbox-container'>
        <div className='sentimental-input-section'>
                <div>
                 Input -section
                </div>
               <div>
                <input type="text" value={userinput} placeholder='enter text' onChange={(e)=>inputchange(e)} className='input-text-div'/>
               </div>
        </div>
        <div className='sentimental-output-section'>
        <div>
                 Output -section
                </div>
                <div className='final-sentimental-div'>
                    Finalsentiment
                </div>
               <div>
                <input type="text" value={userOutput} className='output-text-div' />
               </div>
        </div>
    </div>

   </div>
    </>
  )
}

export default Sentimental
