 var url;
 
 function display(){
      var input=document.getElementById('inp').value;
   url=`https://api.edamam.com/search?q=${input}&app_id=3bce6540&app_key=4d8c83e85603dd7ec8dda7e7bafbd58f`
 
   var search=document.getElementById('searchBar');
    var bg=document.getElementById('cont')
    
     fetch(url)
.then((result)=>{
    return result.json()
})
.then((resp)=>{
    var content=document.getElementById('results');
   
     content.innerHTML=""
   
   
     //  styling //////
    if(input.length!==0){
        bg.setAttribute('style','height:auto')
    search.setAttribute('style','margin:0px auto')
    }else{
         bg.setAttribute('style','height:100%')
    search.setAttribute('style','margin:20% auto')
    }
//    -----------------------------------
    resp.hits.map((x)=>{
        $(document).ready(function(){
  $('[data-toggle="popover"]').popover(); 
});
// vitamins array -------------------------
 var Vitamins=[];
 var arr=Object.entries(x.recipe.totalNutrients);
 vitamins=['Vitamin B6','Vitamin C','Vitamin D','Vitamin E','Vitamin B12','Vitamin K']
 arr.map((y)=>{
    if(vitamins.includes(y[1].label))
    return Vitamins.push({vitamin:y[1].label,quantity:y[1].quantity})
 });
 var res=[]
 Vitamins.map((x)=> {res.push(x.vitamin+' : '+x.quantity.toFixed(2))})
//  ------------------------------------------------------------


 content.innerHTML+=`<div id="cards">
 
 <div class="card" style="width: 18rem;" >
 <a href="${x.recipe.url}" target="blank">
  <img src="${x.recipe.image}" class="card-img-top" alt="...">
  </a>
  <div class="card-body">
  <a href="${x.recipe.url}" target="blank">
    <h5 class="card-title">${x.recipe.label}</h5>
    </a>
  <div id="popovers">
    <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top" data-content="${x.recipe.healthLabels}">
  Health Labels
</button>
  
    <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top" data-content="${x.recipe.ingredientLines}">
  Ingridients List
</button>

  </div>

   <div id="popovers">
    <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top" data-content="${x.recipe.calories}" >
  Calories
</button>
  
    <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top" data-content="${res}">
 Vitamins
</button>

  </div>



    
  </div>
</div>
 
 
 
 </div>`;



    })
   
   
})



 }

  


