
import * as dom from "./dom.js";

dom.testA()
var projectList = [];
var i = 0;




class Project {

    constructor(nombre, description, categoria) {
        this.nombre = nombre
        this.dueDate = this.dueDate
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
    for (let i=0;i<projectList.length;i++){
        var cardElement=projectList[i];
        var f=new DocumentFragment

        const card=document.createElement("div");
        card.classList.add("card")
        
        const   cardName=document.createElement("h4");
        card.appendChild(cardName);
        cardName.innerHTML=cardElement.nombre;

        const cardDueDate=document.createElement("p");
        cardDueDate.innerHTML=cardElement.dueDate;
        card.appendChild(cardDueDate)

        const cardDescription=document.createElement("p");
        cardDescription.innerHTML=cardElement.description
        card.appendChild(cardDescription);

        card.addEventListener("click",()=>alert("click"))

        document.querySelector("#panel").appendChild(card);
        

    }
    
}

dummydata();
console.log(projectList)
createCard()



function dummydata() {
    var uno = new Project("the odin project", "pues eso", "31/12/2022")
    var dos = new Project("black belt", "a ver si llego",  "31/12/2023")
    projectList.push(uno);
    projectList.push(dos);
    var dos = new toDo("black belt", "a ver si llego", "bjj", "31/12/2023")
    var sdd = new toDo("black belsdsdt", "a ver si llego", "bjj", "31/12/2023")
    uno.addToDo(dos)
    uno.addToDo(sdd)


}






