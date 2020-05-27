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
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': onSuccess,
      'onfailure': onFailure
    });
}

function checkpass(){
    var pass = (document.getElementById("mypass").value);
    var cpass = (document.getElementById("mycpass").value);

    if (pass != cpass){
        document.getElementById('mypass').value = '';
        document.getElementById('mycpass').value = '';
    }
}

function checknum1(){
    var tp = (document.getElementById("mynum").value);
    var patt = /[+]/;
    var res = patt.test(tp);
    var patt2 = /[0-9]/;
    var res2 = patt2.test(tp);
    var patt3 = /[-]/;
    var res3 = patt3.test(tp);

    if(res == false || res2 == false || res3 == false){
        document.getElementById('mynum').value = ''; 
    }

}

function checknum2(){
    var tp = (document.getElementById("mynum2").value);
    var patt = /[+]/;
    var res = patt.test(tp);
    var patt2 = /[0-9]/;
    var res2 = patt2.test(tp);
    var patt3 = /[-]/;
    var res3 = patt3.test(tp);

    if(res == false || res2 == false || res3 == false){
        document.getElementById('mynum2').value = ''; 
    }

}

function myFunction() {
    var pass = document.getElementById("mypass");
    var cpass = document.getElementById("mycpass");

    if (pass.type === "password" && cpass.type == "password") {pass.type = "text"; cpass.type = "text"}
    else {pass.type = "password"; cpass.type = "password";}
}

function passStrength(){
    var login_count = 0;
    var max_length = 16;
    var min_length = 8;
    var pass = (document.getElementById("mypass").value);

    if (pass.length > max_length || pass.length < min_length){
        document.getElementById('mypass').value = '';}   
}
