import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Pages from "./Pages";

const PageDetail = () => {
  return (
    <div className="main">
      <Pages />
      <Link to="/">
        {" "}
        <button className="mybutton">Go Home</button>{" "}
      </Link>
      <Footer />
    </div>
  );
};

export default PageDetail;
