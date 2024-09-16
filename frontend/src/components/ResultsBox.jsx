import "./ResultsBox.css";
import { useGlobal } from "../contexts/GlobalContext";
import ResultItem from "./ResultItem";

const ResultsBox = () => {
  const { isLoading, searchResults } = useGlobal();

  return (
    <div className="m-4 p-4 border shadow-sm rounded bg-white resultsContainer">
      <h5 className="fw-bold">Results</h5>
      <hr />
      <div>
        {searchResults.length === 0 && (
          <>
            {isLoading ? (
              <p className="text-center mt-5 notFoundText">Searching...</p>
            ) : (
              <p className="text-center mt-5 notFoundText">
                There are zero matches.
                <br />
                Use the form to search for People or Movies.
              </p>
            )}
          </>
        )}
        {searchResults.length > 0 && (
          <>
            {searchResults.map((result) => (
              <ResultItem key={result.id} item={result} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ResultsBox;
