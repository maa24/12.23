'use script'

    
function funcAdd1() {
console.log('jiji');

 let textbox = document.getElementById("text");
  let inputValue = textbox.value;

//   let elems = document.getElementsByName("erabu");
//   let val ="";

//   for(i=0;i<elems.length;i++){
//     if(elems[i].checked){
//       val = parseInt(elems[i].value);
//     }
  

// 1年目
   function nennsyuu(nen){
     for(i = 1;i<nen;i++){
       if(i===1){
        let syonennsyuu = inputValue;
       } else {
        let kinngaku = Math.round(inputValue * 1.2);
         inputValue = nennsyuu;
        }
      }
    }
 

  console.log(nennsyuu(3))
  } 
