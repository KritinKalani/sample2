const firebaseConfig = {
    apiKey: "AIzaSyAnpOdfO7NkRrVXNtH1BeKukOqPhONuFw4",
    authDomain: "feedbackform-pp.firebaseapp.com",
    projectId: "feedbackform-pp",
    storageBucket: "feedbackform-pp.appspot.com",
    messagingSenderId: "369218986545",
    appId: "1:369218986545:web:b92f1abfea0999588c6b10"
  };
  const app = initializeApp(firebaseConfig);

  const db = firebase.firestore();