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

function addUser() {

    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user name"
    });

    localStorage.setItem("user_name", user_name);

    window.location = "kwitter_room.html";
} 