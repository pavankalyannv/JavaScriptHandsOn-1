//code to print five numbers 
//EX:-5 10 13 18 21
n=5;
for(i=0;i<5;i++)
{ 
    console.log(n)
    if(n%2!=0)
    {
        n=n+5;
    }
    else
    {
        n=n+3;
    }
}