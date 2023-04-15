import { Triangle, Square, Circle } from "lib/shapes.js";

describe("Shapes", () => {
  describe("Triangle", () => {
    it("should return a svg poly points string of code", () => {
      const triangle = new Triangle("colorChoice");
      const renderSVG = triangle.render();
      expect(renderSVG).toEqual(triangle);
    });
  });

  describe("Square", () => {
    it("should return a svg rectangle string of code", () => {
      const square = new Square("colorChoice");
      const renderSVG = square.render();
      expect(renderSVG).toEqual(square);
    });
  });

  describe("Circle", () => {
    it("should return a svg circle string of code", () => {
      const circle = new Circle("colorChoice");
      const renderSVG = circle.render();
      expect(renderSVG).toEqual(circle);
    });
  });
});
