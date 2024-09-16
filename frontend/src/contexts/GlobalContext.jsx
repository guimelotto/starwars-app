/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import axios from "axios";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  const doSearch = async (searchType, searchTerm) => {
    try {
      setIsloading(true);
      const { data } = await axios.get(
        `http://localhost:3000/${searchType}/search?name=${searchTerm}`
      );
      setSearchResults(data);
      setIsloading(false);
    } catch (error) {
      console.error(error);
      setIsloading(false);
    }
  };

  const getDetail = async (id, type) => {
    try {
      setIsloading(true);
      const { data } = await axios.get(`http://localhost:3000/${type}/${id}`);
      setIsloading(false);
      return data;
    } catch (error) {
      console.error(error);
      setIsloading(false);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        searchResults,
        setSearchResults,
        isLoading,
        setIsloading,
        doSearch,
        getDetail,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobal = () => {
  return useContext(GlobalContext);
};

export { GlobalProvider, useGlobal };
