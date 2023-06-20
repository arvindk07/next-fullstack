import React from "react";
import Herosection from "./components/Herosection";

const page = () => {
  return (
    <div>
      <Herosection
        title={"Let's watch movie together"}
        imageUrl={"/home.svg"}
      />
    </div>
  );
};

export default page;
