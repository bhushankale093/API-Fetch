import React from "react";
import "./products.css";
function Products(Props) {
  return (
    <div
      className="card text-white mx-auto my-4 bg-danger rounded-3 p-4 min "
      style={{ maxWidth: "22rem" }}
    >
      <div className="card-header bg-dark heading">{Props.location}</div>
      <div className="card-body">
        <h5 className=" text-white">
          <span className="inline-text ">Total Confirmed Cases:</span>{" "}
          {Props.total}
        </h5>
        <h5 className=" text-white">
          <span className="inline-text ">Total Deaths:</span> {Props.deaths}
        </h5>
        <h5 className=" text-white">
          <span className="inline-text ">Discharged:</span> {Props.discharged}
        </h5>
      </div>
    </div>
    // <div
    //   className="card mx-auto my-4 bg-info rounded-3 p-4 min"
    //   style={{ width: "20 rem" }}
    // >
    //   <div className="heading">
    //     <h4 className="text-white htitle">
    //       <span className="inline-text card-text">{Props.location}</span>
    //     </h4>
    //   </div>
    //   <div className="items">
    //     <h5 className=" text-white">
    //       <span className="inline-text ">Total Confirmed Cases:</span>{" "}
    //       {Props.total}
    //     </h5>
    // <h5 className=" text-white">
    //   <span className="inline-text ">Total Deaths:</span> {Props.deaths}
    // </h5>
    // <h5 className=" text-white">
    //   <span className="inline-text ">Discharged:</span> {Props.discharged}
    // </h5>
    //   </div>
    // </div>
  );
}

export default Products;
