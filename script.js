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
let addLinkClass = document.getElementById("add-links-class");
addLinkClass.onclick = function () {
  let links = document.getElementsByTagName("a");
  for (let link of links) {
    link.classList.add("links-class");
  }
};

//EX11: Write a function to toggle a CSS class for all the images in the table; that class should set the visibility of the image
let toggleImgs = document.getElementById("toggle-img");
toggleImgs.onclick = function () {
  let images = document.getElementsByTagName("img");
  for (let img of images) {
    img.classList.toggle("toggling-image");
  }
};
