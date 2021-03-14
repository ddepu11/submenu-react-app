import React from "react";

export default function Hero() {
  return (
    <main className="hero" style={{ background: "url('bg.jpg')" }}>
      <aside>
        <h5>Buy a footlong get one</h5>
        <h1>50% off</h1>
        <h6>Order online with code BOGO50</h6>
        <button>Order Now</button>
        <span>
          50% off sub of equal/lesser price. Extras addt'l. Select shops.
          App/online only
          <br />1 use. No addt'l discounts. No delivery. Exp 4/14/21.
        </span>
      </aside>
    </main>
  );
}
