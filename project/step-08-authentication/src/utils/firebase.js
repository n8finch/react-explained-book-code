import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyBC1S7THylt_UkO9kZXWq_oje7Bp3z1Iv0",
	authDomain: "react-blog-demo-2254a.firebaseapp.com",
	projectId: "react-blog-demo-2254a",
	storageBucket: "react-blog-demo-2254a.appspot.com",
	messagingSenderId: "504466261988",
	appId: "1:504466261988:web:903e3f59ddfc22e358a9f1",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
