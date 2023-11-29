/* Change the configuration */

var firebaseConfig = {
    apiKey: "AIzaSyBLNHx72vW060ST1_tQrYHPSjD9ttKDQs0",
    authDomain: "securityawareness-3bd4d.firebaseapp.com",
    projectId: "securityawareness-3bd4d",
    storageBucket: "securityawareness-3bd4d.appspot.com",
    messagingSenderId: "969847294",
    appId: "1:969847294:web:3fd0d1124b0f000c54d0af",
    measurementId: "G-68MK1P2DQP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // enter data in
  $("input[type='button']").click(function (e) {
    //get the value of form
    var inputData = $('form').serializeArray();
    var data = {};
    inputData.forEach((entry)=>{
      console.log(entry);
      data[entry.name]=entry.value;
    });
    console.log(data);
    firebase.firestore().collection("feedback").add(data);
    /* clear the entry */
    $('form')[0].reset();
  });
  
  
  /* array example
  const array1 = ['a', 'b', 'c'];
  array1.forEach(element => console.log(element));
  */
  
  /* read the data from the database */
  
  
  firebase
    .firestore()
    .collection('feedback')
    .onSnapshot((querySnapshot) => {
      console.log(querySnapshot.size);
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        console.log(doc.data().recommend);
        console.log(doc.data().feedback);
      });
    });
  