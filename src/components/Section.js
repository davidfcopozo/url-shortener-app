import React, { useState } from "react";
import workingIllustration from "../assets/illustration-working.svg";
import brandRecognition from "../assets/icon-brand-recognition.svg";
import detailedRecords from "../assets/icon-detailed-records.svg";
import fullyCustomizable from "../assets/icon-fully-customizable.svg";
import Input from "../components/Input";
import ShortenedLinks from "./ShortenedLinks";

const Section = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="sections">
      <section className="fist-section">
        <div className="text-section">
          <h2>More than just shorter links</h2>
          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <a href="#">Get Started</a>
        </div>
        <div className="img-section">
          <img src={workingIllustration} alt="Working person illustration" />
        </div>
      </section>
      <Input setInputValue={setInputValue} />

      <section className="second-section">
        <ShortenedLinks inputValue={inputValue} />
        <div className="text-section">
          <h2>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="img-section">
          <div className="line"></div>
          <figure className="figure1">
            <div>
              <img src={brandRecognition} alt="" />
            </div>
            <figcaption>
              <h3>Brand Recognition</h3>
              <p>
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </figcaption>
          </figure>

          <figure className="figure2">
            <div>
              <img src={detailedRecords} alt="" />
            </div>
            <figcaption>
              <h3>Detailed Records</h3>
              <p>
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </figcaption>
          </figure>

          <figure className="figure3">
            <div>
              <img src={fullyCustomizable} alt="" />
            </div>
            <figcaption>
              <h3>Fully Customizable</h3>
              <p>
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </figcaption>
          </figure>
        </div>
        <div className="boost">
          <h3>Boots your links today</h3>
          <a href="#">Get Started</a>
        </div>
      </section>
    </div>
  );
};

export default Section;
