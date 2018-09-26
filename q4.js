
function Eligiblecriteria(gender,age)
{
   if(gender=='male'&&age>=21)
   {
     console.log('You are major');
   }
  else if(gender=='female'&&age>=18)
   {
       console.log('you are maojor');
   }
   else 
   {
       console.log('You are minor');
   }
}
let call1=new Eligiblecriteria('male',19);
let call2=new Eligiblecriteria('male',22);
let call3=new Eligiblecriteria('female',17);
let call4=new Eligiblecriteria('female',19);
