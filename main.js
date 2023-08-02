var one1 = document.querySelector(".one");
var two2 = document.querySelector(".two");
var border = document.querySelector(".border");
var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");
var four = document.querySelector("#four");
var target;
var a = 3;
var rang = 16;

// FOR CREATING BOOK SUB SHELEVES
for (i = 0; i < rang; i++) {
  one.innerHTML += '<div class="small" id="one' + i + '"> </div> ';
  two.innerHTML += '<div class="small" id="two' + i + '"> </div> ';
  three.innerHTML += '<div class="small" id="three' + i + '"> </div> ';
  four.innerHTML += '<div class="small"id="four' + i + '"> </div> ';
}

// home page ckick effect

function opn() {
  one1.style = "width:100%;height:30%";
  two2.style = "width:100%;top:30%;left:0%;display:block;padding-left:30%";
  one1.innerHTML = "DIVISION";
  two2.innerHTML = "BIBLIOTHECA";
  border.style = "top:6.5%;left:7%";
}

function cls() {
  one1.styly = "width:50%";
  two2.style = "width:50%;left:50%";
  one1.innerHTML = "DIV";
  two2.innerHTML = "LIOTHECA";
  border.style = "top:6.5%;left:7.5%";
}
// for hoem page
function shift() {
  document.querySelector(".class").classList.toggle("class_a");
  slide();
}

function slide() {
  if (document.querySelector(".class").classList.contains("class_a")) {
    window.setTimeout("sad()", 600);
  } else {
    document.querySelector(".dtl").style = "height:0%";
  }
}

function sad() {
  document.querySelector(".dtl").style = "height:52%";
}

function sci_fi() {
  a = 1;
  check();
}
function comic() {
  a = 2;
  check();
}
function novel() {
  a = 3;
  check();
}
function aca() {
  a = 4;
  check();
}

function check() {
  var sci_fi = document.querySelector("#sci_fi");
  var comic = document.querySelector("#comic");
  var novel = document.querySelector("#novel");
  var academic = document.querySelector("#academic");

  if (a == "1") {
    sci_fi.style = "display:block";
    one.style = "display:block";
    two.style = "display:none";
    three.style = "display:none";
    four.style = "display:none";
  } else {
    sci_fi.style = "display:none";
  }

  if (a == "2") {
    comic.style = "display:block";
    one.style = "display:none";
    two.style = "display:block";
    three.style = "display:none";
    four.style = "display:none";
  } else {
    comic.style = "display:none";
  }

  if (a == "3") {
    novel.style = "display:block";
    one.style = "display:none";
    two.style = "display:none";
    three.style = "display:block";
    four.style = "display:none";
  } else {
    novel.style = "display:none";
  }

  if (a == "4") {
    academic.style = "display:block";
    one.style = "display:none";
    two.style = "display:none";
    three.style = "display:none";
    four.style = "display:block";
  } else {
    academic.style = "display:none";
  }
}

var malik = document.querySelector("#one").children;
var t1 = Array.from(malik);
var malik1 = document.querySelector("#two").children;
var t2 = Array.from(malik1);
var malik2 = document.querySelector("#three").children;
var t3 = Array.from(malik2);
var malik3 = document.querySelector("#four").children;
var t4 = Array.from(malik3);
var mad = [];
var e = 0;

for (j = 0; j < rang; j++) {
  t1[j].style = "background-image:url(t1/" + j + ".png)";
  t2[j].style = "background-image:url(t2/" + j + ".png)";
  t3[j].style = "background-image:url(t3/" + j + ".png)";
  t4[j].style = "background-image:url(t4/" + j + ".png)";
}

//
one.addEventListener("click", saad, false);

two.addEventListener("click", saad, false);
three.addEventListener("click", saad, false);
four.addEventListener("click", saad, false);

function saad(e) {
  if (e.target !== e.currentTarget) {
    var c = e.target.id;
    target = c;
  }
}

function sub_open() {
  var one = document.querySelector(".sub_nav_a");
  one.classList.toggle("sub_nav_b");
  if (one.classList.contains("sub_nav_b")) {
    document.querySelector(".fa-buffer").style =
      "opacity:0.9;transform:rotateY(180deg)";
  } else {
    document.querySelector(".fa-buffer").style = "opacity:0.4";
  }
}

function sub_open1() {
  var one = document.querySelector(".sub_nav_a1");
  one.classList.toggle("sub_nav_b1");
  if (one.classList.contains("sub_nav_b1")) {
    document.querySelector(".fa-tools").style =
      "opacity:0.9;transform:rotateY(180deg)";
  } else {
    document.querySelector(".fa-tools").style = "opacity:0.4";
  }
}

var hh = 0;
var min = 0;
var sec = 0;

window.setInterval("timer()", 1000);

function timer() {
  sec++;

  if (sec < 10) {
    sec = "0" + sec;
  }

  if (sec > 59) {
    sec = 0;
    min++;
  } else if (min > 59) {
    min = 0;
    hh++;
  }
  document.querySelector("#b2").innerHTML =
    "YOU ARE HERE FOR<br> 0" +
    hh +
    " HH: 0" +
    min +
    " Min: " +
    sec +
    "Sec<br> THANK FOR VISIT!";
}
