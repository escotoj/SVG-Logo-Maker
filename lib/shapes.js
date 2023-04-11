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






{<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<polygon points="150, 18 244, 182 56, 182" fill="bisque" />

<text x="150" y="150" font-size="60" text-anchor="middle" fill="#3a0467">SVG</text>

</svg>}