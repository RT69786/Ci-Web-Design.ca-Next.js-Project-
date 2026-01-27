"use client";

import React from "react";
import "./_main05.scss";
import SmallBox from "../SmallBox/SmallBox";

const Main05 = () => {
  return (
    <div className="main05">
      <section className="for-center-main05">
        <div className="div-ten">
          <h2>Some of our recent projects</h2>
        </div>
        <div className="div-eleven">
          <div className="box-one">
            <SmallBox
              imageSrc="/pics/pic1.jpg"
              title="Earth Memory"
              href="https://earthmemory.ca/"
            />
          </div>

          <div className="box-two">
            <SmallBox
              imageSrc="/pics/pic2.jpg"
              title="Habitat28"
              href="https://habitat28.com/"
            />
          </div>

          <div className="box-three">
            <SmallBox
              imageSrc="/pics/pic3.jpg"
              title="Abide Design"
              href="https://abidedesign.ca/"
            />
          </div>
        </div>

        <div className="div-twelve">
          <div className="box-one">
            <SmallBox
              imageSrc="/pics/pic19.jpg"
              title="Dave Bennett Consulting"
              href="https://www.davebennettconsulting.com/"
            />
          </div>

          <div className="box-two">
            <SmallBox
              imageSrc="/pics/pic5.jpg"
              title="Beeba Floors"
              href="https://beebafloors.ca/"
            />
          </div>

          <div className="box-three">
            <SmallBox
              imageSrc="/pics/pic6.jpg"
              title="BioCAM4"
              href="https://biocam4.com/"
            />
          </div>
        </div>

        <div className="div-thirteen">
          <div className="box-one">
            <SmallBox
              imageSrc="/pics/pic7.jpg"
              title="Youthversity"
              href="https://youthversity.com/"
            />
          </div>

          <div className="box-two">
            <SmallBox
              imageSrc="/pics/pic8.jpg"
              title="JCP Electric"
              href="https://jcpelectricltd.ca/"
            />
          </div>

          <div className="box-three">
            <SmallBox
              imageSrc="/pics/pic9.jpg"
              title="Da1RealTech"
              href="https://da1realtech.com/"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main05;
