function mySign(){
  //var m=document.forms["signUp"]["ename"];
  var n=document.forms["signUp"]["cename"].value;
  var x=document.forms["signUp"]["password"].value;
  var q=document.forms["signUp"]["nick"].value;
  var r=document.getElementById("one");
  var s=document.getElementById("two");
  var t=document.getElementById("three");

  if (document.forms["signUp"]["ename"].value==""){
    alert("Please enter the email.");
    document.forms["signUp"]["ename"].focus();
    document.getElementById("box1").innerHTML="red";
    return false;
  }
  if(n==""){
    alert("Confirm the email.");
    return false;
  }
  if(x==""){
    alert("create a password.");
    return false;
  }
  if(q==""){
    alert("Give your name.");
    return false;
  }
}

function colorChange(){
  document.getElementById("flexRadioDefault").style.color="red";
}
function normalColor(){
  document.getElementById("flexRadioDefault").style.color="black";
}
