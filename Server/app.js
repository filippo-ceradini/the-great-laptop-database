import express from "express"
const app = express()

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC47d-p_wooAYFe326HkNwXn7qh4K6Jd9o",
    authDomain: "greatlaptopdb.firebaseapp.com",
    projectId: "greatlaptopdb",
    storageBucket: "greatlaptopdb.appspot.com",
    messagingSenderId: "95506111525",
    appId: "1:95506111525:web:2433841401ad893eb4f3cc",
    measurementId: "G-KXLW656VCT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


app.get("/", (req, res) => {
    res.send("<center><h1>Welcome</h1></center>")
})



const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));
