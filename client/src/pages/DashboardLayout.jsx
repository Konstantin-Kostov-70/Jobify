/* eslint-disable react/prop-types */
import Wrapper from "../assets/wrappers/Dashboard";
import { Outlet, useNavigate, useNavigation, redirect } from "react-router-dom";
import { SmallSidebar, BigSidebar, Navbar, Loading } from "../components";
import { createContext, useContext, useState } from "react";
import { checkDefaultTheme } from "../App/"
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";

const userQuery = {
  queryKey: ["user"],
  queryFn: async () => {
    const { data } = await customFetch("/users/current-user");
    return data;
  },
};

export const dashboardLoader = (queryClient) => async () => {
  try {
    return await queryClient.ensureQueryData(userQuery);
  } catch (error) {
    console.log(error?.response?.data?.msg);
    return redirect("/");
  }
};

const DashboardContext = createContext();

// eslint-disable-next-line react/prop-types
const DashboardLayout = ({queryClient}) => {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading'

  const user  = useQuery(userQuery).data;
  

  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme());

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme
    setIsDarkTheme(newDarkTheme);
    localStorage.setItem('darkTheme', newDarkTheme);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    navigate('/');
    queryClient.invalidateQueries()
    await customFetch.get('/auth/logout');
    toast.success('Login out ...')
  };

  return (
    <DashboardContext.Provider value={{
      user,
      showSidebar,
      isDarkTheme,
      toggleDarkTheme,
      toggleSidebar,
      logoutUser
      }}>
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              {isPageLoading ? <Loading /> : <Outlet context={{user}} />}
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};


export const useDashboardContext = () => useContext(DashboardContext);

export default DashboardLayout;
