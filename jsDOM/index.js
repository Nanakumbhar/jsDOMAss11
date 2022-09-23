

let div=document.getElementById("text") 
   console.log(div.innerText)



let h1=document.getElementsByTagName("h1")[0]
     console.log(h1.innerText)



let italic=document.getElementsByClassName("box")[0]
    console.log(italic.innerText)



let h3=document.getElementsByTagName("h3")[0]
   h3.innerText="Hello World"
   console.log(h3.innerText)


function func(){
let card=document.getElementById("card")
let btn=document.getElementsByTagName("button")[0]
if ( btn.innerText== "Change Flex Direction"){
    card.style.display="flex"
    card.style.flexDirection="column"
}
}



let h2=document.getElementsByTagName("h1")[1]
    h2.style.color="red"
    h2.id="heading"
    console.log ( h2.style.color,h2.id)



function func2(){
let HTMLpage=document.getElementById("box1")
let btn2=document.getElementById("btn2")
if( btn2.innerText=="Replace Text"){
   HTMLpage.innerText="Welcome to Elevation Academy"
   HTMLpage.style.color="orange"
   HTMLpage.style.fontWeight="bold"
}
}



function getTime(){
   let Time = new Date();
   let HH = Time.getHours();
   let MM = Time.getMinutes();
   let SS = Time.getSeconds();
    let BB = document.getElementById("chg")

   if (HH > 12){
      HH = HH - 12;
      
   };

  


   if (HH == 0){
      HH==12

   };

   if (SS < 10){
      SS = "0" + SS  };

      if ( MM <=9 ){
         MM == "0" + MM
      };

   if ( HH < 9){
      HH = "0" + HH
   }

   
   

   document.getElementById("HH").innerText = HH + ":"
   document.getElementById("MM").innerText = MM + ":"
   document.getElementById("SS").innerText = SS;
    

   setTimeout(getTime, 1000);
}

getTime();

let selection=document.getElementById("selection")
let Result=document.getElementById("result")

selection.addEventListener("change",()=>{
   Result.innerText =selection.options[selection.selectedIndex].value;
   console.log(selection.selectedIndex);
}
)


    function validation(){
      let email=document.getElementById("email").value
      let msg1=document.getElementById("msg1")
      let regex1 = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

      let lastVal = email.slice(-14);
      let result1 = regex1.test(email);
   if(result1 && lastVal==="@prepbytes.com"){
      msg1.innerText = " Email is Valid"
   }
    else{
     msg1.innerText = " Email is InValid"
   }
      
   
   let phone = document.getElementById("phone").value;
      let msg2 = document.getElementById("msg2")
      let regex2 = /^[9]+[1]+[0-9]{8}$/;

   let result2 = regex2.test(phone);
   if(result2){
   msg2.innerText = " Phone Number is Valid"
       }
       else{msg2.innerText = " Phone Number is Invalid"
msg2.innerText = " Phone Number is Invalid"
    }

      let year=document.getElementById("year").value
      let msg3 = document.getElementById("msg3")

let year1 = parseInt(year.slice(0,4));
if(year1 > 1995){
msg3.innerText = " Birth Year is valid"
}
else{
msg3.innerText = " Birth Year is Invalid"
}
}
   