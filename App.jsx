import "./App.css";
import * as MuiMaterial from "@mui/material";
import * as Antd from "antd";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Index from "./components/Index";
import LandingPage3app from "./components/LandingPage3app";

function App() {
  return (
    <Antd.ConfigProvider>
      <MuiMaterial.ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/:path(|index)">
              <Index {...indexData} />
            </Route>
            <Route path="/landing-page-3-app">
              <LandingPage3app {...landingPage3appData} />
            </Route>
          </Switch>
        </Router>
      </MuiMaterial.ThemeProvider>
    </Antd.ConfigProvider>
  );
}

export default App;
const theme = MuiMaterial.createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#9c27b0",
    },
    error: {
      main: "#d32f2f",
    },
    warning: {
      main: "#ed6c02",
    },
    info: {
      main: "#0288d1",
    },
    success: {
      main: "#2e7d32",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
    },
  },
  typography: {
    fontSize: 14,
  },
  shape: {
    borderRadius: 4,
  },
});
Antd.ConfigProvider.config({
  theme: {
    primaryColor: "#1890ff",
    secondaryColor: "#1890ff",
    successColor: "#52c41a",
    warningColor: "#faad14",
    errorColor: "#f5222d",
  },
});
const button2Data = {
    className: "button-1",
};

const indexData = {
    donorrr22: "/img/donorrr--2--2@2x.png",
    donorrr21: "/img/donorrr--2--1@2x.png",
    h1Headline1: <React.Fragment>F*ck shady superpacs <br />We have power to change minds too!</React.Fragment>,
    h4SubHeadline1: "Donorrr's mission is to make political  lobbying more accessible, transparent, and accountable.",
    vote: "/img/vote@1x.png",
    h2SectionTitle: "Then we take care of the rest",
    paragraph: <React.Fragment>We will notify you when it is time to vote on the lobby firm partner<br />We will host weekly livestream updates to address concerns and questions<br />We will award badges to your profile when we obtain buy in from legislators</React.Fragment>,
    untitledDesign31: "/img/untitled-design--3--1@1x.png",
    h1Headline2: "Want to help us build the app?",
    h4SubHeadline2: "Interested in careers and or partnerships?",
    buttonProps: button2Data,
};

const featuresUi2ebook2Data = {
    className: "features-ui-2ebook-1",
};

const landingPage3appData = {
    navbarNav: "/img/navbar-nav@1x.png",
    link: "About Us",
    btnText1: "Login",
    btnText2: "Become a Donorrr",
    h1Headline1: <React.Fragment>F*ck shady superpacs <br />We have power to change minds too!</React.Fragment>,
    h4SubHeadline1: "Donorrr's mission is to make political  lobbying more accessible, transparent, and accountable.",
    btnText3: "Try Now",
    btnText4: "Learn More",
    vote: "/img/vote@1x.png",
    h2SectionTitle: "Then we take care of the rest",
    paragraph: <React.Fragment>We will notify you when it is time to vote on the lobby firm partner<br />We will host weekly livestream updates to address concerns and questions<br />We will award badges to your profile when we obtain buy in from legislators</React.Fragment>,
    untitledDesign31: "/img/untitled-design--3--1@1x.png",
    h1Headline2: "Want to help us build the app?",
    h4SubHeadline2: "Interested in careers and or partnerships?",
    btnText5: "/img/btn-text@1x.png",
    madeWithLoveByFi: "Made With Love By Figmaland All Right Reserved",
    featuresUi2ebookProps: featuresUi2ebook2Data,
};

