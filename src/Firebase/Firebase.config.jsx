// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzaAZyN9cRYYsCRORAa20-fGAF1gVWtzQ",
  authDomain: "small-paws.firebaseapp.com",
  projectId: "small-paws",
  storageBucket: "small-paws.appspot.com",
  messagingSenderId: "1009461597702",
  appId: "1:1009461597702:web:7fec1ad077f503195c1587"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app ;