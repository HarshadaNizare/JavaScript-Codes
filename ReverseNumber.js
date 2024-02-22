let r;
			
	let n=parseInt(prompt("Enter Any Number:"));
			
	while(n>0)
		{
			r = parseInt(n%10);
			document.write(""+r);
			console.log(r);
			n=parseInt(n/10);
		}