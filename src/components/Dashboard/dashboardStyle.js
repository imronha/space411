// // import {
// //   successColor,
// //   whiteColor,
// //   grayColor,
// //   hexToRgb,
// // } from "assets/jss/material-dashboard-react.js";
// const successColor = ["#4caf50", "#66bb6a", "#43a047", "#5cb860"];
// const whiteColor = "#FFF";
// const grayColor = [
//   "#999",
//   "#777",
//   "#3C4858",
//   "#AAAAAA",
//   "#D2D2D2",
//   "#DDD",
//   "#b4b4b4",
//   "#555555",
//   "#333",
//   "#a9afbb",
//   "#eee",
//   "#e7e7e7",
// ];
// const hexToRgb = (input) => {
//   input = input + "";
//   input = input.replace("#", "");
//   let hexRegex = /[0-9A-Fa-f]/g;
//   if (!hexRegex.test(input) || (input.length !== 3 && input.length !== 6)) {
//     throw new Error("input is not a valid hex color.");
//   }
//   if (input.length === 3) {
//     let first = input[0];
//     let second = input[1];
//     let last = input[2];
//     input = first + first + second + second + last + last;
//   }
//   input = input.toUpperCase(input);
//   let first = input[0] + input[1];
//   let second = input[2] + input[3];
//   let last = input[4] + input[5];
//   return (
//     parseInt(first, 16) +
//     ", " +
//     parseInt(second, 16) +
//     ", " +
//     parseInt(last, 16)
//   );
// };

// const dashboardStyle = {
//   successText: {
//     color: successColor[0],
//   },
//   upArrowCardCategory: {
//     width: "16px",
//     height: "16px",
//   },
//   stats: {
//     color: grayColor[0],
//     display: "inline-flex",
//     fontSize: "12px",
//     lineHeight: "22px",
//     "& svg": {
//       top: "4px",
//       width: "16px",
//       height: "16px",
//       position: "relative",
//       marginRight: "3px",
//       marginLeft: "3px",
//     },
//     "& .fab,& .fas,& .far,& .fal,& .material-icons": {
//       top: "4px",
//       fontSize: "16px",
//       position: "relative",
//       marginRight: "3px",
//       marginLeft: "3px",
//     },
//   },
//   cardCategory: {
//     color: grayColor[0],
//     margin: "0",
//     fontSize: "14px",
//     marginTop: "0",
//     paddingTop: "10px",
//     marginBottom: "0",
//   },
//   cardCategoryWhite: {
//     color: "rgba(" + hexToRgb(whiteColor) + ",.62)",
//     margin: "0",
//     fontSize: "14px",
//     marginTop: "0",
//     marginBottom: "0",
//   },
//   cardTitle: {
//     color: grayColor[2],
//     marginTop: "0px",
//     minHeight: "auto",
//     fontWeight: "300",
//     fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
//     marginBottom: "3px",
//     textDecoration: "none",
//     "& small": {
//       color: grayColor[1],
//       fontWeight: "400",
//       lineHeight: "1",
//     },
//   },
//   cardTitleWhite: {
//     color: whiteColor,
//     marginTop: "0px",
//     minHeight: "auto",
//     fontWeight: "300",
//     fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
//     marginBottom: "3px",
//     textDecoration: "none",
//     "& small": {
//       color: grayColor[1],
//       fontWeight: "400",
//       lineHeight: "1",
//     },
//   },
// };

// export default dashboardStyle;
