const inquirer = require("inquirer");
const { Triangle, Square, Circle } = require("./shapes.js");
const fs = require("fs");

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
        console.log(theShape.render());
        fs.writeFile(
          "logo.svg",
          theShape.render(),
          (error) => error,
          console.log("Generated logo.svg!")
        );
      })
  }
};

module.exports = new CLI();

