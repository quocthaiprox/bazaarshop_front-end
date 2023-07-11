
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAxwrIzxxbkFqaVwfUm8M0_7moNfyyyzJI",
  authDomain: "bazarshop-56ba3.firebaseapp.com",
  projectId: "bazarshop-56ba3",
  storageBucket: "bazarshop-56ba3.appspot.com",
  messagingSenderId: "748329148022",
  appId: "1:748329148022:web:0a38d77721290430070957",
  measurementId: "G-5MMDXG98TE"
};

export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);