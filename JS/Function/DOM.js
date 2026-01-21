//DOM (Document Object Model) 
// This module provides functions to manipulate the DOM in a web page.
//the html dom can be used to acces and manipulate html elements
//DOM SE ham html elements ko access,edit aur add kar sakte hain javascript me code likha kar
// Function to get an element by its ID
// function getElementById(id) {
//     return document.getElementById(id);
// }
// // Function to get elements by their class name
// function getElementsByClassName(className) {
//     return document.getElementsByClassName(className);
// }
// // Function to create a new element
// function createElement(tagName) {
//     return document.createElement(tagName);
// }
// //query selector
// function querySelector(selector){
//     return document.querySelector(selector);
// }
// //setting content in object
// function setContent(element, content){
//     element.innerHTML = content;
// }
// //manipulating attributes
// function setAttribute(element, attrName, attrValue){
//     element.setAttribute(attrName, attrValue);
// }
// function getAttribute(element, attrName){
//     return element.getAttribute(attrName);
// }
// //manipulating styles
// function setStyle(element, styleName, styleValue){
//     element.style[styleName] = styleValue;
// }
// //class style property
// function addClass(element, className){
//     element.classList.add(className);
// }
// function removeClass(element, className){
//     element.classList.remove(className);
// }   
// function toggleClass(element, className){
//     element.classList.toggle(className);
// }
// //adding elements on page
// function appendChild(parent, child){
//     parent.appendChild(child);
// }
// function removeChild(parent, child){
//     parent.removeChild(child);
// }
// //removing elements from page
// function replaceChild(parent, newChild, oldChild){
//     parent.replaceChild(newChild, oldChild);
// }
// let para1 = document.createElement("p");
// para1.innerHTML = "This is a paragraph created using DOM methods.";// Set the content of the paragraph
// document.querySelector("body").append(para1); // Append the paragraph to the body

// para1.classList.add("red");

// let h3=document.createElement("h3");
// h3.innerHTML="This is a heading created using DOM methods.";
// document.querySelector("body").append(h3);

// h3.classList.add("blue");

// let div1=document.createElement("div");
// let h1=document.createElement("h1");
// let para2=document.createElement("p");
// h1.innerText="hey i am a div";
// para2.innerText="me to";

// div1.append(h1);
// div1.append(para2);
// div1.classList.add("box");

// document.querySelector("body").append(div1);
// dob