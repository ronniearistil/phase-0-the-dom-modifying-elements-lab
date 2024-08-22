// Remove the <main> element
const main = document.getElementById("main");
main.remove();

// Create a new <h1> element
const newHeader = document.createElement("h1");

// Assign the id 'victory' to the newHeader element
newHeader.id = "victory";

// Set the text content of the newHeader element
newHeader.textContent = "Ronnie Aristil is the champion";

// Append the newHeader element to the body
document.body.append(newHeader);

