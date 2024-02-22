let a = "Harshada Nizare";
document.write("Name1="+a);
console.log("Name1 : "+a);

document .write("<br>Uppercase Name ="+a. toUpperCase());
console.log("Uppercase Name : "+a.toUpperCase());

document.write("<br>Lowercase Name ="+a.toLowerCase());
console.log("Lowercase Name : "+a.toLowerCase());

document.write("<br>Character at Position 9="+a.charAt(9));
console.log("Character at Position 9 : "+a.charAt(9));

document.write("<br>Is name Include Harshu = "+a.includes("Harshu"));
console.log("Is name Include Harshu : "+a.includes("Harshu"));

document.write("<br>Search for Nizare = "+a.search("Nizare"));
console.log("Search for Nizare : "+a.search("Nizare"));

a=a.substr(0,13);
document.write("<br>Substr ="+a.length);
console.log("Substr : "+a.length);

let z="IMRD Shahada";
document.write("<br>Slice = "+ z.slice(2,6));
console.log("Slice : "+z.slice(2,6));

let b="Javascript";
b=b.concat(' ',"is a Client Site Scripting Language");

document.write("<br>Concatenation = "+b);
console.log("Concatenation : "+b);

b=b.replace("Javascript","HTML/CSS");
document.write("<br>Replace Name = "+b);
console.log("Replace Name : "+b);

b=b. substring(25 ,45);
document.write("<br>Substring ="+b);
console.log("Substring :"+b);

let c="Fullstrack Developer";
c=c.split(' ');
document .write("<br>Split = "+c);
console.log("Split :"+c);

let x="Web Development";
x=x.trim();
document.write("<br>Length of Name is = ",+x.length);
console.log("Length of Name is :"+x.length);



