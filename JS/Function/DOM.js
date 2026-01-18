//DOM (Document Object Model) 
// This module provides functions to manipulate the DOM in a web page.
//the html dom can be used to acces and manipulate html elements

// Function to get an element by its ID
function getElementById(id) {
    return document.getElementById(id);
}
// Function to get elements by their class name
function getElementsByClassName(className) {
    return document.getElementsByClassName(className);
}
// Function to create a new element
function createElement(tagName) {
    return document.createElement(tagName);
}
//query selector
function querySelector(selector){
    return document.querySelector(selector);
}
//setting content in object
function setContent(element, content){
    element.innerHTML = content;
}
//manipulating attributes
function setAttribute(element, attrName, attrValue){
    element.setAttribute(attrName, attrValue);
}
function getAttribute(element, attrName){
    return element.getAttribute(attrName);
}
//manipulating styles
function setStyle(element, styleName, styleValue){
    element.style[styleName] = styleValue;
}