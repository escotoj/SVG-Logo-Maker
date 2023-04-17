const { Triangle, Square, Circle } = require("./shapes.js");

describe("Shapes", () => {
  describe("Triangle", () => {
    it("should return a svg poly points string of code", () => {
      const triangle = new Triangle();
      triangle.setShapeColor("blue");
      triangle.setText("SVG");
      triangle.setTextColor("red");
      const renderSVG = triangle.render();
      expect(renderSVG).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="blue"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">SVG</text></svg>`);
    });

    it("should return a svg poly points string of code", () => {
        // Creating a new instance of our triangle
        const triangle = new Triangle();
        // Using the setText method
        triangle.setText("SVG");
        // Testing that the setText method set the text to what we passed as a parameter
        expect(triangle.shapeText).toEqual("SVG");
      });
      //setShapeColor
    it("should return a color of blue", () => {
        // Creating a new instance of our triangle
        const triangle = new Triangle();
        // Using the setText method
        triangle.setShapeColor("blue");
        // Testing that the setText method set the text to what we passed as a parameter
        expect(triangle.shapeColor).toEqual("blue");
      });
    //setTextColor
    it("should return a color of red", () => {
        // Creating a new instance of our triangle
        const triangle = new Triangle();
        // Using the setText method
        triangle.setTextColor("red");
        // Testing that the setText method set the text to what we passed as a parameter
        expect(triangle.textColor).toEqual("red");
      });  
      
  });

// SQUARE //

  describe("Square", () => {
    it("should return a svg rectangle string of code", () => {
      const square = new Square();
      square.setShapeColor("blue");
      square.setText("SVG");
      square.setTextColor("red");
      const renderSVG = square.render();
      expect(renderSVG).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <rect x="50" height="220" width="220" fill="blue"/> <text x="150" y="125" font-size="60" text-anchor="middle" fill="red">SVG</text> </svg>`);
    });
    it("should return a svg poly points string of code", () => {
        const square = new Square();
        square.setText("SVG");
        expect(square.shapeText).toEqual("SVG");
      });
      //setShapeColor
    it("should return a color of blue", () => {
        const square = new Square();
        square.setShapeColor("blue");
        expect(square.shapeColor).toEqual("blue");
      });
    //setTextColor
    it("should return a color of red", () => {
        const square = new Square();
        square.setTextColor("red");
        expect(square.textColor).toEqual("red");
      });  
  });

  describe("Circle", () => {
    it("should return a svg circle string of code", () => {
      const circle = new Circle();
      circle.setShapeColor("blue");
      circle.setText("SVG");
      circle.setTextColor("red");
      const renderSVG = circle.render();
      expect(renderSVG).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <circle cx="150" cy="100" r="80" fill="blue"/> <text x="150" y="125" font-size="60" text-anchor="middle" fill="red">SVG</text></svg>`);
    });
    it("should return a svg circle string of code", () => {
        const circle = new Circle();
        circle.setText("SVG");
        expect(circle.shapeText).toEqual("SVG");
      });
    it("should return a color of blue", () => {
        const circle = new Circle();
        circle.setShapeColor("blue");
        expect(circle.shapeColor).toEqual("blue");
      });
    it("should return a color of red", () => {
        const circle = new Circle();
        circle.setTextColor("red");
        expect(circle.textColor).toEqual("red");
      });  
  });
});
