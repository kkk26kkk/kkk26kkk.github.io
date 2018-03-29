var pb = new Array();

document.getElementById("btnSave").onclick = function(){

  lastName = document.getElementById("ln").value;
  firstName = document.getElementById("fn").value;
  phoneNumber = document.getElementById("pn").value;

  var p = new Object();
  p.lastName = lastName;
  p.firstName = firstName;
  p.phoneNumber = phoneNumber;
  pb.push(p);
  updateTable(p);
}

function updateTable(p){
  table = document.getElementById("myTable");
  tr = document.createElement("tr");
  td1 = document.createElement("td");
  td2 = document.createElement("td");
  td3 = document.createElement("td");
  td4 = document.createElement("td");
  td1.innerText = p.lastName;
  td2.innerText = p.firstName;
  td3.innerText = p.phoneNumber;
  td4.innerText = "Del";
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  /*
  tr.innerHTML = "<td>" + lastName + "</td>";
  tr.innerHTML += "<td>" + firstName + "</td>";
  tr.innerHTML += "<td>" + phoneNumber + "</td>";
  */
  table.appendChild(tr);

  td4.onclick = function(){
    this.parentNode.parentNode.removeChild(this.parentNode);
  }
}

function tableSort(n){
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc"; 
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("tr");
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("td")[n];
      y = rows[i + 1].getElementsByTagName("td")[n];
      /* Check if the two rows should switch place,
      based on the direction, asc or desc: */
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
          }
        }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchcount ++; 
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

document.getElementById("searchBtn").onclick = function(){
  var input, filter, table, tr, td, i;
  input = document.getElementById("searchInput");
  filter = input.value.toLowerCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  for(i=0; i<tr.length; i++){    
    tr[i].style.backgroundColor="#fff";    
  }

  for(i=0; i<tr.length; i++){
    td = tr[i].getElementsByTagName("td")[0];
    if(td){
      if(td.innerHTML.toLowerCase().indexOf(filter) > -1){ // indexOf() : string search , return string location or -1
        tr[i].style.backgroundColor="#ff9";
      }
    }
  }
}