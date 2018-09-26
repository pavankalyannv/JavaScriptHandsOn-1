//CODE TO FIND MAX OF 5 NUMBERS
//numbers array holds 5 numbers
let numbers=[20,3,12,0,30];
max=numbers[0]
sum=0;
for(i=0;i<=numbers.length;i++) {
    if(numbers[i]>max)
    max=numbers[i];
}
avg=sum/numbers.length;
console.log('max of five numbers is   '+max);