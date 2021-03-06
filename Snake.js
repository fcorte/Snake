var snake = []
// creates the snake array. To be populated with sections as the snake gets longer.

var edge = document.body.getBoundingClientRect();
    edgeT = edge.top;
    edgeB = edge.bottom;
    edgeL = edge.left;
    edgeR = edge.right;
// sets the borders of the game board (same as window);

window.addEventListener("load", ready);
// not quite sure why document.addEventListener("load", ready) does not work

function ready () {

   for (var i = 50, l = 0; i>= 20; i = i - 10, l++) {
       section(l,i, 200);
   }
   
   apple();
}
//  creates the initial body of the snake (length = 4) and the first apple once the page loads

function section (name,xpos,ypos) {
   
       window['newPart' + name] = document.createElement('div');
// creates the div that will represent a body part of the snake
// dynamic variable names are needed in order to be able to later access
// their properties using the function move

       snake.push('newPart' + name);
// push the new part onto the snake array
      
       window['newPart' + name].style.position = "absolute";
       window['newPart' + name].style.left = xpos+"px";
       window['newPart' + name].style.top = ypos+"px";
       window['newPart' + name].style.width = "10px";
       window['newPart' + name].style.height = "10px";
       window['newPart' + name].style.backgroundColor = "green";  

       document.body.appendChild(window['newPart' + name]);
}

var direction = "right";
// stores the current direction of the snake. To be defined by the movement functions (default: right);

function slither () {
    for (var c = snake.length -1; c >0; c--) {
        window['newPart' + c].style.left = (window['newPart' + (c - 1)].offsetLeft) + "px";
        window['newPart' + c].style.top = (window['newPart' + (c - 1)].offsetTop) + "px";                
    }
}
// main movement loop for the body of the snake;

document.addEventListener("keydown", key);
// listens for a keydown event and initializes the function key

function moveUp () {
    currHeadPosT = newPart0.offsetTop;
    currHeadPosL = newPart0.offsetLeft;
//store the current position of the head of the snake. Need to put within the //move functions as otherwise they won't be initialized by setInterval in key();
    if (appleL == currHeadPosL && appleT == currHeadPosT) {
        
        document.body.removeChild(fruit);
        apple();
        
        var value = snake.length;
        var x = ['newPart' + (value - 1)].offsetLeft;
        var y = ['newPart' + (value - 1)].offsetTop + 10;

        section(value, x, y);
        slither();
        newPart0.style.top = (currHeadPosT - 10) + "px";
        direction = "up";
    }
 //adds new section whenever an apple is eaten
    else if (currHeadPosT < edgeT) {
        clearInterval(movement);
        alert('crash');
        alert("score = " + snake.length);
        location.reload();
    } 
// "crash with border" checker. probably need to change location.reload() to something else to reset
// need to better define borders
    
    else {
        override();
        slither();
        newPart0.style.top = (currHeadPosT - 10) + "px";
        direction = "up";
    }
// standard movement handler
}

function moveDown() {
    currHeadPosT = newPart0.offsetTop;
    currHeadPosL = newPart0.offsetLeft;
  
    if (appleL == currHeadPosL && appleT == currHeadPosT) {
        
        document.body.removeChild(fruit);
        apple();
        
        var value = snake.length;
        var x = ['newPart' + (value - 1)].offsetLeft;
        var y = ['newPart' + (value - 1)].offsetTop - 10;

        section(value, x, y);
        slither();
        newPart0.style.top = (currHeadPosT + 10) + "px";
        direction = "down";
    }
    
    else if (currHeadPosT > edgeB) {
        clearInterval(movement);
        alert('crash');
        alert("score = " + snake.length);
        location.reload();
    } 
  
    else { 
        override();
        slither();
        newPart0.style.top = (currHeadPosT + 10) + "px";
        direction = "down";
    }
}

