const counter = document.querySelector(".counter");
let count = 0;
setInterval(() => {
 if(count == 92) {
  clearInterval(count);
 }else {
  count+=1;
  counter.textContent = count + "%";
 }
}, 42);


<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-analytics.js";
  import { getDatabase } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-database.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDxgH_wPaUEBIAzvinpPBOMsV66g2iXYe0",
    authDomain: "seeta-dbea3.firebaseapp.com",
    projectId: "seeta-dbea3",
    storageBucket: "seeta-dbea3.appspot.com",
    messagingSenderId: "64180736056",
    appId: "1:64180736056:web:8bb3c529a07486d3c856cd",
    measurementId: "G-PV42RWHS09"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const database = getDatabase();

  // Function to upload news text to Firebase Realtime Database
  function uploadNewsText(newsText) {
    // Store the news text in the Firebase Realtime Database
    database.ref('news-ticker').set(newsText, function(error) {
      if (error) {
        console.log("Failed to store news text in Firebase Realtime Database: " + error);
      } else {
        console.log("Successfully stored news text in Firebase Realtime Database");
      }
    });
  }

  // Get a reference to the news ticker text input element
  var newsTextInput = document.getElementById("news-text");

  // Get a reference to the form element
  var form = document.getElementsByTagName("form")[0];

  // Add an event listener to the form submission event
  form.addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the value of the news text input field
    var newsText = newsTextInput.value;

    // Call the uploadNewsText function with the newsText parameter
    uploadNewsText(newsText);
  });
</script>
