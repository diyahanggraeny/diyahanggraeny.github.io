function myFunction() {
    var pass = document.getElementById("myInput");

    if (pass.type === "password") {pass.type = "text";}
    else {pass.type = "password";}
}

function passStrength(){
    var login_count = 0;
    var max_length = 16;
    var min_length = 8;
    var pass = (document.getElementById("myInput").value);

    if (pass.length > max_length || pass.length < min_length){
        document.getElementById('myInput').value = '';}   
}
