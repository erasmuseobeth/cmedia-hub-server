import React from 'react';
import { Route, createBrowserRouter,
    createRoutesFromElements, RouterProvider }
     from 'react-router-dom';
import BaseLayout from '../pages/BaseLayout';
import Home from '../pages/Home';
import Login, { action as loginAction } from '../pages/forms/Login';
import Signup from '../pages/forms/Signup';
import Explore from '../pages/Explore';
import Download  from '../pages/Download';
import Upload from '../pages/Upload';
import Library from '../pages/Library';
import Settings from '../pages/Settings';
import Stream from '../pages/Stream';
import Profile from '../pages/Profile';
import Admin from '../pages/Admin';
import ErrorPage from '../pages/ErrorPage';
import '../assets/css/cmedia-hub.css'

// action={ }
// , { action as Action }
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={ <BaseLayout /> } errorElement={ < ErrorPage /> } >
            <Route index element={ <Home /> }  />
            <Route path="login" element={ <Login /> } action={ loginAction } />
            <Route path="signup" element={ <Signup /> } />
            <Route path="admin" element={ <Admin /> } />
            <Route path="explore" element={ <Explore /> } />
            <Route path="stream" element={ <Stream /> } />
            <Route path="settings" element={ <Settings /> } />
            <Route path="upload" element={ <Upload /> } />
            <Route path="download" element={ <Download /> } />
            <Route path="library" element={ <Library /> } />
            <Route path="profile" element={ <Profile /> } />
        </Route>
    )
  );

const App = () => {
    return(
        <RouterProvider router={ router}/>


    );
};

export default App  ;