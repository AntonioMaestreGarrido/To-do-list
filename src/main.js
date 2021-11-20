
import * as dom from "./dom.js";

dom.testA()
const projectList = [];
var i = 1;
setListeners()



class Project {

    constructor(nombre, description, dueDate) {
        this.nombre = nombre
        this.dueDate = dueDate
        this.description = description

        this.toDoList = [];
        this.id = i;
        i++;
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


dummydata()





function createCard() {
    document.querySelector("#panel").innerHTML = "";
    for (let i = 0; i < projectList.length; i++) {
        var cardElement = projectList[i];
        var f = new DocumentFragment

        const card = document.createElement("div");
        card.classList.add("card")
        card.setAttribute("id", cardElement.id);

        const cardName = document.createElement("h4");
        card.appendChild(cardName);
        cardName.innerHTML = cardElement.nombre;

        const cardDueDate = document.createElement("p");
        cardDueDate.innerHTML = cardElement.dueDate;
        card.appendChild(cardDueDate)

        const cardDescription = document.createElement("p");
        cardDescription.innerHTML = cardElement.description
        card.appendChild(cardDescription);

        const divButton = document.createElement("div")
        divButton.classList.add("buttonContainer");
        card.appendChild(divButton);

        const buttonEditar = document.createElement("img")
        buttonEditar.setAttribute("src", "icons/pen.png")
        buttonEditar.addEventListener("click", editaCard)
        buttonEditar.classList.add("iconcard")
        divButton.appendChild(buttonEditar);

        const buttonBorrar = document.createElement("img")
        buttonBorrar.setAttribute("src", "icons/bin.png")
        divButton.appendChild(buttonBorrar);
        buttonBorrar.classList.add("iconcard")
        buttonBorrar.addEventListener("click", borraCard)




        document.querySelector("#panel").appendChild(card);


    }

}
function borraCard(e) {
    const card = e.target.parentElement.parentElement
    let id = card.getAttribute("id");



    for (let index in projectList) {


        if (id == projectList[index].id) {
            alert("===")

            projectList.splice(index, 1)
            createCard()
            return
        }

    }





}
function editaCard(e) {
    const card = e.target.parentElement.parentElement
    for (let index in projectList) {


        if (card.getAttribute("id") == projectList[index].id) {
            
            
            
            getNewProjectData(index)
            return
        }

    }

    

}




function setListeners() {
    console.log("WW")
    document.querySelector("#newProject").addEventListener("click", function()  {

        document.querySelector("#getdata").style.display = "flex"
    })
    document.querySelector("#cancel").addEventListener("click", () => { document.querySelector("#getdata").style.display = "none" })

}
function getNewProjectData(index) {
    document.querySelector("#getdata").style.display = "flex"
    var form = document.querySelector("#getdata")
    //if there is an index it means new prject,else edit
    if (index == undefined) { index = -1 }
    else{
         form.elements["name"].value = projectList[index].nombre ;
     form.elements["duedate"].value = projectList[index].dueDate ;
     form.elements["description"].value = projectList[index].description ;}

    //validate data
    

    document.querySelector("#getdata").setAttribute("index", index)
    document.querySelector("#send").addEventListener("click", function add(e)  {
        e.preventDefault();
        //e.stopPropagation();
        index = document.querySelector("#getdata").getAttribute("index")
        
        if (form.elements["name"].value === "" || form.elements["description"].value === "" || form.elements["duedate"].value === "") {
            alert("faltan cosas"); return
        }


        if (index == -1) {
            var p = new Project(form.elements["name"].value, form.elements["description"].value, form.elements["duedate"].value)
            projectList.push(p);

        }
        else {
            projectList[index].nombre = form.elements["name"].value;
            projectList[index].dueDate = form.elements["duedate"].value;
            projectList[index].description = form.elements["description"].value;
            document.querySelector("#getdata").setAttribute("index", -1)
        }

        createCard()
        form.elements["name"].value = ""; form.elements["description"].value = ""; form.elements["duedate"].value = "";
        document.querySelector("#getdata").style.display = "none"
        e.stopImmediatePropagation() 
    })
    //document.querySelector("#cancel").addEventListener("click", () => { document.querySelector("#getdata").style.display = "none" })
    


}
function dummydata() {
    var uno = new Project("the odin project", "pues eso", "2021-11-15")
    var dos = new Project("black belt", "a ver si llego", "2021-11-15")
    var tres = new Project("kill borja", "no se merece menos", "2021-11-15")
    var cuatro = new Project("random app in vba", "ni puta idea", "2021-11-15")
    projectList.push(uno);
    projectList.push(dos);
    projectList.push(tres);
    projectList.push(cuatro);
    var dos = new toDo("black belt", "a ver si llego", "bjj", "31/12/2023")
    var sdd = new toDo("black belsdsdt", "a ver si llego", "bjj", "31/12/2023")
    uno.addToDo(dos)
    uno.addToDo(sdd)
    createCard()


}






