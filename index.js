const Input =document.querySelector("#task")
const addButton =document.querySelector("button");
const mainDiv = document.querySelector("#taskList");

let taskArray=[];
let count=0;
let flag=false
let isEditpara=null
let changedArrayObj;

addButton.addEventListener("click",addTaskList)


function addTaskList(){
    if(Input.value===""){
 alert("enter task please")
    }
    else{
   if(flag){
    isEditpara.innerHTML=Input.value
     taskArray= taskArray.map((Item)=>{
        if(Item.task===changedArrayObj){
            Item.task= Input.value
        }
        return Item;
     })
     console.log(taskArray);
     

     isEditpara= null
     flag=false
     Input.value=""
    }
    else{

    
    let taskDiv = document.createElement("div")
    let para    = document.createElement("p")
    let span=document.createElement("span")
    let delbtn  = document.createElement("i")
    let editbtn  = document.createElement("i")
    delbtn.classList=" fa-solid fa-trash"
    editbtn.classList="fa-solid fa-pen"
    para.innerHTML=Input.value

let TaskObj={
    id:++count,
    task:para.innerHTML
}
  
  
    delbtn.addEventListener("click" , function(){
       deletefun(TaskObj.id,taskDiv)
    })

    editbtn.addEventListener("click" , function(){
        edit(para,TaskObj.task)
    })

     span.append(delbtn,editbtn)
     taskDiv.append(para,span)
     mainDiv.append(taskDiv)
     taskArray.push(TaskObj)
     Input.value=""
    // console.log(allTask)
}
}
}
   

function deletefun(id,div){
   taskArray = taskArray.filter((task)=> task.id!==id)
    div.remove()
}

function edit(para , task){
    Input.value=para.innerHTML
        para.innerHTML=""
        changedArrayObj=task;
    flag=true
    isEditpara=para
}
