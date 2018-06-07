
function setupFireBase(){
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBJ_A0f79xJ3Tkqwmi_z8ZWa8Uscje3Rqs",
        authDomain: "mp2018-kkk26kkk.firebaseapp.com",
        databaseURL: "https://mp2018-kkk26kkk.firebaseio.com",
        projectId: "mp2018-kkk26kkk",
        storageBucket: "mp2018-kkk26kkk.appspot.com",
        messagingSenderId: "251405026349"       
    };
    firebase.initializeApp(config);


    //check login

    var fa = firebase.auth();
    fa.onAuthStateChanged(firebaseUser=>{
        console.log(firebaseUser);
    });

}

window.onload = function(){
    
    //alert("ok");
    setupFireBase();
    
    var btnCreate = document.querySelector("#btn_create");
    //btnSave.onclick = function() {} #old style    
   
    btnCreate.addEventListener("click",function(){
        var user= document.querySelector("#email").value;
        var pwd = document.querySelector("#password").value;

        console.log(user);
        console.log(pwd);

        var fa = firebase.auth();

        fa.createUserWithEmailAndPassword(user,pwd)
    });

    var btnLogin = document.querySelector("#btn_login");
    btnLogin.addEventListener("click",function(){
        var user= document.querySelector("#email").value;
        var pwd = document.querySelector("#password").value;

        console.log(user);
        console.log(pwd);

        var fa = firebase.auth();

        fa.signInWithEmailAndPassword(user,pwd);
        console.log("User Logged IN");

        // var logSes = document.getElementById("log_session");
        // logSes.innerText = "Welcome " + user;

    });
}

