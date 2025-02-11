import React from "react";

const Item = ({ modules }) => {
  return (
    <>
  
  {modules.map((info) => {
    return (
   
       <p>{info.name}&nbsp;{info.grade}</p> 
   
    );
  })}

   
    </>
  );




};

export default Item;