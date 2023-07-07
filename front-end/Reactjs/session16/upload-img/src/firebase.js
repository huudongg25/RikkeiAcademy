// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsrMNmj-fIYZgRhyRWQOhozII4iKLyJbQ",
  authDomain: "upload-img-reactjs-64638.firebaseapp.com",
  projectId: "upload-img-reactjs-64638",
  storageBucket: "upload-img-reactjs-64638.appspot.com",
  messagingSenderId: "330797784140",
  appId: "1:330797784140:web:f7e38a4b8e88ca8b3068e9",
  measurementId: "G-0KYJ6DNXB0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app)

export default storage