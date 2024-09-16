import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function ResultItem({ item }) {
  const navigate = useNavigate();

  const doNavigate = () => {
    navigate(`/${item.type}/${item.id}`);
  };
  return (
    <>
      <div className="row">
        <div className="col m-auto">
          <p className="fw-bold fs-6 m-0">{item.name}</p>
        </div>
        <div className="col-auto">
          <button
            className="btn btn-sm btn-secondary customButton"
            onClick={doNavigate}
          >
            SEE DETAILS
          </button>
        </div>
      </div>
      <hr />
    </>
  );
}
