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
    if (btnGroup[i].checked) {
      console.log(btnGroup[i]);
    }
    // if btnGroup [0].checked, display theme 1, if ...[1]... theme 2, if ...[2]... theme 3. 
  }
}

/*
To Do 
Need to make seperate classes for the colours of each theme. 

*/ 