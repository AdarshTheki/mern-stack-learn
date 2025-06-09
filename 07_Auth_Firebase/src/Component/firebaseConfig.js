import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPgdJTEH3PusqMHrP_HiYSmtsBmmHyisA",
  authDomain: "new-firebase-project-8faa3.firebaseapp.com",
  databaseURL: "https://new-firebase-project-8faa3-default-rtdb.firebaseio.com",
  projectId: "new-firebase-project-8faa3",
  storageBucket: "new-firebase-project-8faa3.appspot.com",
  messagingSenderId: "139859263521",
  appId: "1:139859263521:web:ae7eba627e3783d3a5e360",
  measurementId: "G-PJC2T1C302",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
