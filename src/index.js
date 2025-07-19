

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from  'react-router-dom';

// pages
import AboutMePage from './pages/AboutMePage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import SkillsPage from './pages/SkillsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

const router = createBrowserRouter([
{
	path: "/",
	element: <App/>
},
{
	path: "/about-me",
	element: <AboutMePage/>
},
{
	path: "/projects",
	element: <ProjectsPage/>
},
{
	path: "/skills",
	element: <SkillsPage/>
},
{
	path: "/contact",
	element: <ContactPage/>
}
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 reportWebVitals();
