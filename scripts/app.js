
// Grab DOM element using id

const targetDiv = document.getElementById("Welcome");

// this method is connected to the button in the HTML page and triggers a border change onClick

const setBorder = () => {
  targetDiv.style.border = "1px solid red";

  console.log("This is the Change Method");
};
