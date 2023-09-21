function kiemTraRong(value, idErr, message) {
  if (value.trim() === "") {
    document.querySelector(idErr).innerHTML = message;
    document.querySelector(idErr).style.display = "block";
    return false;
  } else {
    document.querySelector(idErr).innerHTML = "";
    document.querySelector(idErr).style.display = "none";
    return true;
  }
}

function kiemTraSoRong(value, idErr, message) {
  if (value === "") {
    document.querySelector(idErr).innerHTML = message;
    document.querySelector(idErr).style.display = "block";
    return false;
  } else {
    document.querySelector(idErr).innerHTML = "";
    document.querySelector(idErr).style.display = "none";
    return true;
  }
}

function kiemTraOption(value, idErr, message) {
  if (value === "Select Type") {
    document.querySelector(idErr).innerHTML = message;
    document.querySelector(idErr).style.display = "block";
    return false;
  } else {
    document.querySelector(idErr).innerHTML = "";
    document.querySelector(idErr).style.display = "none";
    return true;
  }
}
