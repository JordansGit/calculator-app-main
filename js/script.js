let header = document.getElementById('header'); 
let themeSwitcher = document.getElementById('theme-switcher'); 
let display = document.getElementById('display'); 
let input = document.getElementById('input'); 

let zero = document.getElementById('zero'); 
let one = document.getElementById('one'); 
let two = document.getElementById('two'); 
let three = document.getElementById('three'); 
let four = document.getElementById('four'); 
let five = document.getElementById('five'); 
let six = document.getElementById('six'); 
let seven = document.getElementById('seven'); 
let eight = document.getElementById('eight'); 
let nine = document.getElementById('nine'); 
let plus = document.getElementById('plus'); 
let minus = document.getElementById('minus'); 
let divide = document.getElementById('divide'); 
let times = document.getElementById('times'); 
let del = document.getElementById('del'); 
let point = document.getElementById('point'); 
let reset = document.getElementById('reset'); 
let equals = document.getElementById('equals'); 

/* THEME SWITCHER TOGGLE */ 
const btnGroup = document.querySelectorAll('input[name="toggle"]');

for (var i = 0; i < btnGroup.length; i++) {
  btnGroup[i].addEventListener('click', isChecked);
}

function isChecked() {
  for (var i = 0; i < btnGroup.length; i++) {
    if (btnGroup[0].checked) {
      // remove other classes 
      document.body.className="";
      header.className="";
      themeSwitcher.className="";
      display.className="";
      input.className="";

      zero.className="";
      one.className="";
      two.className="";
      three.className="";
      four.className="";
      five.className="";
      six.className="";
      seven.className="";
      eight.className="";
      nine.className="";
      plus.className="";
      minus.className="";
      divide.className="";
      times.className="";
      del.className="";
      point.className="";
      reset.className="";
      equals.className="";

      // add theme1 classes 
      document.body.classList.add('theme1-body'); 
      header.classList.add('theme1-header'); 
      themeSwitcher.classList.add('theme1-switcher'); 
      display.classList.add('theme1-display'); 
      input.classList.add('theme1-input'); 

      zero.classList.add('block', 'theme1-zero'); 
      one.classList.add('block', 'theme1-one'); 
      two.classList.add('block', 'theme1-two'); 
      three.classList.add('block', 'theme1-three'); 
      four.classList.add('block', 'theme1-four'); 
      five.classList.add('block', 'theme1-five'); 
      six.classList.add('block', 'theme1-six'); 
      seven.classList.add('block', 'theme1-seven'); 
      eight.classList.add('block', 'theme1-eight'); 
      nine.classList.add('block', 'theme1-nine'); 
      plus.classList.add('block', 'theme1-plus'); 
      minus.classList.add('block', 'theme1-minus'); 
      divide.classList.add('block', 'theme1-divide'); 
      times.classList.add('block', 'theme1-times'); 
      del.classList.add('block', 'theme1-del'); 
      point.classList.add('block', 'theme1-point'); 
      reset.classList.add('block', 'theme1-reset'); 
      equals.classList.add('block', 'theme1-equals'); 

    } else if (btnGroup[1].checked) {
      // remove other classes 
      document.body.className="";
      header.className="";
      themeSwitcher.className="";
      display.className="";
      input.className="";

      zero.className="";
      one.className="";
      two.className="";
      three.className="";
      four.className="";
      five.className="";
      six.className="";
      seven.className="";
      eight.className="";
      nine.className="";
      plus.className="";
      minus.className="";
      divide.className="";
      times.className="";
      del.className="";
      point.className="";
      reset.className="";
      equals.className="";

      // add theme2 classes 
      document.body.classList.add('theme2-body'); 
      header.classList.add('theme2-header'); 
      themeSwitcher.classList.add('theme2-switcher'); 
      display.classList.add('theme2-display'); 
      input.classList.add('theme2-input'); 

      zero.classList.add('block', 'theme2-zero'); 
      one.classList.add('block', 'theme2-one'); 
      two.classList.add('block', 'theme2-two'); 
      three.classList.add('block', 'theme2-three'); 
      four.classList.add('block', 'theme2-four'); 
      five.classList.add('block', 'theme2-five'); 
      six.classList.add('block', 'theme2-six'); 
      seven.classList.add('block', 'theme2-seven'); 
      eight.classList.add('block', 'theme2-eight'); 
      nine.classList.add('block', 'theme2-nine'); 
      plus.classList.add('block', 'theme2-plus'); 
      minus.classList.add('block', 'theme2-minus'); 
      divide.classList.add('block', 'theme2-divide'); 
      times.classList.add('block', 'theme2-times'); 
      del.classList.add('block', 'theme2-del'); 
      point.classList.add('block', 'theme2-point'); 
      reset.classList.add('block', 'theme2-reset'); 
      equals.classList.add('block', 'theme2-equals'); 

    } else if (btnGroup[2].checked) {
      // remove other classes 
      document.body.className="";
      header.className="";
      themeSwitcher.className="";
      display.className="";
      input.className="";

      zero.className="";
      one.className="";
      two.className="";
      three.className="";
      four.className="";
      five.className="";
      six.className="";
      seven.className="";
      eight.className="";
      nine.className="";
      plus.className="";
      minus.className="";
      divide.className="";
      times.className="";
      del.className="";
      point.className="";
      reset.className="";
      equals.className="";

      // add theme3 classes 
      document.body.classList.add('theme3-body'); 
      header.classList.add('theme3-header'); 
      themeSwitcher.classList.add('theme3-switcher'); 
      display.classList.add('theme3-display'); 
      input.classList.add('theme3-input'); 

      zero.classList.add('block', 'theme3-zero'); 
      one.classList.add('block', 'theme3-one'); 
      two.classList.add('block', 'theme3-two'); 
      three.classList.add('block', 'theme3-three'); 
      four.classList.add('block', 'theme3-four'); 
      five.classList.add('block', 'theme3-five'); 
      six.classList.add('block', 'theme3-six'); 
      seven.classList.add('block', 'theme3-seven'); 
      eight.classList.add('block', 'theme3-eight'); 
      nine.classList.add('block', 'theme3-nine'); 
      plus.classList.add('block', 'theme3-plus'); 
      minus.classList.add('block', 'theme3-minus'); 
      divide.classList.add('block', 'theme3-divide'); 
      times.classList.add('block', 'theme3-times'); 
      del.classList.add('block', 'theme3-del'); 
      point.classList.add('block', 'theme3-point'); 
      reset.classList.add('block', 'theme3-reset'); 
      equals.classList.add('block', 'theme3-equals'); 
    } 
  }
}

