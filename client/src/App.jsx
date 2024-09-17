import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {
  Addjob,
  Admin,
  AllJobs,
  DashboardLayout,
  DeleteJob,
  EditJob,
  Error,
  HomeLayout,
  Landing,
  Login,
  Profile,
  Register,
  Stats
} from './pages'

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
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <Addjob />
          },
          {
            path: 'all-jobs',
            element: <AllJobs />
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
        ]
      },
    ]
  },
  {
    path: '/delete',
    element: <DeleteJob />
  },
  {
    path: '/edit',
    element: <EditJob />
  },
  {
    path: '/error',
    element: <Error />
  },
  {
    path: '/landing',
    element: <Landing />
  },
]);

const App = () => {
  return <RouterProvider router={router} />
}

export default App


