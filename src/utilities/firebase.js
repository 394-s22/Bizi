import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB5MB0_czvXQceLJXSprAbrF6z_Wv6SIKY",
    authDomain: "bizi-aabc7.firebaseapp.com",
    databaseURL: "https://bizi-aabc7-default-rtdb.firebaseio.com",
    projectId: "bizi-aabc7",
    storageBucket: "bizi-aabc7.appspot.com",
    messagingSenderId: "791491230288",
    appId: "1:791491230288:web:91c69688744f2b59602f55",
    measurementId: "G-3DLW360CDE"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

