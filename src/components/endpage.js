import React from "react";
import "./endpage.css";
import queryString from "query-string";
import success from "../images/s.png";
import fail from "../images/f.png";

const Endpage = ({ location, history }) => {
  const q = queryString.parse(location.search).success;
  const c = queryString.parse(location.search).correct;
  console.log(q, c);
  const str = {
    content: "",
  };
  if (c === "7") {
    str.content = str.content + "Congraduation !!!";
  } else {
    str.content = str.content + "# of your parts is " + c + " ...";
  }
  return (
    <div>
      <h1 className={q === "1" ? "result_s" : "result_f"}>{str.content}</h1>
      <img
        src={q === "1" ? success : fail}
        className="result_img"
        alt="result"
      ></img>
      <div>
        <button
          className="homebtn"
          onClick={() => {
            history.push("/2021_Midterm_WEB/");
          }}
        >
          Go Home
        </button>
      </div>
      <br></br>
      <button
        className="againbtn"
        onClick={() => {
          history.push("/2021_Midterm_WEB/problems");
        }}
      >
        Complete My Computer Again!
      </button>
    </div>
  );
};

export default Endpage;
