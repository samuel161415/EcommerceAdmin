import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXCdp5ULxIITpQhIVtvSpOGDTXa9huVXg",
  authDomain: "shop-deab1.firebaseapp.com",
  projectId: "shop-deab1",
  storageBucket: "shop-deab1.appspot.com",
  messagingSenderId: "319831094281",
  appId: "1:319831094281:web:d5180681f234c3c41fb4d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;