let r,sum=0,temp=0;
			
	let n=parseInt(prompt("Enter Any Number:-"));
			
	temp=n;
	while(n>0)
	{
		r=parseInt(n%10);
		sum=parseInt(sum+(r*r*r));
		n=parseInt(n/10);
	}
	if(sum == temp)
	{
		document.write("Armstrong Number");
		console.log("Armstrong Number");
	}
	else
	{
		document.write("Not Armstrong Number");
		console.log("Not Armstrong Number");
	}