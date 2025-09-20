import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';
import About from './About';
import App from './App';
import Home from './Home';
import Github from './Github';
import { githubLoader } from './GithubLoader';

// First Method: 
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       { path: "", element: <Home /> },
//       { path: "about", element: <About /> },
//     ],
//   },
// ]);

// Second Method:
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='' element={<App />}>
            <Route path='' element={<Home />} />
            <Route path=':id' element={<About />} />
            <Route loader={githubLoader} path='github' element={<Github />} />
        </Route>
    )
);


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
