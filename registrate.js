
import { initializeApp } from 'www.gstatic.com/firebasejs/7.20.0/firebase-app.js';

import {sendEmailVerification, getAuth, signInWithPopup, 
    createUserWithEmailAndPassword, signInWithEmailAndPassword,  
    onAuthStateChanged} from 'www.gstatic.com/firebasejs/7.20.0/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyC9HMeCENFJ5zfPZz2DbqQ4LdQf6LBRJAA",
  authDomain: "owl-studios.firebaseapp.com",
  projectId: "owl-studios",
  storageBucket: "owl-studios.appspot.com",
  messagingSenderId: "50525631416",
  appId: "1:50525631416:web:eed915553c36f7326f154d",
  measurementId: "G-LR7PHK1R0J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

registo.addEventlistener('click', (e) => {
    var email = document.getElementById('emailreg').value;
    var password = document.getElementById('passwordreg').value;

    createUserWithEmailAndPassword(auth, email, password). then(cred =>{
        alert ("Usuario creado");
        sendEmailVerification(auth.currentUser),then(() => {
            alert('Se ha enviado un correo de verificación')
        })
    }).catch(error => {
        const errorCode = error.code;

        if(errorCode == 'auth/email-already-in-use')
            alert("Correo en uso");
        else if(errorCode == 'auth/invalid-email')
            alert("El correo no es valido");
        else if(errorCode == 'auth/weak-password')
            alert("La contraseña debe tener al menos 6 caracteres");
    });
    
});