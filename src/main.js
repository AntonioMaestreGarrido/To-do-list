
import * as dom from "./dom.js";

dom.testA()
const projectList = [];
var i = 0;
setListeners()



class Project {

    constructor(nombre, description, dueDate) {
        this.nombre = nombre
        this.dueDate = dueDate
        this.description = description

        this.toDoList = [];
        this.id = ++i;

    }
    addToDo(todo) {
        this.toDoList.push(todo)


    }



}
class toDo {

    constructor(nombre, description, dueDate) {
        this.nombre = nombre

        this.description = description
        this.dueDate = dueDate



    }



}



function createCard() {
    document.querySelector("#panel").innerHTML="";
    for (let i = 0; i < projectList.length; i++) {
        var cardElement = projectList[i];
        var f = new DocumentFragment

        const card = document.createElement("div");
        card.classList.add("card")

        const cardName = document.createElement("h4");
        card.appendChild(cardName);
        cardName.innerHTML = cardElement.nombre;

        const cardDueDate = document.createElement("p");
        cardDueDate.innerHTML = cardElement.dueDate;
        card.appendChild(cardDueDate)

        const cardDescription = document.createElement("p");
        cardDescription.innerHTML = cardElement.description
        card.appendChild(cardDescription);

        card.addEventListener("click", () => {
            return alert("click");
        })

        document.querySelector("#panel").appendChild(card);


    }
     
}
function showForm() {
    
}

dummydata()

getNewProjectData()

function setListeners() {
    document.querySelector("#newProject").addEventListener("click",()=>{
        alert("click")
        document.querySelector("#getdata").style.display="flex"})
    
}
function getNewProjectData() {

    document.querySelector("#send").addEventListener("click", (e) => {
        e.preventDefault();
        var form=document.querySelector("#getdata")
        if(form.elements["name"].value===""|| form.elements["description"].value ===""|| form.elements["duedate"].value===""){
            alert("faltan cosas");return
        }
        
        console.table(form)
        
       console.log(form.elements["name"].value)

        var p = new Project(form.elements["name"].value, form.elements["description"].value, form.elements["duedate"].value)
        projectList.push(p);
        createCard()
        document.querySelector("#getdata").style.display="none"
        
    })
    document.querySelector("#cancel").addEventListener("click", () => { document.querySelector("#getdata").style.display="none" })



}
function dummydata() {
    var uno = new Project("the odin project", "pues eso", "31/12/2022")
    var dos = new Project("black belt", "a ver si llego", "31/12/2023")
    projectList.push(uno);
    projectList.push(dos);
    var dos = new toDo("black belt", "a ver si llego", "bjj", "31/12/2023")
    var sdd = new toDo("black belsdsdt", "a ver si llego", "bjj", "31/12/2023")
    uno.addToDo(dos)
    uno.addToDo(sdd)


}






