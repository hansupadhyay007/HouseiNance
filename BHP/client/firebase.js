  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
  import { getDatabase } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyApkk8JF7w6R-m4Y_qjnFuIbtiPln4I6Ek",
    authDomain: "houseinance-b1fb4.firebaseapp.com",
    databaseURL: "https://houseinance-b1fb4-default-rtdb.firebaseio.com",
    projectId: "houseinance-b1fb4",
    storageBucket: "houseinance-b1fb4.appspot.com",
    messagingSenderId: "357638210838",
    appId: "1:357638210838:web:f7da9b2cc6bf9e6a9f3c37"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const auth = getAuth();

  const signedUp = document.getElementById('signedUp');
  signedUp.addEventListener('click',(event)=>{
    event.preventDefault();

    var email = document.getElementById('username').value;
    var password = document.getElementById('password').value;


createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert('User Created');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert('errorMessage');
    // ..
  });
  })

