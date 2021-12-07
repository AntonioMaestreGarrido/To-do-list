
import * as dom from "./dom.js";

dom.testA()

var projectList = [];
var i = 0;
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
        var check = false
        
        
        
    }
    
    
    
}

//dummydata()
leeLocal()
function leeLocal() {
    const myArrayFromLocalStorage = localStorage.getItem('arra')
    projectList = JSON.parse(myArrayFromLocalStorage)
    if (projectList === null) { projectList = [] }
    
}
localStorage.setItem('arra', JSON.stringify(projectList))
createCard()





function createCard() {
    document.querySelector("#panel").innerHTML = "";
    for (let i = 0; i < projectList.length; i++) {
        var cardElement = projectList[i];
        var f = new DocumentFragment;

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
        buttonEditar.addEventListener("click", editaCard,true)
        buttonEditar.classList.add("iconcard")
        divButton.appendChild(buttonEditar);

        const buttonBorrar = document.createElement("img")
        buttonBorrar.setAttribute("src", "icons/bin.png")
        divButton.appendChild(buttonBorrar);
        buttonBorrar.classList.add("iconcard")
        buttonBorrar.addEventListener("click", borraCard,true)




        document.querySelector("#panel").appendChild(card);
        card.addEventListener("click", openCard,false)


    }localStorage.setItem('arra', JSON.stringify(projectList))

}

function openCard(e) {
    //e.stopPropagation();
    //const card = e.target.parentElement
    var card = document.querySelector("#divContainer")
    if (!card) { card = this }
    console.log(card)
    //console.log(e.target.parentElement)
    var cardToOpen
    var indexn
    var id = card.getAttribute("id");
    if (id === "divContainer") { id = card.getAttribute("index") }
    for (let index in projectList) {
        console.log(projectList[index].id)
        if (id == projectList[index].id) {
            cardToOpen = projectList[index]
            indexn = index
        }

    }

    document.querySelector("#panel").innerHTML = "";

    const divContainer = document.createElement("div");
    document.querySelector("#panel").appendChild(divContainer);
    divContainer.setAttribute("id", "divContainer")
    divContainer.setAttribute("index", indexn)

    const cardName = document.createElement("h4");
    divContainer.appendChild(cardName);
    cardName.innerHTML = cardToOpen.nombre;

    const cardDue = document.createElement("h2");
    divContainer.appendChild(cardDue);
    cardDue.innerHTML = cardToOpen.dueDate;

    const cardDescription = document.createElement("p");
    divContainer.appendChild(cardDescription);
    cardDescription.innerHTML = cardToOpen.description;

    const pending = document.createElement("p");
    divContainer.appendChild(pending);
    pending.innerHTML = "Pending Task";

    cardToOpen.toDoList.forEach(l => {
        var divTask = document.createElement("div")
        divTask.classList.add("taskContainer")
        divContainer.appendChild(divTask);

        var taskDue = document.createElement("span");
        taskDue.innerHTML = l.dueDate;
        divTask.appendChild(taskDue);
        console.log(l.nombre);

        var taskName = document.createElement("span")
        taskName.innerHTML = l.nombre
        divTask.appendChild(taskName)

        var radiobutton = document.createElement("input")
        radiobutton.setAttribute("type", "checkbox")
        radiobutton.addEventListener("click", () => { l.check = radiobutton.checked; console.log(l.check); console.log(radiobutton.checked) })
        divTask.appendChild(radiobutton)

        var task = document.createElement("p")
        task.innerHTML = l.description
        divTask.appendChild(task)






    });
    const divButton= document.createElement("div");
    divButton.id="divButton"
    divContainer.appendChild(divButton);

    const buttonBack = document.createElement("button");
    divButton.appendChild(buttonBack);
    buttonBack.addEventListener("click", createCard)
    buttonBack.innerHTML = "close";

    const buttonComplete = document.createElement("button");
    divButton.appendChild(buttonComplete);
    buttonComplete.innerHTML = "complete";

    const buttonNewTask = document.createElement("button");
    buttonNewTask.addEventListener("click", createNewTask)
    divButton.appendChild(buttonNewTask);
    buttonNewTask.innerHTML = "New Tast";

    const buttonDelete = document.createElement("button");
    buttonDelete.addEventListener("click", () => {
        cardToOpen.toDoList.forEach((l, index) => {
            console.log(this)
            if (l.check) {
                console.log(l.index)
                cardToOpen.toDoList.splice(index, 1)
                openCard(this)
            }

        })

        console.table(cardToOpen.toDoList)
    })
    divButton.appendChild(buttonDelete);
    buttonDelete.innerHTML = "Delete";
    localStorage.setItem('arra', JSON.stringify(projectList))
    return false;

}

