import React from "react";
import SingleFact from "./SingleFact"; // Assuming SingleFact is in the same directory

export default function Facts() {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10">
      <SingleFact facts="550" text="Students" />
      <SingleFact facts="40" text="Years of Excellence" />
      <SingleFact facts="50" text="Teachers" />
      <SingleFact facts="20" text="Stuffs" noBorderRight={true} />
    </div>
  );
}
