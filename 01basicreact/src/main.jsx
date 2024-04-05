import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


const Areactelement=React.createElement(
    'a',
    {href:"https://google.com",target:"_blank"},
    "hey click here"
)


ReactDOM.createRoot(document.getElementById('root')).
render(
  
   
    < App/>

  
)
