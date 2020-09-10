


    window.fbAsyncInit = function() {
        FB.init({
          appId      : '750487372460669',
          cookie     : true,
          xfbml      : true,
          version    : 'v8.0'
        });
          
        FB.AppEvents.logPageView();   
          
      };
    
      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "https://connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));


function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }


  
FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
    print(response);
    console.log(response);
});





function statusChangeCallback(response) {  // Called with the results from FB.getLoginStatus().
  console.log('statusChangeCallback');
  console.log(response);                   // The current login status of the person.
  if (response.status === 'connected') {   // Logged into your webpage and Facebook.
    testAPI();  
  } else {                                 // Not logged into your webpage or we are unable to tell.
    document.getElementById('status').innerHTML = 'Please log ' +
      'into this webpage.';
  }
}


function checkLoginState() {               // Called when a person is finished with the Login Button.
  FB.getLoginStatus(function(response) {   // See the onlogin handler
    statusChangeCallback(response);
  });
}

function testAPI() {                      // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
  console.log('Welcome!  Fetching your information.... ');
  
  FB.api('/me?fields=id,name,email,first_name,friends', function(response) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("txtHint").innerHTML = this.responseText;
      }
    };
    xmlhttp.open("get","?page=signup&action=connection&token="+ response,true);
    xmlhttp.send();
    console.log('Successful login for: ' + response.name);
    console.log('mail : '+ response.email);
    console.log('List of friend : ' +response.friends);
    console.log(response);
    document.getElementById('status').innerHTML =
      'Vous êtes connecté en tant que : ' + response.name+ ' ?';
    document.getElementById('mail').value= response.email;
    document.getElementById('token').value= response.id;
    document.getElementById('name').value= response.name;
  });
}


function logout() {
  FB.logout(function(response) {
    // Person is now logged out
 });
}





