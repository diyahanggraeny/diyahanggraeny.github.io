function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    document.getElementById("mynik").value = profile.getId();
    console.log('Name: ' + profile.getName());
    document.getElementById("myname").value = profile.getName();
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

 function renderButton() {
      gapi.signin2.render('my-signin2', {
        'scope': 'profile email',
        'width': 280,
        'height': 40,
        'longtitle': true,
        'theme': 'dark',
        'onsuccess': onSuccess,
        'onfailure': onFailure
      });
    }
