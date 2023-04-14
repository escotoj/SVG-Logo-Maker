import CLI from './lib/CLI.js';

// const CLI = require('./lib/CLI.js')

CLI.runPrompts();
















// const fs = require('fs')

// include the shapes js and is later called
// import generateShapes from './lib/shapes.js'

// const generateShapes = require();



// inquirer
//   .prompt([
//     {
//       type: "input",
//       message: "Please enter text to be displayed with logo?",
//       name: "text",
//     },
//     {
//       type: "input",
//       message: "What color will the text be?",
//       name: "textcolor",
//     },
//     {
//       type: "list",
//       message: "What shape would you like your image to have?",
//       name: "shapes",
//       choices: ["square", "triangle", "circle"],
//     },
//     {
//       type: "input",
//       message: "What color do you want this shape to be?",
//       name: "shapecolor",
//     },
//   ])
//   .then((answers) => {
//     console.log(answers);
//     const svg = document.querySelector("svg");
//     const svgns = "http://www.w3.org/2000/svg";
//     const svgImg = generateShapes(answers); // create function for template
//     let square = document.createElementNS(svgns, "rect");
//     square.setAttribute("x", "150");
//     square.setAttribute("y", "150");
//     square.setAttribute("width", "100");
//     square.setAttribute("height", "100");
//     square.setAttribute("fill", "#5cceee");
//     fs.writeFile(
//       "logo.svg",
//       svgImg,
//       (error) => error,
//       console.log("Generated logo.svg!"),
//       svg.appendChild(square), 
//     );
//   });




// ____________ renders svg, has a for-loop and does so with only circles, does not use inquirer. ________________________
// let centerX = 15
// let centerY = 15
// let radius = 10
// let style = "fill:rgb(200,200,255);"

// const fs = require('fs')

// let svg = ""
// svg += '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n'
// svg += '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n'
// svg += '<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">\n'

// for (let x = 0; x < 12; x++) {
//     svg += `\t<circle cx="${centerX+(x*((radius*2)+5))}" cy="${centerY}" r="${radius}" style="${style}"/>\n`
// }

// svg += '</svg>'

// fs.writeFile('testSVG.svg', svg, (err) => {
//     // throws an error, you could also catch it here
//     if (err) throw err;

//     // success case, the file was saved
//     console.log('SVG written!');
// });

// ------------ THIS IS HOW THE ANSWERS ARE INJECTED, using if else
// return `<circle cx="150" cy="100" r="80" fill="${this.color}" /
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------

// const inquirer = require('inquirer')
// const fs = require('fs')
// const CLI = require('./lib/CLI');
