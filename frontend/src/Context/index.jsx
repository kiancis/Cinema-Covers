import { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";

const trailerContext = createContext();

export const useTrailer = () => {
  const context = useContext(trailerContext);
  return context;
};

export const TrailerProvider = ({ children }) => {
  const [trailers, setTrailers] = useState([]);

  const getTrailers = async () => {
    const res = await axios.get("http://localhost:4000/trailer");
    setTrailers(res.data);
  };

  const createTrailer = async (trailer) => {
    const res = await axios.post("http://localhost:4000/trailer", trailer);
    setTrailers([...trailers, res.data]);
  };
  const deleteTrailer = async (_id) => {
    await axios.delete(`http://localhost:4000/trailer/${_id}`);
    setTrailers(trailers.filter((trailer) => trailer._id !== _id));
  };
  const updateTrailer = async (id, trailer) => {
    await axios.put(`http://localhost:4000/trailer/${id}`, trailer);
    setTrailers(
      trailers.map((trailer) => (trailer._id === id ? trailer : trailer))
    );
  };
  const getTrailer = async (id) => {
    const res = await axios.get(`http://localhost:4000/trailer/${id}`);
    return res.data;
  };

  useEffect(() => {
    getTrailers();
  }, []);

  return (
    <trailerContext.Provider
      value={{
        trailers,
        createTrailer,
        deleteTrailer,
        updateTrailer,
        getTrailer,
      }}
    >
      {children}
    </trailerContext.Provider>
  );
};
