let n,i,sum=0;

n =parseInt(prompt("Enter Any Number:-"));
while(n>0)
{
	r=parseInt(n%10);
	sum = sum + r;
	n = parseInt(n/10);
}
document.write("Sum of Digit of Given Number is  ",sum);
console.log("Sum of Digit of Given Number is  ",sum);