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

    var ref = firebase.database().ref("dashboard");

    //when child is added
    ref.on("child_added", function(snap){
        var list = document.getElementById("list");
        const tr = document.createElement("tr");
        const td_play = document.createElement("td");
        const td_score = document.createElement("td");

        td_play.innerText = snap.child("team").val() + " - " + snap.child("play").val();
        td_score.innerText = snap.child("score").val();

        tr.appendChild(td_play);
        tr.appendChild(td_score);

        tr.id = snap.key;   // snap.key(firebase의 row id)가 table row의 id로 들어감
        list.appendChild(tr);

        if(snap.child("team").val() == "W"){            
            var score_w = document.getElementById("score_w");
            score_w.innerText = parseInt(score_w.innerText) + parseInt(snap.child("score").val());
        }
        else if(snap.child("team").val() == "C"){
            var score_c = document.getElementById("score_c");
            score_c.innerText = parseInt(score_c.innerText) + parseInt(snap.child("score").val());
        }
    });
}

window.onload = function(){
    setupFirebase();
    //alert("ok");
}