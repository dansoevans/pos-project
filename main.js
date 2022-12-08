function goBack(){
    window.history.back();

}

function promptHandler(){
    var prompter = confirm( "      " + " DELETE ITEM \n  Do you want to delete item ? ");
if(prompter == false){
  event.preventDefault();
}
  return prompter;
}

var rr = document.getElementById('hider');
let a;
function doIt(){
  if(a==1){
    rr.style.display = "inline";
    return a=0;
  }else{
    rr.style.display = "none";
    return a =1;

  }
}


 
