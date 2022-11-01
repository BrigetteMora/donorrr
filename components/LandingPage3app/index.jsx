import React from "react";
import FeaturesUi2ebook from "../FeaturesUi2ebook";
import "./LandingPage3app.css";

function LandingPage3app(props) {
  const {
    navbarNav,
    link,
    btnText1,
    btnText2,
    h1Headline1,
    h4SubHeadline1,
    btnText3,
    btnText4,
    vote,
    h2SectionTitle,
    paragraph,
    untitledDesign31,
    h1Headline2,
    h4SubHeadline2,
    btnText5,
    madeWithLoveByFi,
    featuresUi2ebookProps,
  } = props;

  return (
    <div className="landing-page-3-app screen">
      <div className="header-2-darkapp-1">
        <div className="navbar-style-2-navbar-light-1">
          <img className="icon-mylogo" src="/img/icon-mylogo@2x.svg" alt="icon mylogo" />
          <div className="navbar-container">
            <div className="navbar-toggler-1"></div>
            <div className="collapse-navbar-collapse-1">
              <div className="overlap-group-1">
                <img className="navbar-nav" src={navbarNav} alt="navbar-nav" />
                <div className="link link">{link}</div>
              </div>
              <div className="navbar-nav-1">
                <div className="nav-item">
                  <div className="a">
                    <div className="btn-text link">{btnText1}</div>
                  </div>
                </div>
                <div className="nav-item-1">
                  <div className="buttonbtnprimary-color">
                    <div className="btn-text-1 link">{btnText2}</div>
                    <img
                      className="icn-arrow-right-icn-xs"
                      src="/img/icn-arrow-right--icn-xs@2x.svg"
                      alt="icn arrow-right .icn-xs"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlap-group2-1">
          <div className="container-fluid-1">
            <div className="row-3">
              <div className="col-md-6-2">
                <p className="h1-headline-2 roboto-normal-mine-shaft-48px">{h1Headline1}</p>
                <p className="h4-sub-headline-2 roboto-normal-sonic-silver-20px">{h4SubHeadline1}</p>
                <div className="cta-2">
                  <div className="button-md">
                    <div className="btn-text-2 link">{btnText3}</div>
                  </div>
                  <div className="button-md-1">
                    <div className="btn-text-3 link">{btnText4}</div>
                  </div>
                </div>
              </div>
              <div className="col-md-6-3"></div>
            </div>
          </div>
          <img className="vote-3" src={vote} alt="Vote" />
        </div>
      </div>
      <FeaturesUi2ebook className={featuresUi2ebookProps.className} />
      <div className="cta-ui-2app-1">
        <div className="overlap-group5-1">
          <div className="container-4">
            <div className="row-4">
              <div className="col-md-5-1">
                <p className="h2-section-title-9 roboto-normal-ebony-clay-40px">{h2SectionTitle}</p>
                <p className="paragraph-1">{paragraph}</p>
              </div>
            </div>
          </div>
          <img className="untitled-design-3-1-1" src={untitledDesign31} alt="Untitled design (3) 1" />
        </div>
      </div>
      <div className="cta-ui-s25-dark-1">
        <div className="container-5">
          <div className="row-5">
            <div className="main-content-1">
              <p className="h1-headline-3 roboto-normal-white-40px">{h1Headline2}</p>
              <p className="h4-sub-headline-3 roboto-normal-white-14px">{h4SubHeadline2}</p>
              <div className="cta-3">
                <div className="button-md">
                  <img className="btn-text-4" src={btnText5} alt="btn-text" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-ui-1ebook">
        <div className="div">
          <div className="container-6">
            <div className="row-6">
              <div className="col-md-6-4">
                <p className="made-with-love-by-fi link">{madeWithLoveByFi}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage3app;
