"use client";

import React, { useEffect, useState } from "react";

const CountryLookup = () => {
  let [country, setCountry] = useState("United States");

  fetch("https://extreme-ip-lookup.com/json/?key=bWZprnZD3xySTIRAWoNX")
    .then((response) => response.json())
    .then((data) => setCountry(data.country))
    .catch((e) => console.log(e));

  return <div>{country}</div>;
  // return <div>India</div>
};

export default CountryLookup;
// ${process.env.NEXT_PUBLIC_IP_API_KEY}
