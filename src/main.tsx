import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from './pages/Root';
import './index.css';
import { Home } from './pages/Home';
import { ErrorBoundary } from './pages/ErrorBoundary';
import { Events } from './pages/Events';
import { TestForm } from './pages/TestForm';
import { initFacebookSdk } from './services';

// wait for facebook sdk before startup
initFacebookSdk()
  .then(startApp)
  .catch((err) => console.error(err));

function startApp() {
  createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: '/',
        index: true,
        element: <Home />,
      },
      {
        path: '/events',
        element: <Events />,
      },
      {
        path: '/contacts',
        element: <TestForm />,
      },
    ],
  },
]);