function moveLeft() {
    currHeadPosT = newPart0.offsetTop;
    currHeadPosL = newPart0.offsetLeft;

    if (appleL == currHeadPosL && appleT == currHeadPosT) {
        
        document.body.removeChild(fruit);
        apple();
        
        var value = snake.length;
        var x = ['newPart' + (value - 1)].offsetLeft + 10;
        var y = ['newPart' + (value - 1)].offsetTop;

        section(value, x, y);
        slither();
        newPart0.style.left = (currHeadPosL - 10) + "px";
        direction = "left";
    }
    else if (currHeadPosL < edgeL) {
        clearInterval(movement);
        alert('crash');
        alert("score = " + snake.length);
        location.reload();
    } 
  
    else {
        override();
        slither();
        newPart0.style.left = (currHeadPosL - 10) + "px";
        direction = "left";
    }
}

function moveRight() {
    currHeadPosT = newPart0.offsetTop;
    currHeadPosL = newPart0.offsetLeft;

    if (appleL == currHeadPosL && appleT == currHeadPosT) {
        
        document.body.removeChild(fruit);
        apple();
        
        var value = snake.length;
        var x = ['newPart' + (value - 1)].offsetLeft - 10;
        var y = ['newPart' + (value - 1)].offsetTop;

        section(value, x, y);
        slither();
        newPart0.style.left = (currHeadPosL + 10) + "px";
        direction = "right";
    }
  
    else if (currHeadPosL > edgeR) {
        clearInterval(movement);
        alert('crash');
        alert("score = " + snake.length);
        location.reload();
    } 
    else {
        override();
        slither();
        newPart0.style.left = (currHeadPosL + 10) + "px";
        direction = "right";
    }
}
// functions defining movement

var movement;
// need to declare movement to be used in key.

function key(e) {
        
    value = e.keyCode;
// stores the keyCode of the pressed key in the variable value

    if (value == 38 && direction != "down") {
        clearInterval(movement);
        movement = setInterval(moveUp,50);
    }
    else if (value == 40 && direction != "up") {
        clearInterval(movement);
        movement = setInterval(moveDown,50);     
    }

    else if (value == 37 && direction != "right") {
        clearInterval(movement);
        movement = setInterval(moveLeft,50);
    }
    else if (value == 39 && direction != "left") {
        clearInterval(movement);
        movement = setInterval(moveRight,50);
    }
}

function getRandomInt(min, max) {
  return Math.round(Math.floor(Math.random() * (max - min) + min)/10) * 10;
}

// modified from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random 

function apple () {

     fruit = document.createElement('div');

     fruit.style.position = "absolute";
     fruit.style.left = getRandomInt(edgeL, edgeR) + "px";
     fruit.style.top = getRandomInt(edgeT, edgeB) + "px";
     fruit.style.width = "10px";
     fruit.style.height = "10px";
     fruit.style.backgroundColor = "red";  
     
     (function () {

         for (var i=0; i <= snake.length; i++) {
            if (fruit.offsetLeft != ['newPart' + i].offsetLeft && 
                fruit.offsetTop != ['newPart' + i].offsetTop) {
                document.body.appendChild(fruit);
            }   
         }
      })();
// anonymous function needed to check that apples do not overlap with snake
     
     appleL = fruit.offsetLeft;
     appleT = fruit.offsetTop;
// needed to determine whenever snake eats an apple in the move functions
}

function override () {
  
     for (var i=1; i < snake.length; i++) {
        if (currHeadPosL == window['newPart' + i].offsetLeft && 
            currHeadPosT == window['newPart' + i].offsetTop) {
                clearInterval(movement);
                alert('crash');
                alert("score = " + snake.length);
                location.reload();
        }  
    }
}
// to check if snake crashes with itself


