import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useContext, useState } from 'react';
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import './Login.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";


if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}




function Login() {
  const [newUserami, setNewUserami] = useState(false)
  const [user, setUser] = useState({
    isSignIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  })
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } }
  const provider = new firebase.auth.GoogleAuthProvider();
  const fbProvider = new firebase.auth.FacebookAuthProvider();




  const handleClickGoogle = () => {
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        const user2 = result.user
        const { displayName, photoURL, email } = user2;
        const singInGoogle = {
          isSignIn: true,
          name: displayName,
          email: email,
          photo: photoURL
        }
        setLoggedInUser(singInGoogle)
        setUser(singInGoogle)
        history.replace(from);
      }).catch(err => {
        console.log(err);
        console.log(err.massage);
      })
  }
  const handleClickFb = () => {
    firebase
      .auth()
      .signInWithPopup(fbProvider)
      .then(result => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // The signed-in user info.
        var user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var accessToken = credential.accessToken;
        const { displayName, photoURL, email } = user;
        const singInFb = {
          isSignIn: true,
          name: displayName,
          email: email,
          photo: photoURL
        }
        setLoggedInUser(singInFb)
        setUser(singInFb)
        history.replace(from);
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log(errorCode, errorMessage, email, credential);
        // ...
      });
  }
  
  const handleClickGoogle2 = () => {
    firebase.auth().signOut().then((res) => {
      const signOut = {
        isSignIn: false,
        name: '',
        email: '',
        photo: '',
        error: '',
        Congratulations: ''
      }

      setUser(signOut)
    }).catch(err => {
      console.log(err);
      console.log(err.massage);
    });
  }

  const handleSubmit = (e) => {
    if (user.name && user.email && user.password) {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.Congratulations = true;
          newUserInfo.isSignIn = true;
          setUser(newUserInfo)
          setLoggedInUser(newUserInfo)
          updateUser(user.name)
          history.replace(from)
        })
        .then((userCredential) => {
          // Signed in 
          var user = userCredential.user;
          history.replace(from)
          // ...
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.code;
          newUserInfo.Congratulations = false;
          newUserInfo.isSignIn = false;
          setUser(newUserInfo)
          history.replace(from);
          // ..
        });
    }
    if (!newUserami && user.email && user.password) {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          setUser(newUserInfo)
          setLoggedInUser(newUserInfo)
          history.replace(from)
          console.log(res.user);
        })
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.code;        
          setUser(newUserInfo)
        });
    }
    e.preventDefault();
  }
  const handleChange = (e) => {
    let isFormValid = true;
    // console.log(e.target.name, e.target.value);
    if (e.target.name === 'email') {
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
      // console.log(isFormValid);
    }
    if (e.target.name === 'password') {
      const isPassword = e.target.value.length >= 6;
      const isPasswordNumber = /\d{1}/.test(e.target.value);
      isFormValid = isPassword && isPasswordNumber;
    }
    if (isFormValid) {
      const newUser = { ...user }
      newUser[e.target.name] = e.target.value;
      setUser(newUser);
    }
  }
  const updateUser = name => {
    var user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name,
    }).then(function () {
      console.log(";lakh;lgfjhklghkghbjgfhbgfbhjgfhbjgvbjkgfbjgfkjgfkjbh");
    }).catch(function (error) {
      // An error happened.
    });
  }
  return (
    <div style={{ textAlign: 'center' }} className="div">
      <div className="or">{user.isSignIn ? <button onClick={handleClickGoogle2}>Sign Out</button> : <button onClick={handleClickGoogle}><FontAwesomeIcon style={{color:'red'}} icon={faGoogle}/> Google</button>}<br />
      <button onClick={handleClickFb}><FontAwesomeIcon style={{color:'blue'}} icon={faFacebook}/> Facebook</button><br /></div>
      <h4>or</h4>
      <div className="form">
      <input type="checkbox" onChange={() => setNewUserami(!newUserami)} name="new" id="" />
      <label htmlFor="new">New User</label>
      <form onSubmit={handleSubmit} action="" >
        {newUserami && <input type="text" onChange={handleChange} required placeholder="Name" name="name" id="" />
        }<br />
        <input name="email" onChange={handleChange} placeholder="Email" type="email" id="" required />
        <br />
        <input name="password" onChange={handleChange} placeholder="Password" type="password" id="" required />
        <br />
        {newUserami ? <input type="submit" value="sign up" /> : <input type="submit" value="log in" />}
        <br /><br /><br />
      </form>
      </div>
      <h2 style={{ fontSize: '5vmin' }}>{user.error}</h2>
    </div>
  );
}

export default Login;
