import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDpZlYi1M_KhlA9LwtF-_tw9JNfvG4AFSk",
  authDomain: "recette-app-c36a7.firebaseapp.com",
  databaseURL: "https://recette-app-c36a7.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
