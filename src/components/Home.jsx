import React from "react";
import useFetchData from "./useFetchData";
import Search from "./search";

const Home = () => {
  const { status, data } = useFetchData();
  console.log(status);
  console.log(data);
  if (status === "fetched")
    return (
      <>
        <Search data={data} />
        {data.map((info) => {
          return <p key={info._id}>{info.name}</p>;
        })}
      </>
    );
};

export default Home;
