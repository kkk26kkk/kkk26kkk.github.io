// app.js


function setupFireBase(){
    // Initialize Firebase
    var config = {
       //ADD YOUR KEY HERE....
       
    };
    firebase.initializeApp(config);


    var ref = firebase.database().ref("products");
    
    //when child is added
    ref.on("child_added", function(snap){
        var list = document.querySelector("#list");
        const tr = document.createElement("tr");
        const td_id = document.createElement("td");
        const td_name = document.createElement("td");
        const td_price = document.createElement("td");
        const td_action = document.createElement("td");
        const action = document.createElement("a");
        
        td_id.innerText = snap.child("id").val()
        td_name.innerText = snap.child("name").val()
        td_price.innerText = snap.child("price").val()
        action.innerText= "Delete";
        action.href="#";
        action.onclick = function (){
            var prod_id = this.parentElement.parentElement.id;
            var product = firebase.database().ref("products").child(prod_id);
            product.remove();
            var del_tr = document.querySelector("#" + prod_id);
            del_tr.remove();      
        }
        td_action.appendChild(action);

        tr.appendChild(td_id);
        tr.appendChild(td_name);
        tr.appendChild(td_price);
        tr.appendChild(td_action);
        
        tr.id = snap.key;
        list.appendChild(tr);
    });


}



window.onload = function(){
    
    //alert("ok");
    setupFireBase();
    
    var btnSave = document.querySelector("#button_save");
    //btnSave.onclick = function() {} #old style    
    btnSave.addEventListener("click",function(){
        var id = document.querySelector("#id").value;
        var name = document.querySelector("#name").value;
        var price = document.querySelector("#price").value;
        console.log(id);
        console.log(name);
        console.log(price);
        firebase.database().ref().child("products").push().set(
            {
                id:id,
                name:name,
                price:price
            }
        );


    });


}