//code to swap 3 numbers 
//EX:-10 20 30
function swap(a,b,c)
{ 
    console.log('Before swapping values are    '+a+'   '+b+'  '+c);//10 20 30
    temp=b;     //temp=20
    b=a;        //b=10
    a=c;        //a=30;
    c=temp;     //c=20
    console.log('After swapping values are    '+a+'   '+b+'  '+c);//30 10 20
}
var call1=new swap(10,20,30);
