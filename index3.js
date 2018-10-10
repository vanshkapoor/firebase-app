firebase.auth().onAuthStateChanged(function(user) {
  if (user) {

    $('.login-cover').hide();
    var dialog = document.querySelector('dialog');
     if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    dialog.close();


  } else {

    //shows the dialogue content
    $('.login-cover').show();
     var dialog = document.querySelector('dialog');
     if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    dialog.showModal();
  }
});

var loginbtn = document.querySelector('#loginbtn');

loginbtn.addEventListener("click",function(){

  var email =document.querySelector('#email').value;
  var password =document.querySelector('#password').value;
  
  if(email!=''&& password!=''){

      document.getElementById('login-progress').style.display = 'block';
      document.getElementById('loginbtn').style.display = 'none';

      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      
      var error=document.getElementById('error');
      error.innerText=error.message;
      error.style.display='block';

      

      document.getElementById('login-progress').style.display = 'none';
      document.getElementById('loginbtn').style.display = 'block';


      });
  }

});

/* sign out */
var logout = document.getElementById('logout');
logout.addEventListener("click",function(){

      firebase.auth().signOut().then(function() {
      
    })
});






