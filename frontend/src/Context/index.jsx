import { useState, useContext, createContext, useEffect } from "react";
import {
  getTrailersRequests,
  createTrailersRequests,
  deleteTrailersRequests,
  getTrailerRequests,
  updateTrailerRequests,
} from "../Api";

const trailerContext = createContext();

export const useTrailer = () => {
  const context = useContext(trailerContext);
  return context;
};

export const TrailerProvider = ({ children }) => {
  const [trailers, setTrailers] = useState([]);

  const getTrailers = async () => {
    const res = await getTrailersRequests();
    setTrailers(res);
  };

  const createTrailer = async (trailer) => {
    const res = await createTrailersRequests();
    setTrailers([...trailers, res]);
  };
  const deleteTrailer = async (_id) => {
    await deleteTrailersRequests(_id);
    setTrailers(trailers.filter((trailer) => trailer._id !== _id));
  };
  const updateTrailer = async (id, trailer) => {
    await updateTrailerRequests(id, trailer);
    setTrailers(
      trailers.map((trailer) => (trailer.id === id ? trailer : trailer))
    );
  };
  const getTrailer = async (id) => {
    const res = await getTrailerRequests(id);
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
