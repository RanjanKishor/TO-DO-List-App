const inputBox = document.getElementById("input");

const listitems = document.getElementById("list-items");


const button = document.getElementById("btn");

button.addEventListener('click' , function(e){
    if(inputBox.value === '') 
        {
           alert("Please write some tasks!");
         }

     else
     {
         let li = document.createElement("li");
         li.innerHTML = inputBox.value;
         listitems.appendChild(li);

         let span = document.createElement("span");
         let imgTag = '<img src="delete_icon.png">';
         span.innerHTML = imgTag;
         li.appendChild(span);
     }    

     inputBox.value = "";
     saveData();
});

listitems.addEventListener('click' ,function(e){
   if(e.target.tagName === "LI")
   {
    e.target.classList.toggle("checked");
    saveData();
   }

   else if(e.target.parentNode.tagName === "SPAN")
   {
       let removeIt = e.target.parentNode;
       let removeAnother = removeIt.parentNode;
       removeAnother.remove();
       saveData();
   }
  
});

function saveData()
{
    localStorage.setItem("data" ,listitems.innerHTML);
}

function showTasks()
{
    listitems.innerHTML = localStorage.getItem("data");
}

showTasks();