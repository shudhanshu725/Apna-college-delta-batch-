// let btn = document.querySelectorAll("button");
// console.dir(btn);
// btn.forEach(function(button) {
//     button.onclick = function() {//onclick is an event handler
//         alert("Button was clicked!");
//     }
//     button.onmouseenter = function() {//onmouseenter is an event handler
//         alert("Button was hovered!");
//     }
// });
// event listeners
// let btn = document.querySelectorAll("button");
// console.dir(btn);
// btn.forEach(function(button) {
//     button.addEventListener('dblclick', function() { //addEventListener is an event listener and dblclick is an event type
//         alert("Button was clicked!");
//     });
// });
//Generate random colors on button click
let btn = document.querySelectorAll("button");
console.dir(btn);
btn.forEach(function(button) {
    button.addEventListener('click', function() { //addEventListener is an event listener and click is an event type
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        let color = `rgb(${red}, ${green}, ${blue})`;
        console.log(color);
    });
});
//Generate random colors on button click and change background color
let btns = document.querySelectorAll("button");
console.dir(btns);
btns.forEach(function(button) {
    button.addEventListener('click', function() { //addEventListener is an event listener and click is an event type
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        let color = `rgb(${red}, ${green}, ${blue})`;
        console.log(color);
    });
});
document.body.style.backgroundColor = color;
