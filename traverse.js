//How to Traverse the DOM (document object module) 

//function myFunction(){
//    
//    var itemlist = document.querySelector("#items");
//    console.log(itemlist);
//}

//To access to Parent Node and play on it

//function myFunction(){
//    
//    var itemlist = document.querySelector("#items");
//    console.log(itemlist.parentNode);
//    itemlist.parentNode.style.color = "green";
//}




//To access to Parent Element and play on it

function myFunction(){
    
    var itemlist = document.querySelector("#items");
    console.log(itemlist.parentElement);
    itemlist.parentElement.style.color = "blue";
}


//Child Nodes it is not good to use.??????????
function myFunction(){
    
    var itemlist = document.querySelector("#items");
    console.log(itemlist.childNodes);
    
}


//First Element Child.
function myFunction(){
    
    var itemlist = document.querySelector("#items");
    console.log(itemlist.firstElementChild);
    itemlist.firstElementChild.innerHTML = "Hello, I am first Element Child";
    
    //lastlementChild
    console.log(itemlist.lastElementChild);
    itemlist.lastElementChild.style.color="red";
 
    //nextSibling element 
    
    console.log(itemlist.nextElementSibling);
    itemlist.nextElementSibling.style.color="yellow";
    
    //previousSibling
    console.log(itemlist.previousElementSibling);
    itemlist.previousElementSibling.style.color="yellow";
}

