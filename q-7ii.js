//code to print max of 3 numbers USING EXIT CONTROLLED LOPPS
max=0;
//array large copntains 3 numbers 
var large=[10,3,12];
//count is a looping variable
count=1;
n=3
do
{
    if(large[count]>max)
       max=large[count];
    count++;
}
while(count<=n)

console.log('Max of three numbers is    '+max)