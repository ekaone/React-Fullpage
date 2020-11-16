import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

const Menu = ({
  moveDown,
  moveToSection1,
  moveToSection2,
  moveToSection3,
  moveToSection4
}) => (
  <div
    className="menu"
    style={{
      position: "fixed",
      top: 0,
      zIndex: 100,
      backgroundColor: "indigo",
      width: "100vw",
      opacity: 0.7,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    <ul class="actions" style={{ listStyle: "none" }}>
      <li>
        <button onClick={moveToSection1}>Move to Section 1 Top</button>
        <button onClick={moveToSection2}>Move to Section 2</button>
        <button onClick={moveToSection3}>Move to Section 3</button>
        <button onClick={moveToSection4}>Move to Section 4</button>
        <button onClick={moveDown}>Move Section Down</button>
      </li>
    </ul>
  </div>
);

const Footer = () => (
  <div
    style={{
      position: "fixed",
      bottom: 0,
      zIndex: 100,
      backgroundColor: "indigo",
      width: "100vw",
      opacity: 0.7,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    Copyright {new Date().getFullYear()}
  </div>
);

function BasicFullPage() {
  return (
    <>
      <Menu
        moveDown={() => window.fullpage_api.moveSectionDown()}
        moveToSection4={() => window.fullpage_api.moveTo("section4")}
        moveToSection3={() => window.fullpage_api.moveTo("section3")}
        moveToSection2={() => window.fullpage_api.moveTo("section2")}
        moveToSection1={() => window.fullpage_api.moveTo(1)}
      />
      <ReactFullpage
        //fullpage options
        scrollingSpeed={1000} /* Options here */
        licenseKey=""
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <p>Section 1 (welcome to fullpage.js)</p>
                <button onClick={() => fullpageApi.moveSectionDown()}>
                  Click me to move down
                </button>
              </div>
              <div
                className="section"
                data-anchor="section2"
                style={{
                  background: "linear-gradient(180deg, #f08, #d0e)"
                }}
              >
                <p>Section 2</p>
              </div>
              <div
                className="section"
                data-anchor="section3"
                style={{ backgroundColor: "aqua" }}
              >
                <p>Section 3</p>
                <p>Section 3</p>
                <p>Section 3</p>
                <p>Section 3</p>
                <p>Section 3</p>
              </div>
              <div
                className="section"
                data-anchor="section4"
                style={{ backgroundColor: "chocolate" }}
              >
                <p>
                  <div className="slide"> Slide 1 </div>
                  <div className="slide"> Slide 2 </div>
                  <div className="slide"> Slide 3 </div>
                  <div className="slide"> Slide 4 </div>
                </p>
              </div>
              <div className="section">Section 5</div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
      <Footer />
    </>
  );
}

export default BasicFullPage;
