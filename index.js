

// // Q1

// var number= +window.prompt("Enter number");
// document.getElementById("demo").innerHTML=number;
// console.log( number);
// console.log(typeof number);


// ----------------------------------------------------

// //Q2

// var number= +window.prompt("Enter number divide by 3 and 4");

// if( number%3 === 0 &&  number%4 === 0){
//     document.getElementById("demo").innerHTML="Yes";
// }
// else{
//     document.getElementById("demo2").innerHTML="No";
// }
// ----------------------------------------------------------------------

// //Q3

// var num1= +window.prompt("Enter number 1");
// var num2= +window.prompt("Enter number 2");

// if( num1 > num2 ){
//     document.getElementById("demo").innerHTML=num1;
// }
// else if(num2 > num1){
//     document.getElementById("demo").innerHTML=num2;
// }
// else{
//     document.getElementById("demo").innerHTML="Enter 2 valid integer numbers to get max number";
// }
// ---------------------------------------------------------------------

// Q4

// var num1= +window.prompt("Enter number 1");


// if( num1 >= 0 ){
//     document.getElementById("demo").innerHTML="Postive number";
// }
// else  {
//     document.getElementById("demo").innerHTML="Negative number";
// }
//------------------------------------- ------------------------------------------

// //Q5 

// var num1= +window.prompt("Enter number 1");
// var num2= +window.prompt("Enter number 2");
// var num3= +window.prompt("Enter number 3");

// if(  num1 > num2 && num1 > num3 ){
//         document.getElementById("demo").innerHTML='Max element = ' + num1 ;
//     }
//     else if(num2 > num1 && num2 > num3){
//         document.getElementById("demo").innerHTML="Max element = " + num2;
//     }
//     else if (num3 > num1 && num3 > num2){
//         document.getElementById("demo").innerHTML="Max element = " + num3;
//     };


//  if(  num1 < num2 && num1 < num3 ){
//         document.getElementById("demo2").innerHTML='Min element = ' + num1 ;
//     }
//     else if(num2 < num1 && num2 < num3){
//         document.getElementById("demo2").innerHTML="Min element = " + num2;
//     }
//     else if (num3 < num1 && num3 < num2){
//         document.getElementById("demo2").innerHTML="Min element = " + num3;
//     };
// ----------------------------------------------------------------------------

//Q6

// var num= +window.prompt("Enter number ");

// if(  num%2 === 0 )
//     {
//         document.getElementById("demo").innerHTML=" Even " ;
//     }
//     else {
//         document.getElementById("demo").innerHTML=" Odd " ;
//     } ;

//-----------------------------------------------------------------------------

// //Q7 

// var char1= window.prompt("Enter a character ");
            
// if(  char1==="a" ||  char1==="A" || char1==="e" || char1==="E" || char1==="i" || char1==="I" || char1==="o" || char1==="O" || char1==="u" || char1==="U" )
//     {
//                          document.getElementById("demo").innerHTML=" vowel " ;
//             }
//             else {
//                         document.getElementById("demo").innerHTML=" Consonant " ;
//                     } ;

//-------------------------------------------------------------------

// //Q8

// var num1= +window.prompt("Enter number ");
// for(i=1;i<=num1;i++){
//     console.log(i);
    
// }

//--------------------------------------------------------------------

//Q9

// var num1= +window.prompt("Enter number ");
// for(i= 2;i<=12;i++){
//     console.log( num1*i);
   
// }
//-------------------------------------------------------------

//Q10

// var num1= +window.prompt("Enter number ");
// for(i= 1;i<=num1;i++){
//     if(i%2===0)
//     console.log(i);
// }


//---------------------------------------------------------

// //Q11

// var num1= +window.prompt("Enter number ");
// var num2= +window.prompt("Enter number ");



//     var sum = 1; 
// for ( i=0;i<num2;i++) { 
//   sum = sum * num1; 
  
// }
// console.log(sum);
// document.getElementById("demo").innerHTML=sum ;

//--------------------------------------------------------------

// //Q12 

// var num1= +window.prompt("Enter mark 1 ");
// var num2= +window.prompt("Enter mark 2 ");
// var num3= +window.prompt("Enter mark 3 ");
// var num4= +window.prompt("Enter mark 4 ");
// var num5= +window.prompt("Enter mark 5 ");


// var sum=num1+num2+num3+num4+num5;
// var avr=sum /5;
// var per=(avr*100)/100;
// document.getElementById("demo1").innerHTML="Total Marks = " + sum ;
// document.getElementById("demo2").innerHTML="Average Marks = " + avr;
// document.getElementById("demo3").innerHTML="Percentage = " + per;

// ------------------------------------------------------------------

// //Q13

// var num1= +window.prompt("Enter Month Number ");
// if(num1===1|| num1===3|| num1===5||num1===7||num1===8||num1===10||num1===12){
//     document.getElementById("demo").innerHTML="Days in Month: 31" ;
// }
// else if(num1===4||num1===6||num1===9||num1===11){
//     document.getElementById("demo").innerHTML="Days in Month: 30" ;
// }
// else if (num1===2){
//     document.getElementById("demo").innerHTML="Days in Month: 28" ;
// }

