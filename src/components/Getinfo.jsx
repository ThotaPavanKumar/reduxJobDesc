import { useEffect, useState } from "react";

export const GetInfo = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    get();
  }, []);

  const get = () => {
    fetch(`http://localhost:8000/job_details`)
      .then((d) => d.json())
      .then((res) => {
        // console.log(res)
        setDetails(res);
      });
  };
  console.log();
  return (
    <div>
      get Details
      {details.map((e) => (
        <>
          <div>Company Name:- {e.name}</div>
          <div>Job Title :- {e.title}</div>
          <div>Range:- {e.range}</div>
          <div>Location:- {e.location}</div>
          <div>Job Type:- {e.type}</div>
          <div>Description:- {e.description}</div>
        </>
      ))}
    </div>
  );
};
