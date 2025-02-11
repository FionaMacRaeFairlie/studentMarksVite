import React from "react";
import useFetchData from "./useFetchData";
import Search from "./search";
import Item from "./Item";

const Home = () => {
  const { status, data } = useFetchData();
  console.log(status);
  console.log(data);
  if (status === "fetched")
    return (
      <>

        <Search data={data}/>

      </>
    );
};

export default Home;