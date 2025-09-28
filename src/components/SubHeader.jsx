import React from "react";

export default function SubHeader() {
  return (
    <section className="header">
      <h3 style={{ display: "flex", flexGrow: 1 }}>
        Photography /{" "}
        <span className="sec-text" style={{ fontWeight: 300, marginLeft: "7px" }}>
          Premium Photos
        </span>
      </h3>
      <p>
        <span className="sec-text">Sort By</span> Price
      </p>
    </section>
  );
}
