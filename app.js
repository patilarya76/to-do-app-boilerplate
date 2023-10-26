// select the  elements
const todolist =  document.getElementById("todolist")
const input = document.getElementById("input")
const addBtn = document.getElementById("button")

// intilaise an empty array
let arr=[];

// first function
addBtn.addEventListener("click",()=>{
    // add to the array
    arr.push(input.value)
    console.log(arr)
    input.value=""
    //  call the showlist function   
    ShowList()
})

// second function
function ShowList(){
//      everytime the function runs , we have to clear the container first 
   todolist.innerHTML="";
    // HOF - foreach - append all th list items from the array
    arr.forEach((el,i)=>{
        let listItem = document.createElement("li")
        let anchor1 = document.createElement("a")
        let anchor2 = document.createElement("a")
        listItem.innerText=el;
        anchor1.innerText="Edit Me"
        anchor1.onclick =()=>{
            EditList(i);
        }
        anchor2.innerText="Delete"
        anchor2.style.marginRight="10px"
        anchor2.onclick =()=>{
            DeleteList(el,i);
        }
        listItem.append(anchor1,anchor2)
        todolist.append(listItem)
    })
}

function EditList(i){
    let newValue = prompt("PLease insert new value:")
    arr.splice(i,1,newValue);
    ShowList()

}

function DeleteList(index){
    arr.splice(index,1);
    ShowList()
}