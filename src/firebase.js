import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  	apiKey: 'AIzaSyBxaFN5Dx09sbV-UPZD1k-3QxtuSgKvsTE',
	authDomain: 'react-auth-b78f4.firebaseapp.com',
	projectId: 'react-auth-b78f4',
	storageBucket: 'react-auth-b78f4.appspot.com',
	messagingSenderId: '27796843835',
	appId: '1:27796843835:web:5a7011a6fe6d8db4039b1e',
	measurementId: 'G-8491XD2Z4H',
}

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
export { auth, provider };
export default getFirestore();