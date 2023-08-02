var card_1 = document.querySelector(".stick");

for (i = 0; i < 8; i++) {
  var b = i + 1;

  var idi = "#ta" + b;

  document.querySelector(idi).style =
    "background-image:url(theme/" + i + ".png)";
}

var arr = document.querySelectorAll(".card_1");
var card = Array.from(arr);

var cut = document.querySelector(".back_setting");
cut.addEventListener("click", back_setting);

function back_setting() {
  card_1.style = "display:none";
}

var hr = document.querySelector(".sub_nav_a");
var br = document.querySelector(".sub_nav_a1");

hr.addEventListener("click", set_id, false);
br.addEventListener("click", set_id, false);

function set_id(e) {
  card_1.style = "display:block";
  if (e.target !== e.currentTarget) {
    var c = e.target.id;

    check_card(c);
  }
}

function check_card(loc) {
  for (i = 1; i < 7; i++) {
    var d = "#card_a" + i;
    document.querySelector(d).style = "display:none";
    if (loc == "s" + i) {
      var targ = "#card_a" + i;
      document.querySelector(targ).style = "display:block";
    }
  }
}

var mode_btn = document.querySelector(".mode_btn");
var mode_detail = document.querySelector(".btn_detail");
mode_btn.addEventListener("click", slide_btn);

// DARK MODE BUTTON FUL FUNCTIONALITY //

function slide_btn() {
  var clr1 = document.querySelector("#color1").value;
  var clr2 = document.querySelector("#color2").value;
  console.log(clr1 + " and " + clr2);
  mode_btn.classList.toggle("mode_btn_a");
  mode_detail.classList.toggle("btn_detail_a");

  if (mode_detail.classList.contains("btn_detail_a")) {
    color_change(clr1, clr2);
    mode_detail.innerHTML = "OFF";
  } else {
    color_change("grey", "black");
    mode_detail.innerHTML = "ON";
  }
}

var user_color1;
var user_color2;

// FUNCION FOR CHANGING COKOR OF WEBSOT //

// tyeme ke color ke lie
function color_change(user_color1, user_color2) {
  getComputedStyle(document.documentElement).getPropertyValue("--color1"); // #999999

  document.documentElement.style.setProperty("--color1", user_color1);

  getComputedStyle(document.documentElement).getPropertyValue("--color2"); // #999999

  document.documentElement.style.setProperty("--color2", user_color2);
  localStorage.clear();
  localStorage.setItem("CLR1", user_color1);
  localStorage.setItem("CLR2", user_color2);
}

var cl1 = localStorage.getItem("CLR1");
var cl2 = localStorage.getItem("CLR2");

color_change(cl1, cl2);

var reg_form_btn = document.querySelector("#form_fil");
reg_form_btn.addEventListener("click", form_fill);

function form_fill() {
  var xyz = document.querySelectorAll(".user_input");
  var all_dtl = Array.from(xyz);
  var name = all_dtl[0].value;

  if (
    all_dtl[0].value == "" &&
    all_dtl[1].value == "" &&
    all_dtl[2].value == "" &&
    all_dtl[3].value == ""
  ) {
    alert("Pleqse fill the necessary detail ");
  } else {
    alert(
      "THANK YOU " +
        name +
        " You have been register in our data base we will contact you soon!"
    );
  }
}

var sq_all = document.querySelectorAll(".square");
var sqr = Array.from(sq_all);

// for poitn out of ten ciunt in fedback
function p_c(p_c_v) {
  for (i = 0; i < 10; i++) {
    sqr[i].style = "background:skyblue";
  }
  for (i = 0; i < p_c_v; i++) {
    sqr[i].style = "background:#fff017";
  }
}

var str = document.querySelectorAll("#star");
var star = Array.from(str);
var rating = 0;
var love_rating;

// FOR STAR CIUNT IN RATING
function s_c(s_c_v) {
  rating = s_c_v;

  for (i = 0; i < 5; i++) {
    star[i].style = "opacity:0.24";
  }
  for (i = 0; i < s_c_v; i++) {
    star[i].style = "opacity:1";
  }
}

// submit button ke bad ki kahani
var feed_btn = document.querySelector("#btn_feed");
feed_btn.onclick = (e) => {
  if (love_rating == "1") {
    lo =
      "  And Boyfrend Ke Lie Hamari bht bht greeting But Ek Bar Developer Se Baat Kro Achcha Insna hai ";
  } else if (love_rating == "2") {
    lo =
      " THANKS FOR LOVI DEVELOPER HIS MOBILE NO IS 8650627025 CALL HIM NOW MAKE YOU LOVE SUCCESS ";
  } else {
    lo =
      " Thans and developer will also love you despiratly call hime 8650627025";
  }
  alert(
    " THANKS FOR YOUR FEEDBACK ! YOUR " +
      rating +
      " STAR FEEDBACK  IS VALUABLE FOR US " +
      lo
  );
  s_c(0);
  p_c(0);
  l_c(0);
};

var love = document.querySelectorAll(".love");
var love_ar = Array.from(love);

// for love developer point
function l_c(card) {
  love_rating = card;
  for (i = 0; i < 3; i++) {
    love_ar[i].style = "background:skyblue";
  }
  love_ar[card - 1].style = "background:#fff017";
}

function search_bar() {
  var li = document.querySelector("#search_list").children;
  var filter = document.querySelector("#search_in");
  var filter = filter.value.toUpperCase();

  for (i = 0; i < li.length; i++) {
    var ss = li[i].innerHTML.toUpperCase();
    if (ss.indexOf(filter) > -1) {
      li[i].style = "display:block";
    } else {
      li[i].style = "display:none";
    }
  }
}

var Search_action = document.querySelector("#search_list");
Search_action.addEventListener("click", list_index);

function list_index(e) {
  var c = e.target.id;
  switch (c) {
    case "1":
      back_setting();

      break;

    case "2":
      check_card("s1");
      break;

    case "3":
      check_card("s5");
      break;

    case "4":
      check_card("s6");
      break;

    case "5":
      check_card("s5");
      break;

    case "6":
      check_card("s3");
      break;

    case "7":
      back_setting();
      window.location = "#main1";
      break;

    case "8":
      back_setting();
      window.location = "#b2";
      break;

    case "9":
      check_card("s2");
      break;

    case "10":
      check_card("s6");
      break;
  }
}
