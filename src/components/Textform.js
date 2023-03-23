import React, { useState } from 'react';


    
export default function Textform(props) {
    const [text, setText] = useState('Enter your text');
    const handleOnChange= (event)=> {
        console.log("Handle on change");
        setText(event.target.value)
    }
    const[entered, setEntered]=useState('None');
    const display=()=>{   
        setEntered(text);
    }

    const handleUpClick=()=>
    {
        console.log("Uppercase clicked");
        let newText= text.toUpperCase();
        setText(newText);
    
    }
    const handleDownClick=()=>
    {
        console.log("Lower case clicked");
        let newText= text.toLowerCase();
        setText(newText);
    
    }
    const clearText=()=>
    {
        setText("Enter your text");
    }
  return (
    <>
   <div className='container'>
   <div className="mb-3">
    <h1>{props.heading}</h1>

  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={text} onChange={handleOnChange}></textarea>
  <button type="button" className="btn btn-primary my-3" onClick={display}>Display text</button>
  <button type="button" className="btn btn-primary my-3" onClick={handleUpClick}>Upper Case</button>
  <button type="button" className="btn btn-primary my-3 mx-1" onClick={handleDownClick}>Lower Case</button>
  <button type="button" className="btn btn-primary my-3 mx-1" onClick={clearText}>Clear Text</button>
  <h2>Text entered: {entered}</h2>
  {/*counting words and char*/}
  <div className='container my-3'>
    <h1>Your text summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
  </div>
</div>
   </div>

</>
  )
}
