var selectedList = [];
var count = 0;
var row = 0;
var col = 0;

var intervals = [];

function setClick(id) {
  const index = selectedList.indexOf(id);
  var td = document.getElementById(id);

  if (index == -1) {
    td.style.background = "red";
    selectedList.push(id);
    count++;

    var time = 0;
    var intervalId = setInterval(() => {
      time++;
      if (time > 5) {
        clearInterval(intervalId);
        td.style.background = "yellow";
        selectedList.splice(index, 1);
        intervals.splice(index, 1);
        count--;
        document.getElementById("selectCount").innerText = count;
        td.innerText = id;
      } else {
        td.innerText = time;
      }
    }, 1000);
    intervals.push(intervalId);
  } else {
    clearInterval(intervals[index]);
    td.style.background = "green";
    td.innerText = id;
    td.onclick = null;
  }

  document.getElementById("selectCount").innerText = count;
  // if (count === col * row) {
  //   alert("ظرفیت تکمیل شد");
  // }
}

function createHall() {
  var row = document.getElementById("row").value;
  var col = document.getElementById("col").value;
  var table = document.createElement("table");

  table.classList.add("table1");
  for (let i = 0; i < row; i++) {
    var tr = document.createElement("tr");
    for (let j = 1; j <= col; j++) {
      var tdId = String.fromCharCode(i + 65) + j;
      var td = document.createElement("td");
      var text = document.createTextNode(tdId);

      td.appendChild(text);
      tr.appendChild(td);
      td.classList.add("td1");
      td.setAttribute("id", tdId);
      td.setAttribute("onclick", "setClick(this.id)");
    }
    table.appendChild(tr);
  }
  document.body.appendChild(table);
}
