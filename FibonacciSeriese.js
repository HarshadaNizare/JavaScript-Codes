document.write("<b>Fibonacci Seriese</b><br>");
let a=0,b=1,c=0,level,i;

level=parseInt(prompt("Enter the Level Number:-"));

document.write(" ",a,"<br>",b,"<br>");
console.log(a);
console.log(b);

for(i=1; i<=level; i++)
{
	c=parseInt(a+b);
	document.write(" ",c,"<br>");
	console.log(c);
	a=b;
	b=c;
}