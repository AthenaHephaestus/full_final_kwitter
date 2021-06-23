
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBzveC3cJ2J4v-7-tQY_2MOw8EXyY-_uBU",
      authDomain: "kwitter-47a8c.firebaseapp.com",
      databaseURL: "https://kwitter-47a8c-default-rtdb.firebaseio.com",
      projectId: "kwitter-47a8c",
      storageBucket: "kwitter-47a8c.appspot.com",
      messagingSenderId: "285993455876",
      appId: "1:285993455876:web:e2b6e55e0c1df466760051"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    var username = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome, " + username + "!";
    function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+ Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
            window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
            window.location = "index.html"; 
}