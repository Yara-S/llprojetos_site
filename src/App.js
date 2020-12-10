import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line




import EventLandingPage from "demos/EventLandingPage.js";



export default function App() {
  // return <AnimationRevealPage disabled></AnimationRevealPage>;
  return (
    <EventLandingPage />
  );
}

