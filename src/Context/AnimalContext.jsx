import axios from "axios";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { toast } from "react-toastify";

const AnimailContext = createContext();

export const AnimalProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [latestBlog, setLatestBlog] = useState([]);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (!hasFetched.current) {
      hasFetched.current = true;
      fetchAnimalsData();
    }
  }, []);

  const fetchAnimalsData = async () => {
    const res = await axios.get(
      "https://67a21f98409de5ed5254601b.mockapi.io/animals"
    );

    if (res.status === 200) {
      setData(res.data);
    } else {
      setError("Something Went Wrong");
    }
  };

  const fetchAnimalDataById = async (id) => {
    try {
      // console.log(id);
      const res = await axios.get(
        `https://67a21f98409de5ed5254601b.mockapi.io/animals/${id}`
      );

      if (res.status === 200) {
        setSelectedItem(res.data);
        // console.log(selectedItem);
      } else {
        setError("Something Went Wrong");
      }
    } catch {
      setError("Something Went Wrong");
    }
  };

  return (
    <AnimailContext.Provider
      value={{
        data,
        fetchAnimalsData,
        fetchAnimalDataById,
        selectedItem,
        error,
      }}
    >
      {children}
    </AnimailContext.Provider>
  );
};

export const useAnimalData = () => {
  return useContext(AnimailContext);
};
