import { useState } from "react";
import "./SearchBox.css";
import { useGlobal } from "../contexts/GlobalContext";

const SearchBox = () => {
  const { doSearch, isLoading } = useGlobal();

  const [searchType, setSearchType] = useState("people");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTypeChange = (event) => {
    setSearchType(event.target.value);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    doSearch(searchType, searchTerm);
  };

  return (
    <div className="p-4 m-4 border rounded bg-white shadow-sm searchContainer">
      <h6 className="mb-3">What are you searching for?</h6>
      <div className="mb-3">
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="searchType"
            id="people"
            value="people"
            checked={searchType === "people"}
            onChange={handleSearchTypeChange}
            disabled={isLoading}
          />
          <label className="form-check-label fw-bold" htmlFor="people">
            People
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="searchType"
            id="films"
            value="films"
            checked={searchType === "films"}
            onChange={handleSearchTypeChange}
            disabled={isLoading}
          />
          <label className="form-check-label fw-bold" htmlFor="films">
            Movies
          </label>
        </div>
      </div>
      <input
        type="text"
        className="form-control mb-3 textInput"
        placeholder={
          searchType === "people"
            ? "e.g. Chewbacca, Yoda, Boba Fett"
            : "e.g. A New Hope, The Empire Strikes Back"
        }
        value={searchTerm}
        disabled={isLoading}
        onChange={handleSearchTermChange}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            handleSearch();
          }
        }}
      />
      <button
        className="btn btn-secondary w-100 customButton"
        disabled={searchTerm.length === 0 || isLoading}
        onClick={handleSearch}
      >
        {isLoading ? "SEARCHING..." : "SEARCH"}
      </button>
    </div>
  );
};

export default SearchBox;
