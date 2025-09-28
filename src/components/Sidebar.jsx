import React from "react";

export default function Sidebar() {
  return (
    <section className="main-two">
      <div style={{ border: "none", flexGrow: 1, marginTop: "20px" }}>
        <p style={{ fontWeight: "bold" }}>Category</p>
        <br />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            rowGap: "10px",
            fontWeight: 450,
          }}
        >
          <p><input type="checkbox" /> People</p><br />
          <p><input type="checkbox" /> Premium</p><br />
          <p><input type="checkbox" /> Pets</p><br />
          <p><input type="checkbox" /> Food</p><br />
          <p><input type="checkbox" /> Landmarks</p><br />
          <p><input type="checkbox" /> Cities</p><br />
          <p><input type="checkbox" /> Nature</p><br />
          <hr style={{ width: "30%", marginLeft: "30px", transform: "translateX(-30px)" }} />
        </div>

        <p style={{ fontWeight: "bold", marginTop: "20px" }}>Price Range</p>
        <br />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            rowGap: "10px",
            fontWeight: 450,
          }}
        >
          <p><input type="checkbox" /> Lower than $20</p><br />
          <p><input type="checkbox" /> $20 - $100</p><br />
          <p><input type="checkbox" /> $100 - $200</p><br />
          <p><input type="checkbox" /> More than $200</p>
        </div>
      </div>
    </section>
  );
}