// Calulator Function 
let keys = document.querySelectorAll('.block');
let displayInput = document.querySelector('#display > span'); 
let displayInputVal = '';

// Add Click Event for Each Key Click
for (var i = 0; i < keys.length; i++) {
  console.log("keys " + i + ": " + keys[i]);
  keys[i].addEventListener("click", myFunction);
}

// Update Display with Key Input 
function myFunction(e) {
  if (e.target != del && e.target != reset && e.target != equals) {
    if (e.target.innerHTML == 'x') {
      displayInputVal += '*'; 
    } else {
      displayInputVal += e.target.innerText;
    }
    displayInput.innerText = displayInputVal;   
  }
}

// Reset Key 
reset.addEventListener('click', () => {
  displayInputVal = ''; 
  displayInput.innerText = displayInputVal; 
})

// Delete Key 
del.addEventListener('click', () => {
  displayInputVal = displayInputVal.split(""); 
  displayInputVal.pop()
  displayInputVal = displayInputVal.join(""); 
  displayInput.innerText = displayInputVal; 
})

// Equals Key 
equals.addEventListener('click', () => {
  
  displayInputVal = eval(displayInputVal).toString(); 
  if (displayInputVal == undefined) {
    displayInputVal = '';
  } 
  displayInput.innerText = displayInputVal;
})


/* to do 
  - add a comma for the 4th/7th/10th/... number if the input has 4/... consecutive numbers input in a row. 

*/ 