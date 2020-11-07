var url='https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple';
var arr=[];
 var submit=document.getElementById('submit');
  var score=document.getElementById('score');

async function api(){
     try{
         var data=await fetch(url);
     var result= await data.json();
    console.log(result)
       var choice1=document.getElementById('choice1');
        var choice2=document.getElementById('choice2');
         var choice3=document.getElementById('choice3');
           var choice4=document.getElementById('choice4');
           
     function ques(x){
     var quesn=document.getElementById('ques');
     quesn.innerHTML=result.results[x].question;
     var no=Math.floor(Math.random()*4);
     var choiceNo=[];
        do{
         var no=Math.floor(Math.random()*4);
         if(!choiceNo.includes(no)){
             choiceNo.push(no);
         }
        }while(choiceNo.length<4);
     var quesNo=document.getElementById("progressText");
     quesNo.innerHTML=x+1;
     var arr=result.results[x].incorrect_answers.concat(result.results[x].correct_answer)
    
     choice1.innerHTML=`${arr[choiceNo[0]]}`;
      
     choice2.innerHTML=`${arr[choiceNo[1]]}`;
      
     choice3.innerHTML=`${arr[choiceNo[2]]}`;
     
     choice4.innerHTML=`${arr[choiceNo[3]]}`
    console.log(result)
    console.log(choiceNo)
   
      if(quesNo.innerHTML==10){
         submit.disabled=false;
     
      } 

}

    ques(0);

    var x=1;
    
    
 function btn(id,choice){
    var btn=document.getElementById(id);
    
    btn.onclick=function(){
        
       if(x==10){
 document.getElementById('play1').disabled=true
       document.getElementById('play2').disabled=true
        document.getElementById('play3').disabled=true
         document.getElementById('play4').disabled=true
       }
          console.log(choice.innerHTML)
          console.log(result.results[x-1].correct_answer)
      if(choice.innerHTML==result.results[x-1].correct_answer){
            score.innerHTML++;  
   
      } 
       localStorage.setItem("score",`${score.innerHTML}`)
      
       ques(x); 
        x++; 
    
    
     
    }
 }  
 btn('play1',choice1) ;
 btn('play2',choice2);
 btn('play3',choice3);
 btn('play4',choice4);

 
     }
     catch(err){
        console.log(err)
     }
 
    
    
}


api();


 var finalScore=document.getElementById('finalScore');
 
    finalScore.innerHTML=localStorage.getItem("score")
  
 function save(){
    var username=document.getElementById('username');
    localStorage.setItem(`${username.value}`,`${finalScore.innerHTML}`);
   
 
 }
 function scores(){
    var high=document.getElementById('tbody')
    var arr=[];
    var obj={};
   for(var i=0;i<localStorage.length;i++){
      var name=localStorage.key(i);
      var score=localStorage.getItem(name);
      obj={"name":name,"score":parseInt(score)};
      arr.push(obj);
     
      
   }
    console.log(arr)

   arr.sort((a,b)=>{
      return b.score-a.score
   })
   arr.map((x,i)=>{
      high.innerHTML+=`   <tr>
                    <th scope="row">${i}</th>
                    <td>${x.name}</td>
                    <td>${x.score}</td>
                </tr>`
   }
   )
  

 }
 
 