// else {
//     document.getElementById("demo").innerHTML="you entered wrong number write from 1 to 12" ;
// }

//////-----------------------------------------------------------------

// //Q14 

// var num1= +window.prompt("Enter Marks Of Physics ");
// var num2= +window.prompt("Enter Marks Of Chemistry ");
// var num3= +window.prompt("Enter Marks Of Biology ");
// var num4= +window.prompt("Enter Marks Of Mathematics ");
// var num5= +window.prompt("Enter Marks Of Computer ");

// var sum=num1+num2+num3+num4+num5;
// var percentage = (sum / (5 * 100)) * 100;
// console.log(percentage);

// if(percentage>=90){
//     document.getElementById("demo").innerHTML="Grad A" ;
// }
// else if(percentage>=80 && percentage<90 ){
//     document.getElementById("demo").innerHTML="Grad B" ;
// }
//  else if(percentage>=70 && percentage<80 ){
//     document.getElementById("demo").innerHTML="Grad C" ;
// }
// else if(percentage>=60 && percentage<70 ){
//     document.getElementById("demo").innerHTML="Grad D" ;
// }
// else if(percentage>=40 && percentage<60){
//     document.getElementById("demo").innerHTML="Grad E" ;
// }

// if(percentage<40){
//     document.getElementById("demo").innerHTML="Grad F" ;
// };

    // ---------------------------------------------


//     // Q15

// var num= +window.prompt("Enter Month Number ");
// switch(num){
//     case 1:
//     case 3: 
//     case 5: 
//     case 7: 
//     case 8:
//     case 10:
//     case 12:
//         console.log("Days in Month: 31");
//         document.getElementById("demo").innerHTML="Days in Month: 31" ;
//         break;
    
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log("Days in Month: 30");
//         document.getElementById("demo").innerHTML="Days in Month: 30" ;
//         break;
    
//     case 2:
//         console.log("Days in Month: 28");
//         document.getElementById("demo").innerHTML="Days in Month: 28" ;
//         break;

//     default:
//         console.log("you entered wrong number write from 1 to 12");
//         document.getElementById("demo").innerHTML="you entered wrong number write from 1 to 12" ;
// }

// ------------------------------------------------------------------------------

// Q16
// var char1= window.prompt("Enter a character ");
// switch(char1){
//     case "a":
//     case "A":
//     case "e":
//     case "E":
//     case 'i':
//     case "I":
//     case "o":
//     case "O":    
//     case "u":
//     case "U":
//     console.log("vowel");
//     document.getElementById("demo").innerHTML=" vowel " ;
//     break;

//     default:
//         console.log("Consonant");
//         document.getElementById("demo").innerHTML=" Consonant " ;
// }

 //----------------------------------------------------
// Q17
// var num1= +window.prompt("Enter number 1");
// var num2= +window.prompt("Enter number 2");
// switch (true){

//     case (num1 > num2) :
//         document.getElementById("demo").innerHTML=num1;
//         break;
    
//     case (num2 > num1):
//         document.getElementById("demo").innerHTML=num2;
//         break;

//     default:
//         document.getElementById("demo").innerHTML="Enter 2 valid integer numbers to get max number";
    
// }
// -------------------------------------------------------------------

// Q18
// var num= +window.prompt("Enter number ");

// switch ( num%2 === 0 ){

//     case (true) :
//     document.getElementById("demo").innerHTML=" Even " ;
//     break;

//     case (false) :
//     document.getElementById("demo").innerHTML=" Odd " ;
//     break;

// }

// ---------------------------------------------------------------------
// Q19
// var num1= +window.prompt("Enter number ");


// switch(true){
// case  ( num1 > 0 ):
//     console.log("Postive number");
//     document.getElementById("demo").innerHTML="Postive number";
//     break;

//     case  ( num1 < 0 ):
//     console.log("Negative number");
//     document.getElementById("demo").innerHTML="Negative number";
//     break;

//     case( num1 === 0 ):
//     console.log("Zero number");
//     document.getElementById("demo").innerHTML="Zero number";
//     break;
// }

// -----------------------------------------------------------
// Q20
// var oper= window.prompt("Enter Operation (+ , - , * , / )");
// var num1= +window.prompt("Enter Number 1 ");
// var num2= +window.prompt("Enter Number 2 ");

// switch (oper) {
//     case "+":
//         document.getElementById("demo").innerHTML = num1 + num2;
//       break;
//     case "-":
//         document.getElementById("demo").innerHTML = num1 - num2;
//       break;
//     case '*':
//         document.getElementById("demo").innerHTML = num1 * num2;
//       break;
//     case '/':
//       if (num2 === 0) {
//         console.log("Error: Division by zero is not allowed.");
//         document.getElementById("demo").innerHTML = "Error: Division by zero is not allowed.";
//         break;
//     }
//       document.getElementById("demo").innerHTML  = num1 / num2;
//       break;
//     default:
//       console.log("Error: Invalid operation.");
//       document.getElementById("demo").innerHTML = "Error: Invalid operation.";
//   }

    // ---------------------------------------
