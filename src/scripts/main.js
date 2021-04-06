import projects from './projects.js'
let template = document.getElementById("project-template");
const mobileMenuBttn = document.getElementById("mobile-menu-bttn");
const nav = document.getElementById("main-nav");
const projectFilter = document.getElementById("project-filter");
const projectsDiv = document.getElementById("projects-div");


mobileMenuBttn.addEventListener("click", () =>{
   slideIn(nav);
});



// const toggleVisability = (element) =>{
//     if(element.style.display === ""){
//         element.style.display = "block";
//     } else {
//         element.style.display = "";
//     }
// }

const slideIn = (element) =>{
    if(element.style.maxHeight === "0px" || (element.style.maxHeight !== null && element.style.maxHeight !== "220px")){
        element.style.maxHeight = "220px";
    } else {
        element.style.maxHeight = "0px";
    }
}

const filterProjects = (type) =>{
    console.log('filtering')
    if (type === 'all'){
        projectsDiv.innerHTML = "";
        projects.forEach(project =>{
            projectsDiv.appendChild(printProject(project));
            console.log(project.name)
        })
    } else {
        projectsDiv.innerHTML = "";
        projects.forEach( project => {
            if (project.type === type){
                projectsDiv.appendChild(printProject(project));
                console.log(project.name)
            } 
        })
    }
}

projectFilter.addEventListener('change', () => {
    filterProjects(projectFilter.value)
});

const printProject = (project) => {
    let projectClone = document.importNode(template.content, true);
    projectClone.querySelector("[project-title]").innerText = project.name;
    projectClone.querySelector("[project-description]").innerText = project.description;
    projectClone.querySelector("[project-container]").id = project.id;
    return projectClone;
}

filterProjects('all');