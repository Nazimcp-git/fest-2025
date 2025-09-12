const firebaseConfig = {
            apiKey: "AIzaSyBXJ_RnfjUDi7qPDATWVnS5lSFw6jVRYgo",
            authDomain: "shopping-e284c.firebaseapp.com",
            databaseURL: "https://shopping-e284c-default-rtdb.firebaseio.com",
            projectId: "shopping-e284c",
            storageBucket: "shopping-e284c.appspot.com",
            messagingSenderId: "248274428739",
            appId: "1:248274428739:web:fc30dd9eb1ef83f610c5f6",
            measurementId: "G-ZXZCK9BW7T"
        };

        // --- CONSTANTS ---
        const CATEGORIES = ["BIDAYA", "UOOLA", "THANIYA", "THANAWIYYA", "ALIYA", "KULLIYYA"];

        // --- INITIALIZE FIREBASE ---
        firebase.initializeApp(firebaseConfig);
        const db = firebase.database();
        const auth = firebase.auth();