

export function testA() {
    console.log("A");

}
export function testB() {
    console.log("B")

} function qazqaz() {
    console.log("B")
}

export function getNewTaskData(index) {
    var cuerpo=document.querySelector("#cuerpo")
    var divGetTask=createDomElement("div","",cuerpo,"form")
    divGetTask.id="getNewTask"
    createDomElement("p","Name",divGetTask)
    var inputname=createDomElement    ("input","",divGetTask,"")
    createDomElement("p","DueDate",divGetTask)
    var inputdueDate=createDomElement    ("input","",divGetTask,"")
    inputdueDate.setAttribute("type","date")

    var divButton=createDomElement("div","",divGetTask)
    var b1=createDomElement("button","Save",divButton,"boton")
    var b2=createDomElement("button","Cancel",divButton,"boton")
    

    
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
function createDomElement(tag,inner,parent,clase){
    var newElement=document.createElement(tag)
    newElement.innerHTML=inner;
    parent.appendChild(newElement)
    if(clase){
        newElement.classList.add(clase);
    }
    return newElement

}
function createFrom(){
}



