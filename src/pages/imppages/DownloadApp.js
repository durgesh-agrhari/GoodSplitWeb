import React from 'react';
import './DownloadApp.css';
import androidImg from '../../assets/logo.png';       // Android app logo
import iosImg from '../../assets/logo.png';               // iOS app logo
import screen1 from '../../assets/screenshots/1.png';          // App screen preview
import screen2 from '../../assets/screenshots/2.png';          // App screen preview
import screen3 from '../../assets/screenshots/3.png';          // App screen preview
import screen4 from '../../assets/screenshots/4.png';          // App screen preview
import screen5 from '../../assets/screenshots/5.png';          // App screen preview
import screen6 from '../../assets/screenshots/6.png';          // App screen preview

const DownloadApp = () => {
  return (
    <div className="download-container">
      <div className="download-content">
        <h1>📱 Get the App Now</h1>
        <p>Experience our app on Android and iOS with a sleek and fast interface.</p>

        <div className="download-buttons">
          <a
            href="https://play.google.com/store/apps/details?id=your.android.package"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={androidImg} alt="Download on Play Store" />
          </a>
          <a
            href="https://apps.apple.com/us/app/your-ios-app-id"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={iosImg} alt="Download on App Store" />
          </a>
        </div>
        <h1>Screen Shots</h1>
        <div className="screenshot-gallery">
          <img src={screen1} className='screenimg' alt="App Screenshot 1" />
          <img src={screen2} className='screenimg' alt="App Screenshot 2" />
          <img src={screen3} className='screenimg' alt="App Screenshot 3" />
          <img src={screen4} className='screenimg' alt="App Screenshot 4" />
          <img src={screen5} className='screenimg' alt="App Screenshot 5" />
          <img src={screen6} className='screenimg' alt="App Screenshot 6" />
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
