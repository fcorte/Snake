var snake = []

function section (xpos,ypos) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.width = 10px;
    this.height = 10px;
    this.color = green;
}

function start () {
    for (var i = 0; i<5; i++) {
        snake.push(section(snake[i] +10, 10));
    }
}
// creates the initial snake. Will need to add an Event Listener to trigger start

/*
var snake = document.getElementById("Snake");
//Defines the variable snake and stores the element Snake within it. Going forward, snake will be treated as an Object with its properties being the same as the CSS ones.

function eatApple() {
    var currWidth = snake.offsetWidth;
    snake.style.width = (currWidth + 10) + "px";
}
// Declares the function eatApple, which will trigger everytime snake will "eat" an apple and increase its width property by 10px

document.addEventListener("keydown", key);
// Listens for keystrokes and initializes the function "key" when they happen

function key(e) {
    value = e.keyCode;
    // stores the keyCode of the pressed key in the variable value

    move(value);
    // initializes the function "move", which will check the keyCode to  
    // determine what movement, if any, to apply to snake 
}

function move(value) {
   
    var posV = snake.offsetTop;
    var posH = snake.offsetLeft;
    // stores the current top and left position in the respective variables

    setInterval(slither, 10);
    // main method consenting movement: invokes the slither function once every 10 ms

    function slither() {

      if (value == 38) {
        snake.style.top = (posV --) + "px";
      }
      if (value == 40) {
        snake.style.top = (posV ++) + "px";
      }
      if (value == 37) {
        snake.style.left = (posH --) + "px";
      }
      if (value == 39) {
        snake.style.left = (posH ++) + "px";
      }
    }
    // function regolating movement depending on keyCode
}
*/
