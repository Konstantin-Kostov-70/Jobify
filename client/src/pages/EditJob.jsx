import { FormRow, FormRowSelect, SubmitBtn } from "../components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { useLoaderData } from "react-router-dom";
import { JOB_STATUS, JOB_TYPE } from "../../../utils/constants";
import { Form, redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";

const singleJobQuery = (id) => {
  return {
    queryKey: ["job", id],
    queryFn: async () => {
      const { data } = await customFetch.get(`/jobs/${id}`);
      return data;
    },
  };
};

export const editJobLoader = (queryClient) => async ({ params }) => {
  try {
    await queryClient.ensureQueryData(singleJobQuery(params.id));
    return params.id;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect("/dashboard/all-jobs")
  }
};

const EditJob = () => {
  const id = useLoaderData();
  
  const {
    data: { job },
  } = useQuery(singleJobQuery(id));

  return (
    <Wrapper>
      <Form method="post" className="form">
      <h4 className="form-title">edit job</h4>
      <div className="form-center">
          <FormRow type="text" name="position" defaultValue={job.position} />
          <FormRow type="text" name="company" defaultValue={job.company} />
          <FormRow
            type="text"
            labelText="job location"
            name="jobLocation"
            defaultValue={job.jobLocation}
          />

          <FormRowSelect
            name="jobStatus"
            labelText="job status"
            defaultValue={job.jobStatus}
            list={Object.values(JOB_STATUS)}
          />
          <FormRowSelect
            name="jobType"
            labelText="job type"
            defaultValue={job.jobType}
            list={Object.values(JOB_TYPE)}
          />
          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  )
}

export default EditJob
