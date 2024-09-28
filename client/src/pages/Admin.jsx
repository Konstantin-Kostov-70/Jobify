import { FaSuitcaseRolling, FaCalendarCheck } from "react-icons/fa";
import { useLoaderData, redirect } from "react-router-dom";
import Wrapper from "../assets/wrappers/StatsContainer";
import { StatItem } from "../components";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const adminLoader = async () => {
  try {
    const response = await customFetch.get("/users/admin/app-stats");
    return response.data;
  } catch (error) {
    toast.error("You are not authorized to view this page");
    console.log(error?.response?.data?.msg);
    return redirect("/dashboard");
  }
};

const Admin = () => {
  const { users, jobs } = useLoaderData();

  return (
    <Wrapper>
      <StatItem
        title="current users"
        count={users}
        color="#e9b949"
        bcg="#fcefc7"
        icon={<FaSuitcaseRolling />}
      />
      <StatItem
        title="total jobs"
        count={jobs}
        color="#647acb"
        bcg="#e0e8f9"
        icon={<FaCalendarCheck />}
      />
    </Wrapper>
  );
};

export default Admin;
