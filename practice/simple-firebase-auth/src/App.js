import logo from './logo.svg';
import './App.css';
import initalizeAuthentication from './firebase/firebase.initialize';
import {signInWithPopup,getAuth,GoogleAuthProvider,GithubAuthProvider} from 'firebase/auth'
initalizeAuthentication()
const googleProvider =new GoogleAuthProvider()
const githubProvider =new GithubAuthProvider()
const auth = getAuth()

function App() {
  const loginWithGoogle=()=>{
    signInWithPopup(auth,googleProvider)
    .then(result => console.log(result.user))
  }
  return (
    <div className="App">
      <button onClick={loginWithGoogle}>Login with google</button>
    </div>
  );
}

export default App;
