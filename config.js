import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDylpH3aS9bx6MkR45LQN0CWdbQ8YAV75w",
  authDomain: "spectagram-2f503.firebaseapp.com",
  databaseURL: "https://spectagram-2f503-default-rtdb.firebaseio.com",
  projectId: "spectagram-2f503",
  storageBucket: "spectagram-2f503.appspot.com",
  messagingSenderId: "136759716230",
  appId: "1:136759716230:web:72837fc3a51a49b6c4a407"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default db;
