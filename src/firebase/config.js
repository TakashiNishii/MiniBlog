import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCOwk5JdlN91bRjfoeekQ9z4Jmp5nBowOk",
  authDomain: "miniblog-59e1c.firebaseapp.com",
  projectId: "miniblog-59e1c",
  storageBucket: "miniblog-59e1c.appspot.com",
  messagingSenderId: "151449841950",
  appId: "1:151449841950:web:17b3eb7dac1bd53a8a190f",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
