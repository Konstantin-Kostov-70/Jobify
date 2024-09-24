import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {
  Addjob,
  Admin,
  AllJobs,
  DashboardLayout,
  EditJob,
  Error,
  HomeLayout,
  Landing,
  Login,
  Profile,
  Register,
  Stats
} from './pages'

import { registerAction, loginAction, addJobAction } from './actions/fetchActions';
import { allJobsLoader, dashboardLoader } from './loaders/dataLoaders';

export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
  document.body.classList.toggle('dark-theme', isDarkTheme);
  return isDarkTheme
};

checkDefaultTheme();

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index:true,
        element: <Landing />
      },
      {
        path: 'login',
        element: <Login />,
        action: loginAction
      },
      {
        path: 'register',
        element: <Register />,
        action: registerAction
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        loader: dashboardLoader,
        children: [
          {
            index: true,
            element: <Addjob />,
            action: addJobAction
          },
          {
            path: 'all-jobs',
            element: <AllJobs />,
            loader: allJobsLoader
          },
          {
            path: 'stats',
            element: <Stats />
          },
          {
            path: 'profile',
            element: <Profile />
          },
          {
            path: 'admin',
            element: <Admin />
          },
          {
            path: '/edit-job/:id',
            element: <EditJob />
          },
          {
            path: '/delete-job/:id',
          },
        ]
      },
    ]
  },
  {
    path: '/error',
    element: <Error />
  },
]);

const App = () => {
  return <RouterProvider router={router} />
}

export default App


