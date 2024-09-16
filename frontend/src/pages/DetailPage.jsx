/* eslint-disable react/prop-types */
import "./DetailPage.css";
import { useNavigate, useParams } from "react-router-dom";
import { useGlobal } from "../contexts/GlobalContext";
import { useEffect, useState } from "react";

export default function DetailPage({ type }) {
  const { id } = useParams();
  const { getDetail } = useGlobal();
  const navigate = useNavigate();

  const [details, setDetails] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await getDetail(id, type);
      if (!data) setIsError(true);
      else setDetails(data);
    };
    fetchDetails();
  }, []);

  const doGoBack = () => {
    navigate("/");
  };

  return (
    <div className="m-4 p-4 border shadow-sm rounded bg-white detailContainer">
      {!details && !isError && (
        <div className="row">
          <div className="col">
            <p className="text-center mt-5">Loading...</p>
          </div>
        </div>
      )}
      {!details && isError && (
        <div className="row">
          <div className="col">
            <p className="text-center mt-5">
              We are sorry, but we could not find the requested{" "}
              {type.slice(0, -1)}
            </p>
          </div>
        </div>
      )}
      {type === "people" && details && (
        <>
          <div className="row mb-3">
            <h5 className="fw-bold">{details.name}</h5>
          </div>
          <div className="row">
            <div className="col">
              <h6 className="fw-bold">Details</h6>
              <hr />
              <p>
                <span>Birth Year:</span> {details.birth_year}
              </p>
              <p>
                <span>Gender:</span> {details.gender}
              </p>
              <p>
                <span>Eye Color:</span> {details.eye_color}
              </p>
              <p>
                <span>Hair Color:</span> {details.hair_color}
              </p>
              <p>
                <span>Height:</span> {details.height}
              </p>
              <p>
                <span>Mass:</span> {details.mass}
              </p>
            </div>
            <div className="col">
              <h6 className="fw-bold">Movies</h6>
              <hr />
            </div>
          </div>
        </>
      )}
      {type === "films" && details && (
        <>
          <div className="row mb-3">
            <h5 className="fw-bold">{details.title}</h5>
          </div>
          <div className="row">
            <div className="col">
              <h6 className="fw-bold">Opening Crawl</h6>
              <hr />
              <p className="crawl">{details.opening_crawl}</p>
            </div>
            <div className="col">
              <h6 className="fw-bold">Characters</h6>
              <hr />
            </div>
          </div>
        </>
      )}
      <div className="row mt-5">
        <div className="col-auto">
          <button
            className="btn btn-sm btn-secondary customButton"
            onClick={doGoBack}
          >
            BACK TO SEARCH
          </button>
        </div>
      </div>
    </div>
  );
}
