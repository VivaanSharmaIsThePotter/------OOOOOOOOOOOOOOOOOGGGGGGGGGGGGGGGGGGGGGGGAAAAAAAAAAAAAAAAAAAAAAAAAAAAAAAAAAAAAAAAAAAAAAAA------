// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBZCuEwXSnX_Q7XF4V5wrfukYwlTiDnKIU",
    authDomain: "vivaan-sharma-dxfk.firebaseapp.com",
    databaseURL: "https://vivaan-sharma-dxfk-default-rtdb.firebaseio.com",
    projectId: "vivaan-sharma-dxfk",
    storageBucket: "vivaan-sharma-dxfk.appspot.com",
    messagingSenderId: "795772565210",
    appId: "1:795772565210:web:44a61b0f8dcf6436c5d7e3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {
    
    firebase.database().ref("/").on('value', function(snapshot) {
          document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) {
                childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id='" + Room_names + "' onclick='redirectToRoomName(this.id)'> #" + Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.romoveItem("user_name");
    localStorage.romoveItem("room_name");
    window.location = "index.html";
}