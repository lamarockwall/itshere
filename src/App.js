
import { useEffect, useState } from "react";
import { Tooltip } from "./components/Tooltip";
import { commonConfig } from "./config/commonConfig";
import PreLoader from "./components/Preloader";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutUs from "./components/About";
import Services from "./components/Services";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Founders from "./components/Founders";
import Swr from "./components/Swr";
import ClassicHeader from "./components/ClassicHeader";
import { inject } from '@vercel/analytics';
import { dev } from '$app/environment';

function App() {
inject({ mode: dev ? 'development' : 'production' });
  const classicHeader = commonConfig.classicHeader;
  const darkTheme = commonConfig.darkTheme;

  const handleNavClick = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };

  const [scrollTopVisible, setScrollTopVisible] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setisLoading(false);
    }, 1000);
    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  const checkScrollTop = () => {
    let scrollTopBtn = document.getElementById("back-to-top");

    if (scrollTopBtn) {
      if (
        document.body.scrollTop > 400 ||
        document.documentElement.scrollTop > 400
      ) {
        setScrollTopVisible(true);
      } else {
        setScrollTopVisible(false);
      }
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", checkScrollTop);
  }

  return (
    <>
      <div
        style={{ position: "relative" }}
        className={classicHeader ? "" : "side-header"}
      >
        {isLoading && <PreLoader></PreLoader>}

        <div id="main-wrapper">
          {classicHeader ? (
            <ClassicHeader handleNavClick={handleNavClick}></ClassicHeader>
          ) : (
            <Header handleNavClick={handleNavClick}></Header>
          )}

<div id="content" role="main">
            <Home
              classicHeader={ClassicHeader}
              darkTheme={darkTheme}
              handleNavClick={handleNavClick}
            ></Home>
            <AboutUs
              classicHeader={ClassicHeader}
              darkTheme={darkTheme}
            ></AboutUs>
            <Services
              classicHeader={ClassicHeader}
              darkTheme={darkTheme}
            ></Services>
            <Resume
              classicHeader={ClassicHeader}
              darkTheme={darkTheme}
            ></Resume>
            <Founders
              classicHeader={ClassicHeader}
              darkTheme={darkTheme}
            ></Founders>
            <Portfolio
              classicHeader={ClassicHeader}
              darkTheme={darkTheme}
            ></Portfolio>
            <Testimonials
              classicHeader={ClassicHeader}
              darkTheme={darkTheme}
            ></Testimonials>
            <Contact
              classicHeader={ClassicHeader}
              darkTheme={darkTheme}
            ></Contact>
            <Swr
              classicHeader={ClassicHeader}
              darkTheme={darkTheme}
            ></Swr>
          </div>
          <Footer
            classicHeader={ClassicHeader}
            darkTheme={darkTheme}
            handleNavClick={handleNavClick}
          ></Footer>
        </div>
        {/* back to top */}
        <Tooltip text="Back to Top" placement="left">
          <span
            id="back-to-top"
            className="rounded-circle"
            style={{ display: scrollTopVisible ? "inline" : "none" }}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <i className="fa fa-chevron-up"></i>
          </span>
        </Tooltip>
      </div>
    </>
  );
}

export default App;

