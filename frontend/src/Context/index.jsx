import { useState, useContext, createContext, useEffect } from "react";
import {
  createTrailerRequest,
  deleteTrailerRequest,
  getTrailerRequest,
  gettrailersRequest,
  updateTrailerRequest,
} from "../Api";

const trailerContext = createContext();

export const useTrailer = () => {
  const context = useContext(trailerContext);
  return context;
};

export const TrailerProvider = ({ children }) => {
  const [trailers, setTrailers] = useState([]);

  const getTrailers = async () => {
    const res = await gettrailersRequest();
    setTrailers(res);
  };

  const createTrailer = async (trailer) => {
    const res = await createTrailerRequest();
    setTrailers([...trailers, res]);
  };
  const deleteTrailer = async (id) => {
    await deleteTrailerRequest(id);
    setTrailers(trailers.filter((trailer) => trailer.id !== id));
  };
  const updateTrailer = async (id, trailer) => {
    await updateTrailerRequest(id, trailer);
    setTrailers(
      trailers.map((trailer) => (trailer.id === id ? trailer : trailer))
    );
  };
  const getTrailer = async (id) => {
    const res = await getTrailerRequest(id);
    setTrailers(trailers.map((trailer) => (trailer.id === id ? res : trailer)));
  }

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
