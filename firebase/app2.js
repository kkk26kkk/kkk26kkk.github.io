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

    //check login

    var fa = firebase.auth();
    fa.onAuthStateChanged(firebaseUser=>{
       console.log(firebaseUser); 
    });
}

window.onload = function(){
    setupFirebase();

    var btnCreate = this.document.getElementById("btn_create");
    btnCreate.addEventListener("click", function(){
        var email = document.getElementById("email");
        var pwd = document.getElementById("pwd");

        console.log(email);
        console.log(pwd);

        var fa = firebase.auth();

        fa.createUserWithEmailAndPassword(email, pwd);
    });
}