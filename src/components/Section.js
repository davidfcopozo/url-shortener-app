import React, { useState, useEffect } from "react";
import workingIllustration from "../assets/illustration-working.svg";
import brandRecognition from "../assets/icon-brand-recognition.svg";
import detailedRecords from "../assets/icon-detailed-records.svg";
import fullyCustomizable from "../assets/icon-fully-customizable.svg";
import Input from "../components/Input";
import { useFetch } from "../hooks/useFetch";

const Section = () => {
  const [value, setValue] = useState();
  const [data, loading, error] = useFetch(
    `https://api.shrtco.de/v2/shorten?url=${value}`
  );

  useEffect(() => {
    console.log(value);
    console.log(data);
    console.log(error);
    async function renderLink() {
      let links = await data;
      console.log(links);
    }
    renderLink();
  }, [value]);

  //console.log(document.getElementById("link").value);
  return (
    <>
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
          <img src="" alt="" />
        </div>
      </section>

      <div class="input-container">
        <Input setValue={setValue} />
      </div>

      <section className="second-section">
        <div className="text-section">
          <h2>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="img-section">
          <figure>
            <img src={brandRecognition} alt="" />
            <figcaption>
              <h3>Brand Recognition</h3>
              <p>
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </figcaption>
          </figure>

          <figure>
            <img src={detailedRecords} alt="" />
            <figcaption>
              <h3>Detailed Records</h3>
              <p>
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </figcaption>
          </figure>

          <figure>
            <img src={fullyCustomizable} alt="" />
            <figcaption>
              <h3>Fully Customizable</h3>
              <p>
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </figcaption>
          </figure>
          <div class="boots">
            <h3>Boots your links today</h3>
            <a href="#">Get Started</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
