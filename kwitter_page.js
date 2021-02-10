//YOUR FIREBASE LINKS
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
  
  room_name = localStorage.getItem("room_name");
  user_name = localStorage.getItem("user_name");
  
  function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
      });
  
      document.getElementById("msg").value = "";
  }
  
  function getData() { firebase.database().ref("/" + room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
      //Start code
      console.log(firebase_message_id);
      console.log(message_data); 
      name = message_data['name']; 
      message = message_data['message']; 
      like = message_data['like']; 
      name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>"; 
      message_with_tag = "<h4 class='message_h4'>" + message + "</h4>"; 
      like_button ="<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>"; 
      span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>"; 
      row = name_with_tag + message_with_tag +like_button + span_with_tag; 
      document.getElementById("output").innerHTML += row;
      //End code
   } });  }); }
  //getData();
  
  function logout() {
      localStorage.romoveItem("user_name");
      localStorage.romoveItem("room_name");
      window.location = "kwitter.html";
  }