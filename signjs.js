function valid(){
var uname=document.getElementById("uname").value;
console.log(uname);
var password=document.getElementById("password").value;
console.log(password);
if(uname=="sssv" && password=="pallavi"){
    window.location="index.html"
}
else{
    alert("invalid login")
}
}