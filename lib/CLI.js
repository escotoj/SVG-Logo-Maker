import inquirer from "inquirer";
import { Triangle, Square, Circle } from "./shapes.js";


class CLI {


  runPrompts() {
    inquirer.prompt([
        {
          type: "list",
          message: "What shape would you like your image to have?",
          name: "shapeChoice",
          choices: ["Square", "Triangle", "Circle"],
        },
        {
          type: "input",
          message: "What color do you want this shape to be?",
          name: "shapeColorChoice",
        },
        {
          type: "input",
          message: "Please enter text to be displayed with logo?",
          name: "shapeText",
        },
        {
          type: "input",
          message: "What color will the text be?",
          name: "textColor",
        },
      ]).then(({ shapeChoice, shapeColorChoice, shapeText, textColor }) => {
        let theShape;
        switch (shapeChoice) {
          case "Triangle":
            theShape = new Triangle();
            break;
          case "Square":
            theShape = new Square();
            break;
          case "Circle":
            theShape = new Circle();
            break;
          default:
            console.log("You need to pick a shape!");
        }
        theShape.setShapeColor(shapeColorChoice);
        theShape.setText(shapeText);
        theShape.setTextColor(textColor)
        console.log(theShape);
        // theShape.setShapeColor(shapeColorChoice);
        // theShape.setText();
        //(theShape.render())

        // fs.writeFile(
        //   "logo.svg",
        //   shape.render(),
        //   (error) => error,
        //   console.log("Generated logo.svg!")
        // );
      })
  }
};

// module.exports = { CLI };
export default new CLI();

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
