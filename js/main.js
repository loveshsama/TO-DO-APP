var ul = document.querySelector(".list ul");

//clicking to set as done
ul.addEventListener("click",function(e){
    if(e.target.className == "event"){
        console.log(e.target);
        e.target.style.background="green";
        let btn = e.target.querySelector("input[type='button']");
        btn.style.background="red";
        e.target.style.color="white";
    }
});

//clicking to delete task from list
ul.addEventListener("click",function(e){
    if(e.target.className == "delete"){
        const li = e.target.parentElement.parentElement;
        ul.removeChild(li);
    }
});

//adding new task

const item = document.querySelector('#userinput');
const btn = document.querySelector('.input input[type="submit"]');


btn.addEventListener('click',function(e){
    
    var value = item.value;
    if(value != ""){
        //creating elements
        const li = document.createElement("li");
        const spanButton = document.createElement("span");
        const button = document.createElement("input");
        
        //adding classes
        li.classList.add("event");
        button.classList.add("delete");

        //add attribute
        button.type = "button";
        
        //adding content to tags
        li.textContent= value;
        button.value="Delete";

        //adding to document
        ul.appendChild(li);
        li.appendChild(spanButton);
        spanButton.appendChild(button);

    }
    
});