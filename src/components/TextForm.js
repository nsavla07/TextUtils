import React, { useState } from 'react';

export default function TextForm(props) {

const handleUpClick= () => {
    // console.log("Uppercase was clicked "+ text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
}
const handleLoClick= () => {
    // console.log("Uppercase was clicked "+ text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
}

const handleClearClick= () => {
    let newText= "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
}

const handleOnChange= (event) => {
    setText(event.target.value);
}

const handleCopy= () => {
    // document.getSelection().removeAllRanges(); 
    navigator.clipboard.writeText(text);
    props.showAlert("Coppied to clipboard", "success");
}


const handleExSpace= () => {
    let newText= text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Removed Extra Spaces", "success");
}
    const [text, setText]= useState("");
    return (
        <>
            <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light'?'white':'grey', color: props.mode === 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
                </div>

                <button disabled={text.length===0} className="btn btn-primary mx-3" onClick= {handleUpClick}>Convert to Uppercase</button>
                
                <button disabled={text.length===0} className="btn btn-primary mx-3" onClick= {handleLoClick}>Convert to Lowercase</button>
                
                <button disabled={text.length===0} className="btn btn-primary mx-3" onClick= {handleClearClick}>Clear text</button>
                
                <button disabled={text.length===0} className="btn btn-primary mx-3" onClick= {handleCopy}> Copy</button>
                
                <button  disabled={text.length===0} className="btn btn-primary mx-3" onClick= {handleExSpace}> Remove Extra Space</button>
                


                </div>

                <div className="container my-4" style={{color: props.mode === 'dark'?'white':'black'}}>
                    <h1>Your Text Summary</h1>
                    <p> {text.split(/\s+/).filter((element)=> {return element.length!==0}).length} words and {text.length} characters</p>
                    <p>{0.008 * text.split(" ").filter((element)=> {return element.length!==0}).length} Minutes Read</p>
                </div>
                <h2>Preview</h2>
                <p>{text.length>0?text: "Enter something to preview here"}</p>
        </>
    )
}