document.getElementById("btnSave").onclick = function(){

    lastName = document.getElementById("ln").value;
    firstName = document.getElementById("fn").value;
    phoneNumber = document.getElementById("pn").value;

    //alert(lastName + firstName + phoneNumber);
    table = document.getElementById("myTable");
    tr = document.createElement("tr");
    td1 = document.createElement("td");
    td2 = document.createElement("td");
    td3 = document.createElement("td");
    td4 = document.createElement("td");
    td1.innerText = lastName;
    td2.innerText = firstName;
    td3.innerText = phoneNumber;
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

function txt_onfocus(txt){
    txt.value='';
}