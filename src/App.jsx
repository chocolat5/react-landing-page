import { useEffect, useState } from "react";
import { css } from "@emotion/react";

import config from "./data/data";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/views/Hero";
import Features from "./components/views/Features";
import About from "./components/views/About";
import Service from "./components/views/Service";
import Case from "./components/views/Case";
import Result from "./components/views/Result";
import Testimonials from "./components/views/Testimonials";
import Contact from "./components/views/Contact";

const mainStyle = css`
  margin-top: 64px;
`;

function App() {
  const [siteData, setSiteData] = useState({});
  useEffect(() => {
    setSiteData(config);
  }, []);

  return (
    <div className="app">
      <Header config={siteData} />
      <main css={mainStyle}>
        <Hero config={siteData} />
        <Features config={siteData} />
        <About config={siteData} />
        <Service config={siteData} />
        <Case config={siteData} />
        <Result config={siteData} />
        <Testimonials config={siteData} />
        <Contact config={siteData} />
      </main>
      <Footer config={siteData} />
    </div>
  );
}

export default App;
