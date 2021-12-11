
var firebaseConfig = { 
      apiKey: "AIzaSyCXeAf7H6ZP4FtDpAlDewm9w2Zvp70CIAo",
      authDomain: "kwitter-de801.firebaseapp.com",
      databaseURL: "https//kwitter-de801-default-rtdb.firebaseio.com",
      projectId: "kwitter-de801",
      storageBucket: "kwitter-de801.appspot.com",
      messagingSenderId: "763787621391",
      appId: "1:763787621391:web:521aad2ae833db21d09f7a"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
