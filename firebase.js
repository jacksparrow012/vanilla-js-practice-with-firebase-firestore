var firebaseConfig = {
    apiKey: "AIzaSyBpHGx7XkKKWxqbAY54D67GpraXydHeUS0",
    authDomain: "ninja-firestore-tutorial-6b87c.firebaseapp.com",
    projectId: "ninja-firestore-tutorial-6b87c",
    storageBucket: "ninja-firestore-tutorial-6b87c.appspot.com",
    messagingSenderId: "30194776952",
    appId: "1:30194776952:web:d1f7cf9c86188b01c7668d",
    measurementId: "G-34L50NTVMP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
// db.setting({ timestampsInSnapshot: true })

