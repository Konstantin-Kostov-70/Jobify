import { JobsContainer, SearchContainer } from "../components";
import { useLoaderData } from "react-router-dom";
import { createContext, useContext } from "react";

const AllJobsContext = createContext();

const AllJobs = () => {
  const {data, searchValues}  = useLoaderData();
 
  return (
    <AllJobsContext.Provider value={{ data, searchValues }}>
      <SearchContainer />
      <JobsContainer />
    </AllJobsContext.Provider>
  );
};

export default AllJobs

export const useAllJobsContext = () => useContext(AllJobsContext);


