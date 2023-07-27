import { RAPID_API_KEY } from "@env";
import axios from "axios";
import { isLoading } from "expo-font";
import { useEffect, useState } from "react";

const rapidApiKey = RAPID_API_KEY;
const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": rapidApiKey,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };
};

const fetchData = async () => {
  setIsLoading(true);

  try {
    const response = await axios.request(Options);

    setData(response.data.data);
    setIsLoading(false);
  } catch (error) {
    setError(error);
    alert("There was an error");
  } finally {
    isLoading(false);
  }

  useEffect(() => {
    fetchData();

    return () => {
      second;
    };
  }, [third]);
};
