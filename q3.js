
function Eligiblefor(age,patient)
{
    //var age=20
    //var patient=0
      if(age>0&&age<=15)
         console.log('You are eligible for minniride');
       else if(age>=16&&age<=25)
           console.log('You are eligible for rollerroster');
       else if((age<=26&&age>=44)&&patient==1)
             console.log('You are not eligible for rollerroaster ');
}
Eligiblefor(20,0)
Eligiblefor(15,1)