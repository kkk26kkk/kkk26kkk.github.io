

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

    var ref = firebase.database().ref("employees");

    //when child is added
    ref.on("child_added", function(snap){
        var list = document.getElementById("list");
        const tr = document.createElement("tr");
        const td_id = document.createElement("td");
        const td_lastname = document.createElement("td");
        const td_firstname = document.createElement("td");
        const td_birthday = document.createElement("td");
        const td_age = document.createElement("td");
        const td_position = document.createElement("td");
        const td_action = document.createElement("td");
        const action = document.createElement("a");

        td_id.innerText = snap.child("id").val();
        td_lastname.innerText = snap.child("lastname").val();
        td_firstname.innerText = snap.child("firstname").val();
        td_birthday.innerText = snap.child("birthday").val();
        td_age.innerText = 2018 - snap.child("birthday").val().substr(0,4);
        td_position.innerText = snap.child("position").val();
        action.innerText = "Delete";
        action.href = "#";

        action.onclick = function(){
            var emp_id = this.parentNode.parentNode.id;
            // firebase database remove
            var employee = firebase.database().ref("employees").child(emp_id);
            employee.remove();   
            // html table remove
            var del_tr = document.getElementById(emp_id);
            del_tr.remove();    
        }
        td_action.appendChild(action);

        tr.appendChild(td_id);
        tr.appendChild(td_lastname);
        tr.appendChild(td_firstname);
        tr.appendChild(td_birthday);
        tr.appendChild(td_age);
        tr.appendChild(td_position);
        tr.appendChild(td_action);

        tr.id = snap.key;   // snap.key(firebase의 row id)가 table row의 id로 들어감
        list.appendChild(tr);
    });

    var fa = firebase.auth();
    fa.onAuthStateChanged(firebaseUser=>{
        console.log(firebaseUser);
        if(firebaseUser != null){
            var authUser = document.getElementById("auth_user");
            authUser.innerText = "Welcome " + firebaseUser.email;
        }
    });
}

window.onload = function(){
    setupFirebase();
    //alert("ok");
    var btnSave = document.getElementById("btn_save");
    //btnSave.onclick = function(){} #old style
    btnSave.addEventListener("click", function(){
        var id = document.getElementById("id").value;
        var firstname = document.getElementById("lastname").value;
        var lastname = document.getElementById("firstname").value;
        var birthday = document.getElementById("birthday").value;
        var position = document.getElementById("position").value;

        firebase.database().ref().child("employees").push().set({
            id : id,
            firstname : firstname,
            lastname : lastname,
            birthday : birthday,
            position : position
        });
    });

    logout = function(){
        firebase.auth().signOut();
        console.log("User Logged Out");

        var authUser = document.getElementById("auth_user");
        authUser.innerText = "";
    }

}