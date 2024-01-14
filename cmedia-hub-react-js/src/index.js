import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import '@fortawesome/fontawesome-svg-core/styles.css';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faGoogle, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
// library.add(faGoogle, faFacebook, faInstagram);
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import App from '@components/App';


const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);