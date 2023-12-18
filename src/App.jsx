import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './components/Root/RootLayout';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <RootLayout />
          <Dashboard />
        </>
      ),
    },
    {
      path: '/dashboard',
      element: (
        <>
          <RootLayout />
          <Dashboard />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
