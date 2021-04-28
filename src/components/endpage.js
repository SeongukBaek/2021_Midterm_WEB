import React from "react";
import "./endpage.css";
import queryString from "query-string";

const endpage = ({ location, history }) => {
  const q = queryString.parse(location.search).success;
  console.log(q);
  return (
    <div>
      <img src="s.png" className="result_img" alt="result"></img>
      <div>
        <button
          className="homebtn"
          onClick={() => {
            history.push("/");
          }}
        >
          Go Home
        </button>
      </div>
      <br></br>
      <button
        className="againbtn"
        onClick={() => {
          history.push("/problems");
        }}
      >
        Complete My Computer Again!
      </button>
    </div>
  );
};

export default endpage;
