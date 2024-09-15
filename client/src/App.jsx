import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {
  Addjob,
  Admin,
  AllJob,
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
        element: <DashboardLayout />
      },
    ]
  },
  {
    path: '/add-job',
    element: <Addjob />
  },
  {
    path: '/admin',
    element: <Admin />
  },
  {
    path: '/all-job',
    element: <AllJob />
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
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/stats',
    element: <Stats />
  },
]);

const App = () => {
  return <RouterProvider router={router} />
}

export default App


