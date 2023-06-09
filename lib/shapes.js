
class Shapes {
    constructor() {
    this.shapeColor = null;
    this.shapeText = null;
    this.textColor = null;
    }

    setShapeColor (colorChoice) {
        this.shapeColor = colorChoice;
    }
    setText (shapeText) { 
        this.shapeText = shapeText;
    }
    setTextColor (textColor) { // 
        this.textColor = textColor;
    }
}

class Triangle extends Shapes {
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.shapeText}</text></svg>`
    }
}

class Square extends Shapes {

    render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <rect x="50" height="220" width="220" fill="${this.shapeColor}"/> <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.shapeText}</text> </svg>`; 
    }
}

class Circle extends Shapes {

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/> <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.shapeText}</text></svg>`; 
    }
}

// const theShape = new Shapes();
// theShape.setShapeColor("shapeChoice");
// console.log(theShape)
// theShape.setShapeColor(shapeText)

module.exports = { Triangle, Square, Circle };
// export default new Shapes();













// // have a funtion that fires from an argument from the prompt js
// // include these functions in a class that includes all the shapes 
// // // class shapes {

// // }

// // ---------- SQUARE ______
// const svg = document.querySelector("svg");


// const svgns = "http://www.w3.org/2000/svg";

// // class shapes = {}
// let square = document.createElementNS(svgns, "rect");

// square.setAttribute("x", "150");
// square.setAttribute("y", "150");
// square.setAttribute("width", "100");
// square.setAttribute("height", "100");
// square.setAttribute("fill", "#5cceee");

// svg.appendChild(square);

// // ---------- CIRCLE ______
// let circle = document.createElementNS(svgns, "circle");

// circle.setAttribute("cx", "150");
// circle.setAttribute("cy", "150");
// circle.setAttribute("r", "150");
// triangle.setAttribute("fill", "#5cceee");

// svg.appendChild(circle);

// // ---------- TRIANGLE  ______
// let triangle = document.createElementNS(svgns, "polygon");

// triangle.setAttribute("x", "150");
// triangle.setAttribute("y", "75, 75");
// triangle.setAttribute("fill", "#5cceee");

// svg.appendChild(triangle);


// // -------------- TEXT ----------- // 

// let text = document.createElementNS(svgns, "text");

// text.setAttribute("x", "150");
// text.setAttribute("y", "125");
// text.setAttribute("font-size", "60");
// text.setAttribute("text-anchor", "middle");
// text.setAttribute("fill", "black");

// svg.appendChild(text);
