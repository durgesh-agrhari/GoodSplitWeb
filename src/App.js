import './App.css';
import React, {useState, useEffect} from 'react'; //4.5k (gzipped: 2k)
// import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// import Homepage from './homepage/Homepage';



//import ReactGA from "react-ga"; //14.8k (gzipped: 4.9k)
import ReactGA from "react-ga4";


import Homepage from './components/homepage/Homepage';
import PrivacyPolicy from './pages/imppages/PrivacyPolicy';
import Contact from './pages/imppages/Contact';
import Feedback from './pages/imppages/Feedback';
import DownloadApp from './pages/imppages/DownloadApp';
// import VideoPlayer from './components/homeVideo/VideoPlayer';



const TRACKING_ID = "G-PE3WVLWX2S"; //
ReactGA.initialize(TRACKING_ID);
// ReactGA.pageview(document.location.pathname);


function App() {

  const [theme, setTheme] = useState('')
  const toggleTheme = () => {
    theme === '' ? setTheme('light-theme') : setTheme('')
  }

  useEffect(() => {
    document.body.className = theme
  }, [theme])


  //This is helpes to send page view to google analisis
  // useEffect(() => {
  //   ReactGA.pageview(window.location.pathname);
  // },[])

  return (
    <>
     <Router>
      <Header theme={theme} toggleTheme={toggleTheme} /> 
        <Routes>

          {/* ========= Pages ============== */}
          <Route path='/' element = {<Homepage/> }/>
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Feedback" element={<Feedback />} />
          <Route path="/DownloadApp" element={<DownloadApp />} />
          
        </Routes>
      </Router>
      {/* <Footer/> */}
    </>
  );
}

export default App;