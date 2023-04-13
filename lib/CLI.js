const inquirer = require("inquirer");
const { Triangle, Square, Circle } = require("./shapes.js") 

class CLI {
  runPrompts() {
    inquirer.prompt([
      {
        type: "list",
        message: "What shape would you like your image to have?",
        name: "shapes",
        choices: ["square", "triangle", "circle"],
      },
      {
        type: "list",
        message: "What color do you want this shape to be?",
        name: "shapecolorChoice",
        choices: ["Red, Orange, White, Black, Green, Blue, Pink"],
      },
      {
        type: "input",
        message: "Please enter text to be displayed with logo?",
        name: "text",
      },
      {
        type: "list",
        message: "What color will the text be?",
        name: "textcolor",
        choices: ["Red, Orange, White, Black, Green, Blue, Pink"],
      },
    ]).then(({ shapeChoice }) => {
      let theShape;
          switch (shapeChoice) {
            case "Triangle" :
              theShape = new Triangle();
              break;
            case "Square" :
              theShape = new Square();
              break;
            case "Circle" :
              theShape = new Circle();
            break;
          default:
            console.log("You need to pick a shape!")
          }
    console.log(theShape.render());

    });
  }
}

module.exports = new CLI();

















// export { CLI }

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
