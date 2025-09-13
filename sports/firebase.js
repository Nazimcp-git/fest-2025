const firebaseConfig = {
            apiKey: "AIzaSyBGMfjKSH3fk1JOeQvSo2uzqlNTMMQFBWc",
  authDomain: "webcam-f1269.firebaseapp.com",
  databaseURL: "https://webcam-f1269-default-rtdb.firebaseio.com",
  projectId: "webcam-f1269",
  storageBucket: "webcam-f1269.appspot.com",
  messagingSenderId: "90764998407",
  appId: "1:90764998407:web:f97e4844b53f7fa1b7f7a2",
  measurementId: "G-FBE6KKQ1X2"
        };

        // --- CONSTANTS ---
        const CATEGORIES = ["BIDAYA", "UOOLA", "THANIYA", "THANAWIYYA", "ALIYA", "KULLIYYA"];

        // --- INITIALIZE FIREBASE ---
        firebase.initializeApp(firebaseConfig);
        const db = firebase.database();
        const auth = firebase.auth();