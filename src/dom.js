

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
    divGetTask.setAttribute("index",index)
    createDomElement("p","Name",divGetTask)
    var inputname=createDomElement    ("input","",divGetTask,"newtaskname")
    createDomElement("p","Description",divGetTask)

    var inputdescription=createDomElement    ("input","",divGetTask,"newtaskdescription")
    createDomElement("p","Due Date",divGetTask)

    var inputdueDate=createDomElement    ("input","",divGetTask,"newtaskduedate")
    inputdueDate.setAttribute("type","date")

    var divButton=createDomElement("div","",divGetTask)
    var b1=createDomElement("button","Save",divButton,"boton")
    b1.id="saveTask"
    var b2=createDomElement("button","Cancel",divButton,"boton")
    b2.id="cancelTask"
    

    
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



