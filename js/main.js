/**fizzbuzz
Author: Derek SCarlett
LIC: GPLv3
*/
//user enters thier age


//user presses submit,
document.getElementById("submit").onclick = fizzbuzz
//get value from input
function fizzbuzz(){
//get what the number means from the input
var num = parseFloat(document.getElementById("enter").value)
//get user results from input
//hides answer buttons
document.getElementById("fizz").style.visibility="hidden";
document.getElementById("buzz").style.visibility="hidden";
document.getElementById("fizzbuzz").style.visibility="hidden";
document.getElementById("error").style.visibility="hidden";
//if user input is divisable by 3 and by 5 with no remainder the display fizzbuzz
 if(num%3==0 && num%5==0){
   document.getElementById("result").innerHTML= "Fizzbuzz!" ;
   document.getElementById("enter").value = "" ;
   //shows why fizz button
   document.getElementById("fizzbuzz").style.visibility="visible";
   document.getElementById("fizzbuzz").onclick = fizzbuzz;
   //diplays answer when button why fizzbuzz is presseed
   function fizzbuzz(){
    document.getElementById("why").innerHTML= "This number is divisable by 3 and 5 with no remainder" ;
   }
 }
//if user input is divisable by 3 with no remainder then display fizz
 else if(num%3==0){
   document.getElementById("result").innerHTML= "Fizz..." ;
   document.getElementById("enter").value = "" ;
   //shows why fizz button
   document.getElementById("fizz").style.visibility="visible";
   document.getElementById("fizz").onclick = fizz;
   //diplays answer when button why fizz is presseed
   function fizz(){
    document.getElementById("why").innerHTML= "This number is divisable by 3 with no remainder" ;
   }
 }
//if user input is divisable by 5 with no remainder then display buzz
 else if(num%5==0){
   document.getElementById("result").innerHTML= "buzz..." ;
   document.getElementById("enter").value = "" ;
   //shows why buzz button
   document.getElementById("buzz").style.visibility="visible";
   document.getElementById("buzz").onclick = buzz;
   //diplays answer when button why buzz is presseed
   function buzz(){
    document.getElementById("why").innerHTML= "This number is divisable by 5 with no remainder" ;
   }
 }else{
   document.getElementById("result").innerHTML= "Sorry I didnt get that try another value" ;
   document.getElementById("enter").value = "" ;
   //shows error button
   document.getElementById("error").style.visibility="visible";
   document.getElementById("error").onclick = error;
   //diplays answer when button error is presseed
   function error(){
    document.getElementById("why").innerHTML= "This number is not divisable by 3 or 5 without a remainder" ;
   }
 }
}
