import { JobsContainer, SearchContainer } from "../components";
import { useLoaderData } from "react-router-dom";
import { createContext, useContext } from "react";
import customFetch from "../utils/customFetch";
import { useQuery } from "@tanstack/react-query";

const allJobsQuery = (params) => {
  const { search, jobStatus, jobType, sort, page } = params;
  return {
    queryKey: [
      "jobs",
      search ?? "",
      jobStatus ?? "all",
      jobType ?? "all",
      sort ?? "newest",
      page ?? 1,
    ],
    queryFn: async () => {
      const { data } = await customFetch.get("/jobs", {
        params,
      });
      return data;
    },
  };
};

export const allJobsLoader = (queryClient) => async ({request}) => {
  
  try {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    await queryClient.ensureQueryData(allJobsQuery(params));
    return { searchValues: {...params} };
    
  } catch (error) {
    console.log(error?.response?.data?.msg);
    return error;
  }
};

const AllJobsContext = createContext();

const AllJobs = () => {
  const {searchValues}  = useLoaderData();
  const { data } = useQuery(allJobsQuery(searchValues));
 
  return (
    <AllJobsContext.Provider value={{ data, searchValues }}>
      <SearchContainer />
      <JobsContainer />
    </AllJobsContext.Provider>
  );
};

export default AllJobs

export const useAllJobsContext = () => useContext(AllJobsContext);


