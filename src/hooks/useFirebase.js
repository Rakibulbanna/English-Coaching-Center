import React, { useEffect, useState } from 'react';
import {
    getAuth, createUserWithEmailAndPassword, signInWithPopup,
    GoogleAuthProvider, signOut, signInWithEmailAndPassword,
    sendEmailVerification, updateProfile,onAuthStateChanged
} from "firebase/auth";

import initializeAuthentication from '../Firebase/firebase.initialize';



initializeAuthentication();

const useFirebase = () => {


    const [user, setuser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setisLogin] = useState(false);

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    //---------Accout creation by google



    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {

                // const { displayName, email, photoURL } = result.user;
                // const loggedInUser = {
                //     name: displayName,
                //     email: email,
                //     photo: photoURL
                // };
                setuser(result.user);
                  console.log(result.user);

            }).catch((error) => {
                console.log(error.message);
                setError(error.message);
                

            })
    }
//--- get current user


useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log('inside state change',user);
          setuser(user);
          
        } else {
          
        }
      });
}, [])

    //-------Sign out

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setuser({});
            })
    }

    const handleRegistration = (e) => {
        e.preventDefault();

        if (password.length < 6) {
            setError('Password must be 6 carecter !');
            return;
        }

        isLogin ? ProcessLogIn(email, password) : CreateNewUser(email, password);


    }

    //-----------------log in

    const ProcessLogIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {

                const user = result.user;
                setuser(user);
                //   console.log(user);
            })
            .catch((error) => {
                setError(error.message);
            });
    }


    //-------Registration

    const CreateNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {

                const user = result.user;
                // verifyEmail();
                setUserName();
            })
            .catch((error) => {

                setError(error.message);

            });
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {

            });
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(result => {

        }).catch((error) => {
            setError(error.message);
        });
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswprdChange = (e) => {
        setPassword(e.target.value);
    }



    const toggleLogIn = e => {
        setisLogin(e.target.checked);
    }
    return {
        user,
        error,
        isLogin,
        handleGoogleSignIn,
        handleSignOut,
        toggleLogIn,
        setisLogin,
        handleRegistration,
        ProcessLogIn,
        CreateNewUser,
        verifyEmail,
        setUserName,
        handleNameChange,
        handleEmailChange,
        handlePasswprdChange

    }
}

export default useFirebase;