/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";

const AllJobsContext = createContext();

export const useAllJobsContext = () => useContext(AllJobsContext);

export const AllJobsProvider = ({ children, jobs }) => {
    return (
        <AllJobsContext.Provider value={jobs}>
            {children}
        </AllJobsContext.Provider>
    )
}
