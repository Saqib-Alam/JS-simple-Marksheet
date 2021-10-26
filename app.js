// ------------PRACTICE----------


// var num=10;
// var num2=num+10;
// alert(num2);

// var firstName="Saqib";
// var lastName="Alam";
// alert(firstName + lastName);

// var num1="20";
// var num2="20";
// alert(num1+num2);

// var num=13;
// num=num++;
// alert(num);


// var num=10;
// var num=++num;
// alert(num);


// var num=10;
//     //  10      11        9       10    10     10
// var eq=num++ + num-- + --num - ++num - num - num++;
// alert(eq);



// var num=12;
//     //  13      13      12       14    14     13
// var eq=++num - num-- + num++ - ++num + num - --num;
// alert(eq);





// -----------MARKSHEET ASSIGNMENT----------


var firstName=prompt("Enter Your First Name");

var lastName=prompt("Enter Your last Name");

var rollNo=prompt("Enter Your Roll No")

var schoolName=prompt("Enter Your school Name");

var eng=+prompt("Marks obtained in english");

var isl=+prompt("Marks obtained in Islamiat");

var urdu=+prompt("Marks obtained in Urdu");

var js=+prompt("Marks obtained in Java-Script");

var html=+prompt("Marks obtained in HTML");

var obtMarks=eng+isl+urdu+js+html;

var total=500;

var per=(obtMarks/total)*100;

document.write("First Name : ",firstName,"</br> Last Name : ",lastName,"</br>Roll no : ",rollNo,
"</br>School Name : ",schoolName,"</br>Marks in English : ",eng,"</br>Marks in Islamiat : ",isl,"</br>Marks in Urdu : ",urdu,
"</br>Marks in Java-Script : ",js,"</br>Marks in HTML : ",html,"</br>Obtained Marks : ",obtMarks,"</br>Total : 500 </br> Percentage : ",per,"%");