import React, { useState } from "react";
import { getBrandName } from "./utils";

const Home = () => {
  const brandName = getBrandName()
 
  return (
    <div>
    <span className="brandName">{brandName}</span>
      <p className="para">Home Page for OP Application</p>
    </div>
  );
};

export default Home;

