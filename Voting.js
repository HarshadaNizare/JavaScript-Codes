document.write("Javascript Program to Check User are allowed to Vote or Not allowed to vote ");

let age;

age=parseInt(prompt("Please Enter Your Age:-"));
console.log("Age=",age);

if(age>=18)
{
	document.write("<br>You are Allowed for Voting");
	console.log("You are Allowed for Voting");
}
else
{
	document.write("<br>You Are Not Allowed for Voting");
	console.log("You are Not Allowed for Voting");
}