// app.jsx
import React from 'react';
import '../assets/css/cmedia-hub.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import BaseLayout from '../pages/BaseLayout';
import Home from '../pages/Home';
import Login, { action as loginAction } from '../pages/forms/Login';
import Signup from '../pages/forms/Signup';
import Explore, {loader as exploreLoader} from '../pages/Explore';
import Download from '../pages/Download';
import Upload from '../pages/Upload';
import Library from '../pages/Library';
import Settings from '../pages/Settings';
import Stream,  {loader as streamLoader} from '../pages/Stream';
import Profile from '../pages/Profile';
import Admin from '../pages/Admin';
import ErrorPage from '../pages/ErrorPage';

const routes = createRoutesFromElements(
  <Route path="/" element={<BaseLayout />} errorElement={<ErrorPage />}>
    <Route index element={<Home />} />
    <Route path="login" element={<Login />} action={loginAction} />
    <Route path="signup" element={<Signup />} />
    <Route path="admin" element={<Admin />} />
    <Route path="explore" element={<Explore />} loader={exploreLoader}/>
    <Route path="stream" element={<Stream />} loader={streamLoader} />
    <Route path="settings" element={<Settings />} />
    <Route path="upload" element={<Upload />} />
    <Route path="download" element={<Download />} />
    <Route path="library" element={<Library />} />
    <Route path="profile" element={<Profile />} />
  </Route>
);

const router = createBrowserRouter(routes);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export { routes, App };
