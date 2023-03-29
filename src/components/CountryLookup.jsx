"use client";

import { useEffect, useState } from "react";

export default function CountryLookup() {
  const [country, setCountry] = useState("United States");
  const [city, setCity] = useState("Jaipur");
  
  useEffect(() => {
    fetch(
      `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCity(data.city);
        setCountry(data.country);
      });
  }, []);

  return <div>{`${city}, ${country}`}</div>;
}

