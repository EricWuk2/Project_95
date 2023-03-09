

var firebaseConfig = {
    apiKey: "AIzaSyDcMskcBujdeXOYbR4dZ2qj0OGM-C_sRcs",
    authDomain: "kwitter-aa1b8.firebaseapp.com",
    databaseURL: "https://kwitter-aa1b8-default-rtdb.firebaseio.com",
    projectId: "kwitter-aa1b8",
    storageBucket: "kwitter-aa1b8.appspot.com",
    messagingSenderId: "151383019749",
    appId: "1:151383019749:web:c33bd665abc50f76ff040c"
  };
  
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + username + " !";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
  }

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    console.log("Room Name - " + Room_names);
    row = "<div> class='room_name' id"+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
    });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}