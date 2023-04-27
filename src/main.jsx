import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import Image_upload from './file_upload/Image_upload'
import Multifileupload from './file_upload/Multifileupload'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Image_upload/>
    <Multifileupload/> 
  </React.StrictMode>,
)