/*
var snake = document.getElementById("Snake");
//Defines the variable snake and stores the element Snake within it. Going forward, snake will be treated as an Object with its properties being the same as the CSS ones.
>>>>>>> origin/master

var edgeT = document.getElementById("top").offsetTop + 10;
var edgeB = document.getElementById("bottom").offsetTop;
var edgeL = document.getElementById("left").offsetLeft + 10;
var edgeR = document.getElementById("right").offsetLeft;
// sets the borders of the game board (same as window);

window.addEventListener("load", ready);
// not quite sure why document.addEventListener("load", ready) does not work

function ready() {

    for (var i = 50, l = 0; i >= 20; i = i - 10, l++) {
        section(l, i, 200);
    }
}
//  creates the initial body of the snake once the page loads(length = 4);

function section(name, xpos, ypos) {

    window['newPart' + name] = document.createElement('div');
    // creates the div that will represent a body part of the snake
    // dynamic variable names are needed in order to be able to later access
    // their properties using the function move

    snake.push('newPart' + name);
    // push the new part onto the snake array

    window['newPart' + name].style.position = "absolute";
    window['newPart' + name].style.left = xpos + "px";
    window['newPart' + name].style.top = ypos + "px";
    window['newPart' + name].style.width = "10px";
    window['newPart' + name].style.height = "10px";
    window['newPart' + name].style.backgroundColor = "green";

    document.body.appendChild(window['newPart' + name]);
}

var direction = "right";
// stores the current direction of the snake. To be defined by the movement functions (default: right);

function slither() {
    for (var c = snake.length - 1; c > 0; c--) {
        window['newPart' + c].style.left = (window['newPart' + (c - 1)].offsetLeft) + "px";
        window['newPart' + c].style.top = (window['newPart' + (c - 1)].offsetTop) + "px";
    }
}
// main movement loop for the body of the snake;

document.addEventListener("keydown", key);
<<<<<<< HEAD
// listens for a keydown event and initializes the function key

function moveUp() {
    currHeadPosT = newPart0.offsetTop;
    currHeadPosL = newPart0.offsetLeft;
    //store the current position of the head of the snake. Need to put within the //move functions as otherwise they won't be initialized by setInterval in key();
    if (currHeadPosT < edgeT) {
        clearInterval(movement);
        alert('crash');
        while (snake.length > 0) {
            snake.pop();
        }
        ready();
    }
    // temporary "crash with border" checker
    slither();
    newPart0.style.top = (currHeadPosT - 10) + "px";
    direction = "up";
}

function moveDown() {
    currHeadPosT = newPart0.offsetTop;
    currHeadPosL = newPart0.offsetLeft;
    if (currHeadPosT > edgeB) {
        clearInterval(movement);
        alert('crash');
        while (snake.length > 0) {
            snake.pop();
        }
        ready();
    }
    slither();
    newPart0.style.top = (currHeadPosT + 10) + "px";
    direction = "down";
}

function moveLeft() {
    currHeadPosT = newPart0.offsetTop;
    currHeadPosL = newPart0.offsetLeft;
    if (currHeadPosL < edgeL) {
        clearInterval(movement);
        alert('crash');
        while (snake.length > 0) {
            snake.pop();
        }
        ready();
    }
    slither();
    newPart0.style.left = (currHeadPosL - 10) + "px";
    direction = "left";
}

function moveRight() {
    currHeadPosT = newPart0.offsetTop;
    currHeadPosL = newPart0.offsetLeft;
    if (currHeadPosL > edgeR) {
        clearInterval(movement);
        alert('crash');
        while (snake.length > 0) {
            snake.pop();
        }
        ready();
    }
    slither();
    newPart0.style.left = (currHeadPosL + 10) + "px";
    direction = "right";
}
// functions defining movement

var movement;
// need to declare movement to be used in key.

function key(e) {

    value = e.keyCode;
    // stores the keyCode of the pressed key in the variable value

    if (value == 38 && direction != "down") {
        clearInterval(movement);
        movement = setInterval(moveUp, 50);
    }
    else if (value == 40 && direction != "up") {
        clearInterval(movement);
        movement = setInterval(moveDown, 50);
    }

    else if (value == 37 && direction != "right") {
        clearInterval(movement);
        movement = setInterval(moveLeft, 50);
    }
    else if (value == 39 && direction != "left") {
        clearInterval(movement);
        movement = setInterval(moveRight, 50);
    }
    else if (value == 65) {
        function check() {
            alert(edgeB);
        }
        check();
    }
}
>>>>>>> origin/master
