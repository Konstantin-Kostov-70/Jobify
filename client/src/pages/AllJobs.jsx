import { JobsContainer, SearchContainer } from "../components";
import { useLoaderData } from "react-router-dom";
import { createContext, useContext } from "react";

const AllJobsContext = createContext();

const AllJobs = () => {
  const {jobs}  = useLoaderData();
  
  return (
    <AllJobsContext.Provider value={{ jobs }}>
      <SearchContainer />
      <JobsContainer />
    </AllJobsContext.Provider>
  );
};

export default AllJobs

export const useAllJobsContext = () => useContext(AllJobsContext);


