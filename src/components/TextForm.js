import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
   // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase!", "success");
  }

  const handleLoClick = ()=>{
     let newText = text.toLowerCase();
     setText(newText)
     props.showAlert("Converted to lowercase!", "success");
  }

  const handleClearClick = ()=>{
    let newText = '';
    setText(newText)
  }

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy to clipboard", "success");
  }

  const handleOnChange = (event)=>{
    //console.log("On change");
    setText(event.target.value);
  }

  const [text, setText] = useState('');
  return (
    <>
    <div className="container" style ={{color: props.mode === 'dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
      <div className = "mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'grey':'white', color: props.mode === 'dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
    </div>

    <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} words and {text.length} character</p>
      <p>{0.008 * text.split(" ").length}Minutes read</p>

    </div>
    </>
  )
}
