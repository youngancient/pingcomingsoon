document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("form #email").onkeyup = function () {
    document.querySelector("form input").style.border =
      " 2px solid hsl(223, 100%, 88%)";
      hide(".message");
  };
  document.querySelector("form").onsubmit = function () {
    let email = document.querySelector("form #email").value;
    if (email == "") {
      document.querySelector("form .message").innerHTML = "Email cannot be empty !";
      document.querySelector("form .message").style.color =
        "hsl(354, 100%, 66%)";
      document.querySelector("form input").style.border =
        " 2px solid hsl(354, 100%, 66%)";
        display(".message");
    } else {
      if (checkEmail(email)) {
        document.querySelector("form .message").innerHTML =
          "Email sent sucessfully !";
        document.querySelector("form .message").style.color =
          "hsl(154, 59%, 51%)";
          display(".message");
        reset();
      } else {
        document.querySelector("form .message").innerHTML =
          "Enter a Valid Email !";
        document.querySelector("form .message").style.color =
          "hsl(354, 100%, 66%)";
        document.querySelector("form input").style.border =
          " 2px solid hsl(354, 100%, 66%)";
          display(".message");
      }
    }
    return false;
  };
});
function display(className) {
  document.querySelector(`form ${className}`).style.display = "block";
}
function hide(className) {
  document.querySelector(`form ${className}`).style.display = "none";
}
function reset() {
  document.querySelector("form #email").value = "";
}
function checkEmail(email) {
  var filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!filter.test(email)) {
    return false;
  }
  return true;
}
// function checkDeviceType() {
//   var ua = new UAParser();
//   var result = ua.getResult();
//   if (result.device.type == undefined) {
//     return "desktop";
//   } else {
//     return result.device.type;
//   }
// }
