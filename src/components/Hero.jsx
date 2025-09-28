import React from "react";

export default function Hero() {
  return (
    <section className="main-one">
      <div className="samurai-king">
        <h3 style={{ display: "flex", flexGrow: 1 }}>Samurai King Resting</h3>
        <button className="add-to-cart">ADD TO CART</button>
      </div>

      <div>
        <img
          className="dog-image"
          src="/assets/images/dog-on-a-leash-resting-on-the-sidewalk.jpg"
          alt="Samurai King Resting"
        />
        <p className="text-over-dog">Photo of the day</p>
      </div>

      <div className="text-and-boxes">
        <section className="text-main">
          <h3>About the Samurai King Resting</h3>
          <br />
          <h3>Pets</h3>
          <br />
          <p className="sec-text">
            So how did the classical Latin become so incoherent? According
            to McClintock, a 15th-century typesetter likely scrambled part
            of Cicero's *De Finibus* in order to provide placeholder text
            to mock-up various fonts for a type specimen book. …
          </p>

          <br />
          <p className="sec-text">
            Text to mock-up various fonts for a type specimen book. So how did
            the classical Latin become so incoherent? According to McClintock.
          </p>
        </section>

        <div>
          <h3 className="text-for-small-boxes">People also buy</h3>
          <br />

          <section className="small-boxes">
            <div className="small-box">
              <img src="/assets/images/yellow-wall.jpg" width="117" height="147" alt="" />
            </div>
            <div className="small-box">
              <img src="/assets/images/peach-wall.jpg" width="117" height="147" alt="" />
            </div>
            <div className="small-box">
              <img src="/assets/images/yellow-balloon.jpg" width="117" height="147" alt="" />
            </div>
          </section>
          <br />
          <h3 className="text-for-small-boxes">Details</h3>
          <br />
          <p className="text-for-small-boxes sec-text">Size: 1020 × 1020 pixel</p>
          <br />
          <p className="text-for-small-boxes sec-text">Size: 15 mb</p>
        </div>
      </div>
    </section>
  );
}
