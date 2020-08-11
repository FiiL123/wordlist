function fill(eng, exp, svk) {
  var tbl = document.getElementById("myTable");
  var id = parseInt(localStorage.getItem("id"));
  var row = tbl.insertRow();
  id += 1;
  localStorage.setItem("id", id);
  var cell1 = row.insertCell();
  var cell2 = row.insertCell();
  var cell3 = row.insertCell();

  link =
    "https://translate.google.com/#view=home&op=translate&sl=en&tl=sk&text=";
  link += eng;
  cell1.innerHTML = '<a href="' + link + '" target=blank_>' + eng + "</a>";
  localStorage.setItem("eng" + id, eng);
  cell2.innerHTML = exp;
  localStorage.setItem("exp" + id, exp);
  cell3.innerHTML = svk;
  localStorage.setItem("svk" + id, svk);
}

function insert() {
  var txt;
  var eng = prompt("Please enter english word:", "Here");
  var exp = prompt("Please enter explanation:", "Here");
  var svk = prompt("Please enter slovak equivalent:", "Here");

  fill(eng, exp, svk);
}

function fillFromStorage() {
  var tbl = document.getElementById("myTable");
  console.log(localStorage.getItem("id"));
  var idC = localStorage.getItem("id");
  if (idC == null) {
    localStorage.setItem("id", 0);
  }
  var id = parseInt(localStorage.getItem("id"));
  console.log(localStorage.getItem("id"));
  if (id > 0) {
    for (var i = 1; i <= id; i++) {
      var eng = localStorage.getItem("eng" + i);
      var exp = localStorage.getItem("exp" + i);
      var svk = localStorage.getItem("svk" + i);
      console.log(eng, exp, svk);
      if (eng != "null" || null) {
        var row = tbl.insertRow();
        var cell1 = row.insertCell();
        var cell2 = row.insertCell();
        var cell3 = row.insertCell();

        link =
          "https://translate.google.com/#view=home&op=translate&sl=en&tl=cs&text=";
        link += eng;
        cell1.innerHTML =
          '<a href="' + link + '" target=blank_>' + eng + "</a>";
        cell2.innerHTML = exp;
        cell3.innerHTML = svk;
      }
    }
  }
}
