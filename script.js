//EX7:Write a function to change the h1 text to something else
let changeHeader = document.getElementById("change-h1");
changeHeader.onclick = function () {
  let header = document.getElementsByTagName("h1")[0];
  header.innerText = "You Changed The H1";
};
//EX8: Write a function to change the page background color
let changeBgc = document.getElementById("change-bgc");
changeBgc.onclick = function () {
  let body = document.getElementsByTagName("body")[0];
  body.style.backgroundColor = "lightgreen";
};

//EX9: Write a function to change the footer address with a fake one
let changeAddress = document.getElementById("change-address");
changeAddress.onclick = function () {
  let address = document.getElementsByTagName("address")[0];
  address.innerText = "This Is A Fake Address";
};

//EX10: Write a function to add a CSS class to every Amazon link
