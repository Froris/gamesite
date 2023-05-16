import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from './pages/Root';
import './index.css';
import { Home } from './pages/Home';
import { ErrorBoundary } from './pages/ErrorBoundary';
import { News } from './pages/News';
import { Login } from './pages/Login';
import { AboutUs } from './pages/AboutUs';
import { Contacts } from './pages/Contacts';

export const pages = [
  { pageName: 'News', path: 'news' },
  { pageName: 'About us', path: 'about' },
  { pageName: 'Contacts', path: 'contacts' },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'news',
        element: <News />,
      },
      {
        path: 'about',
        element: <AboutUs />,
      },
      {
        path: 'contacts',
        element: <Contacts />,
      },
    ],
  },
  // FixMe: For testing. Delete after
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/err',
    element: <ErrorBoundary />,
  },
]);

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
