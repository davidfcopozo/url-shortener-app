import React from "react";

const Footprint = () => {
  return (
    <div className="footprint" data-testid="footprint">
      <p>
        Built by <br />
        <a
          href="https://davidfrancisco.netlify.com/"
          target="_blank"
          rel="noreferrer"
        >
          David Francisco
        </a>{" "}
        with <i class="fas fa-mug-hot"></i>
      </p>
    </div>
  );
};

export default Footprint;
