// app.js

// Initialize Firebase
function setupFirebase(){
    var config = {
        apiKey: "AIzaSyBJ_A0f79xJ3Tkqwmi_z8ZWa8Uscje3Rqs",
        authDomain: "mp2018-kkk26kkk.firebaseapp.com",
        databaseURL: "https://mp2018-kkk26kkk.firebaseio.com",
        projectId: "mp2018-kkk26kkk",
        storageBucket: "mp2018-kkk26kkk.appspot.com",
        messagingSenderId: "251405026349"
    };
    firebase.initializeApp(config);

    var ref = firebase.database().ref("products");

    //when child is added
    ref.on("child_added", function(snap){
        var list = document.getElementById("list");
        const tr = document.createElement("tr");
        const td_id = document.createElement("td");
        const td_name = document.createElement("td");
        const td_price = document.createElement("td");
        const td_action = document.createElement("td");
        const action = document.createElement("a");

        td_id.innerText = snap.child("id").val();
        td_name.innerText = snap.child("name").val();
        td_price.innerText = snap.child("price").val();
        action.innerText = "Delete";
        action.href = "#";

        action.onclick = function(){
            var prod_id = this.parentNode.parentNode.id;
            // firebase database remove
            var product = firebase.database().ref("products").child(prod_id);
            product.remove();   
            // html table remove
            var del_tr = document.getElementById(prod_id);
            del_tr.remove();    
        }
        td_action.appendChild(action);

        tr.appendChild(td_id);
        tr.appendChild(td_name);
        tr.appendChild(td_price);
        tr.appendChild(td_action);

        tr.id = snap.key;   // snap.key(firebase의 row id)가 table row의 id로 들어감
        list.appendChild(tr);
    });
}

window.onload = function(){
    setupFirebase();
    //alert("ok");
    var btnSave = document.getElementById("btn_save");
    //btnSave.onclick = function(){} #old style
    btnSave.addEventListener("click", function(){
        var id = document.getElementById("id").value;
        var name = document.getElementById("name").value;
        var price = document.getElementById("price").value;

        console.log(id);
        console.log(name);
        console.log(price);

        firebase.database().ref().child("products").push().set({
            id : id,
            name : name,
            price : price
        });
    });



}