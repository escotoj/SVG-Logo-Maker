// have a funtion that fires from an argument from the prompt js
// include these functions in a class that includes all the shapes 
// // class shapes {

// }

// ---------- SQUARE ______
const svg = document.querySelector("svg");

const svgns = "http://www.w3.org/2000/svg";

let square = document.createElementNS(svgns, "rect");

square.setAttribute("x", "150");
square.setAttribute("y", "150");
square.setAttribute("width", "100");
square.setAttribute("height", "100");
square.setAttribute("fill", "#5cceee");

svg.appendChild(square);

// ---------- CIRCLE ______
let circle = document.createElementNS(svgns, "circle");

circle.setAttribute("cx", "150");
circle.setAttribute("cy", "150");
circle.setAttribute("r", "150");
triangle.setAttribute("fill", "#5cceee");

svg.appendChild(circle);

// ---------- TRIANGLE  ______
let triangle = document.createElementNS(svgns, "polygon");

triangle.setAttribute("x", "150");
triangle.setAttribute("y", "75, 75");
triangle.setAttribute("fill", "#5cceee");

svg.appendChild(triangle);


// -------------- TEXT ----------- // 

let text = document.createElementNS(svgns, "text");

text.setAttribute("x", "150");
text.setAttribute("y", "125");
text.setAttribute("font-size", "60");
text.setAttribute("text-anchor", "middle");
text.setAttribute("fill", "black");

svg.appendChild(text);

