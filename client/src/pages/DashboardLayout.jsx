import Wrapper from "../assets/wrappers/Dashboard";
import { Outlet } from "react-router-dom";
import { SmallSidebar, BigSidebar, Navbar } from "../components";
import { createContext, useContext, useState } from "react";
import { checkDefaultTheme } from "../App/"

const DashboardContext = createContext();

// eslint-disable-next-line react/prop-types
const DashboardLayout = () => {

  const user = { name: "john" };
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
    console.log("logout user");
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
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};


export const useDashboardContext = () => useContext(DashboardContext);

export default DashboardLayout;