function createNewTask(e) {
    
    var index = e.target.parentElement.getAttribute("index")

    dom.getNewTaskData(index)
    document.querySelector("#saveTask").addEventListener("click",(e)=> addNewTask(e))
    
    document.querySelector("#cancelTask").addEventListener("click", (e)=>cancelTask(e))



    //
}
function cancelTask(e) {
    
    //document.querySelector("#saveTask").removeEventListener("click", addNewTask)
    //document.querySelector("#cancelTask").removeEventListener("click", cancelTask)
    console.log(document.querySelector("#getNewTask"))
    var card=document.querySelector("#getNewTask")
    card.remove();
    
    createCard()

}
function addNewTask() {
    console.log(this)
    let nametask = document.querySelector(".newtaskname").value
    let description = document.querySelector(".newtaskdescription").value
    let dueDate = document.querySelector(".newtaskduedate").value
    var n = new toDo(nametask, description, dueDate)
    let index = document.querySelector("#getNewTask").getAttribute("index")
    projectList[index].toDoList.push(n)
    document.querySelector("#getNewTask").remove()
    openCard()

}
function borraCard(e) {
    e.stopPropagation();
   
    const card = e.target.parentElement.parentElement
    let id = card.getAttribute("id");



    for (let index in projectList) {


        if (id == projectList[index].id) {


            projectList.splice(index, 1)
            createCard()
            return false
        }

    }
    




}
function idToIndex(id) {

    for (let index in projectList) {


        if (id == projectList[index].id) {




            return index
        }

    }

}
function editaCard(e) {
    e.stopPropagation();
    const card = e.target.parentElement.parentElement
    for (let index in projectList) {


        if (card.getAttribute("id") == projectList[index].id) {



            getNewProjectData(index)
            return false
        }

    }



}




function setListeners() {
    console.log("WW")
    document.querySelector("#newProject").addEventListener("click", () => {
        getNewProjectData()
        alert("click")
        //document.querySelector("#getdata").style.display = "flex"
    })
    document.querySelector("#cancel").addEventListener("click", () => {
        document.querySelector("#newProject").removeEventListener("click", () => {
            getNewProjectData()

        })

        document.querySelector("#getdata").style.display = "none"
    })
}

function getNewProjectData(index) {
    document.querySelector("#getdata").style.display = "flex"
    var form = document.querySelector("#getdata")
    //if there is an index it means new prject,else edit
    if (index == undefined) { index = -1 }
    else {
        form.elements["name"].value = projectList[index].nombre;
        form.elements["duedate"].value = projectList[index].dueDate;
        form.elements["description"].value = projectList[index].description;
    }

    //validate data


    document.querySelector("#getdata").setAttribute("index", index)
    document.querySelector("#send").addEventListener("click", (e) => {
        e.preventDefault();
        //e.stopPropagation();
        index = document.querySelector("#getdata").getAttribute("index")

        if (form.elements["name"].value === "" || form.elements["description"].value === "" || form.elements["duedate"].value === "") {
            alert("faltan cosas");
            e.stopImmediatePropagation()
            return
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
    }, false)
    //document.querySelector("#cancel").addEventListener("click", () => { document.querySelector("#getdata").style.display = "none" })



}
function addTask() {
    alert("addtask")
    var task = new task
    if (form.elements["name"].value === "" || form.elements["duedate"].value === "") {
        alert("faltan cosas");
        e.stopImmediatePropagation()
        return
    }
    var task = new TransformStreamDefaultController("")


}
function dummydata() {
    var uno = new Project("the odin project", "Lorem ipsum dolorna aliquanisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum do", "2021-11-15")
    var dos = new Project("black belt", "a ver si llego", "2021-11-15")
    var tres = new Project("kill borja", "no se merece menos", "2021-11-15")
    var cuatro = new Project("random app in vba", "ni puta idea", "2021-11-15")
    projectList.push(uno);
    projectList.push(dos);
    projectList.push(tres);
    projectList.push(cuatro);

    var example2 = new toDo("mejorar Derrido", "hay que trabajar mas los derribos para puntuar", "2021-11-15")
    var example = new toDo("mejorar guardia abierta", "enfocarse en guardia araña", "2021-11-15")
    projectList[1].toDoList.push(example)
    projectList[1].toDoList.push(example2)

    example2 = new toDo("comparr cuerda", "comparar precios en los carrefules", "2021-11-15")
    example = new toDo("veneno", "estuidar sobre venenos disponibles", "2021-11-15")

    projectList[2].toDoList.push(example)
    projectList[2].toDoList.push(example2)

    createCard()


}






