import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

// import{
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
function App() {
  const [mode ,setMode] = useState('light'); //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null); //To display alert

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000); //After 2 seconds, hide the alert
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode enabled", "success");
      // document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");
      // document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <div>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        <div className="container my-3">
          <switch>
            <about mode={mode} />
          <TextForm showAlert={showAlert} heading= "Try TextUtils - Word Counter, Character Counter, Copy Text" mode={mode}/>
          </switch>
          {/* <About/> */}
        </div>
    </div>
  );
}

export default App;