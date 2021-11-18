
var projectList=[];
var i=0;




class Project {
    
    constructor(nombre, categoria, dueDate) {
        this.nombre = nombre
        this.categoria = categoria
        this.dueDate = dueDate
        this.taskList=[];
        this.id=++i;
       
          }


  
}
dummydata();
console.log(projectList)



function dummydata(){
    var uno=new Project("the odin project","coding","31/12/2022")
    var dos=new Project("black belt","bjj","31/12/2023")
    projectList.push(uno);
    projectList.push(dos);




}






