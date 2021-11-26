

export function testA() {
    console.log("A");

}
export function testB() {
    console.log("B")

} function qazqaz() {
    console.log("B")
}

export function getNewTaskData(index) {
    document.querySelector("#getdata").style.display = "flex"
    var form = document.querySelector("#getdata")

    document.querySelector("#send").addEventListener("click",()=>{addTask})
    document.querySelector("#cancel").addEventListener("click",createFrom)
   
}
function addTask(){
    alert(index)
    var task= new task
    if (form.elements["name"].value === "" || form.elements["description"].value === "" || form.elements["duedate"].value === "") {
        alert("faltan cosas");
        e.stopImmediatePropagation()
        return
    }


}
function createDomElement(tag,inner){
    var newElement=document.createElement(tag)
    newElement.innerHTML=inner;
    document.querySelector("body").appendChild(newElement)
    return newElement

}
function createFrom(){
    var form =document.createElement("div");
    form.setAttribute("class","formTask")

    var taskName=document.createElement("label")
    taskName.innerHTML="Task Name";
    form.appendChild(taskName)}
    var test=createDomElement("button","este es un pito boton depruba")
    var test2=createDomElement("button","est222222222e es un pito boton depruba")



