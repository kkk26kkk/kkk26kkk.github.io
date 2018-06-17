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
        const td_team = document.createElement("td");
        const td_play = document.createElement("td");
        const td_score = document.createElement("td");

        td_team.innerText = snap.child("team").val();
        td_play.innerText = snap.child("play").val();
        td_score.innerText = snap.child("score").val();

        tr.appendChild(td_team);
        tr.appendChild(td_play);
        tr.appendChild(td_score);

        tr.id = snap.key;   // snap.key(firebase의 row id)가 table row의 id로 들어감
        list.appendChild(tr);
    });
}

window.onload = function(){
    setupFirebase();
    //alert("ok");
    var btnSave = document.getElementById("save");
    //btnSave.onclick = function(){} #old style
    btnSave.addEventListener("click", function(){
        var sel = document.getElementById("team");
        var team = sel.options[sel.selectedIndex].value;

        var play = document.getElementById("play").value;
        var score = document.getElementById("point").value;

        console.log(sel);
        console.log(play);
        console.log(score);

        firebase.database().ref().child("dashboard").push().set({
            team : team,
            play : play,
            score : score
        });
    });



}