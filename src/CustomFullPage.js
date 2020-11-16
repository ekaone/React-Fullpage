// import React, { useState } from "react";
// import ReactFullpage from "@fullpage/react-fullpage";

// function CustomFullPage() {

// const originalColors = ['#ff5f45', '#0798ec', '#fc6c7c', '#435b71', 'orange', 'blue', 'purple', 'yellow'];

// const [fullpages, setfullpages] = useState([
//   {
//     text: 'Section 1',
//   },
//   {
//     text: 'Section 2',
//   },
//   {
//     text: 'Section 3',
//   }
// ])
// const [ sectionsColor, setSectionColor ] = useState(originalColors)

// handleChangeColors() {
//   const newColors =
//     sectionsColor[0] === 'yellow'
//       ? [...originalColors]
//       : ['yellow', 'blue', 'white'];
//   setSectionColor({sectionsColor: newColors,});
// }

// handleAddSection() {
//   setfullpages(state => {
//     const { fullpages } = state;
//     const { length } = fullpages;
//     fullpages.push({
//       text: `section ${length + 1}`,
//       id: Math.random(),
//     });

//     return {
//       fullpages: [...fullpages],
//     };
//   });
// }

// handleRemoveSection() {
//   this.setState(state => {
//     const { fullpages } = state;
//     const newPages = [...fullpages];
//     newPages.pop();

//     return { fullpages: newPages };
//   });
// }

// moveSectionDown() {
//   window.fullpage_api.moveSectionDown();
// }

//   return <div></div>;
// }

// export default CustomFullPage;
