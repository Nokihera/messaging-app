import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBlZKS7mft7wrvdIqAgKIJ4rxd5F6ZrYAY",
  authDomain: "messaging-app-d4665.firebaseapp.com",
  projectId: "messaging-app-d4665",
  storageBucket: "messaging-app-d4665.appspot.com",
  messagingSenderId: "1008289124744",
  appId: "1:1008289124744:web:dcf4e47328a1ad73c1ea3d",
  measurementId: "G-DNP7EP4PBE"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);