import React from "react";
import Button from "../Button";
import Tabs from "../Tabs";
import FeaturesUi2ebook from "../FeaturesUi2ebook";
import Button2 from "../Button2";
import "./Index.css";

function Index(props) {
  const {
    donorrr22,
    donorrr21,
    h1Headline1,
    h4SubHeadline1,
    vote,
    h2SectionTitle,
    paragraph,
    untitledDesign31,
    h1Headline2,
    h4SubHeadline2,
    buttonProps,
  } = props;

  return (
    <div className="index screen">
      <div className="header-2-darkapp">
        <div className="overlap-group1">
          <div className="navbar-style-2-navbar-light">
            <div className="collapse-navbar-collapse">
              <div className="overlap-group">
                <Button />
                <Tabs />
              </div>
            </div>
            <div className="navbar-toggler"></div>
          </div>
          <img className="donorrr-2-2" src={donorrr22} alt="donorrr (2) 2" />
        </div>
        <div className="overlap-group2">
          <div className="container-fluid">
            <div className="row">
              <img className="donorrr-2-1" src={donorrr21} alt="donorrr (2) 1" />
              <div className="col-md-6">
                <h1 className="h1-headline roboto-normal-mine-shaft-48px">{h1Headline1}</h1>
                <p className="h4-sub-headline roboto-normal-sonic-silver-20px">{h4SubHeadline1}</p>
                <div className="cta"></div>
                <Button className={buttonProps.className} />
              </div>
              <div className="col-md-6-1"></div>
            </div>
          </div>
          <img className="vote" src={vote} alt="Vote" />
        </div>
      </div>
      <FeaturesUi2ebook />
      <div className="cta-ui-2app">
        <div className="overlap-group5">
          <div className="container">
            <div className="row-1">
              <div className="col-md-5">
                <p className="h2-section-title roboto-normal-ebony-clay-40px">{h2SectionTitle}</p>
                <p className="paragraph">{paragraph}</p>
              </div>
            </div>
          </div>
          <img className="untitled-design-3-1" src={untitledDesign31} alt="Untitled design (3) 1" />
        </div>
      </div>
      <div className="cta-ui-s25-dark">
        <div className="container-1">
          <div className="row-2">
            <div className="main-content">
              <p className="h1-headline-1 roboto-normal-white-40px">{h1Headline2}</p>
              <p className="h4-sub-headline-1 roboto-normal-white-14px">{h4SubHeadline2}</p>
              <div className="cta-1">
                <Button2 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
