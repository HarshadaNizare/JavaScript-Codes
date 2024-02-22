let no,i,flag=1;
no = parseInt(prompt("Enter Any Number to check Prime or Not Prime :-"));

if(no==1)
{
	flag=1;
}
else
{
	for(i=2; i<=no-1; i++)
	{
		if(no % i == 0)
		{
			flag=0;
			break;
		}
	}
}
if(flag==1)
{
	document.write("The Number is Prime");
	console.log("The Number is Prime");
}
else
{
	document.write("The Number is Not Prime");
	console.log("The Number is Not Prime");
}