const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
})


const newsRef = firebase.database().ref('news');
const ticker = document.getElementById('ticker');

newsRef.on('value', (snapshot) => {
  const newsText = snapshot.val();
  ticker.innerHTML = `<p>${newsText}</p>`;
});


  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
  import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-database.js";

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD0iYIJxlamljCScCdXfZqIKybV99y7LZE",
    authDomain: "seetatv-7c704.firebaseapp.com",
    databaseURL: "https://seetatv-7c704-default-rtdb.firebaseio.com",
    projectId: "seetatv-7c704",
    storageBucket: "seetatv-7c704.appspot.com",
    messagingSenderId: "47823808148",
    appId: "1:47823808148:web:73c9bc93ee2be6324fb681"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase();

  // Get the news list element
  const newsList = document.getElementById('news-list');

  // Listen for updates to the 'news' node in the Firebase database
  onValue(ref(db, 'news'), (snapshot) => {
    // Get the news data from the snapshot
    const newsData = snapshot.val();

    // Check if there is any news data
    if (newsData) {
      // Loop through the news data and display it in the news list element
      Object.entries(newsData).forEach(([key, value]) => {
        const newsItem = document.createElement('div');
        newsItem.innerHTML = `<h3>${value.theme}</h3><p>${value.message}</p>`;
        newsList.appendChild(newsItem);
      });
    }
  });
