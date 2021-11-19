// const taskContainer = document.querySelector(".task_container");
// console.log(taskContainer);

// const globalStore = [];

// const saveChanges = () => {
//   const taskData = {
//     id: `${Date.now()}`,
//     imageurl: document.getElementById("imageURL").value ,
//     tasktitle: document.getElementById("taskTitle").value,
//     tasktype: document.getElementById("taskType").value,
//     taskdescription: document.getElementById("taskDescription").value
//   };
//   const newCard = `
//   <div id=${taskData.id} class="col-md-6 col-lg-4">
//     <div class="card">
// <div class="card-header d-flex justify-content-end gap-2">
// <button type="button" class="btn btn-outline-success"><i class="fas fa-pencil-alt"></i></button>
// <button type="button" class="btn btn-outline-danger"><i class="fas fa-trash"></i></button>
// </div>
// <img src=${taskData.imageurl} class="card-img-top" alt="...">
// <div class="card-body">
// <h5 class="card-title fw-bold text-primary">${taskData.tasktitle}</h5>
// <p class="card-text">${taskData.taskdescription}</p>
// <a href="#" class="btn btn-primary">Go somewhere</a>
// </div>
// </div>
//   </div>
//   `;
//   taskContainer.insertAdjacentHTML("beforeend", newCard);

//   globalStore.push(taskData);

//   localStorage.setItem("tasky",JSON.stringyfy({cards:globalStore}));
// }


// const loadInitialData = () =>{
//     //local storage to get tasky card data
//     //convert tge string to a normal object
//     //loop over the array of task object to create a html cards and inject it to our dom
//     //update our global store

// }

////////////////////////////////////////

//new script


const taskContainer = document.querySelector(".task_container");
console.log(taskContainer);

const globalStore = [];

const generateHTML = (taskData) => {
  return `
  <div id=${taskData.id} class="col-md-6 col-lg-4">
    <div class="card">
<div class="card-header d-flex justify-content-end gap-2">
<button type="button" class="btn btn-outline-success"><i class="fas fa-pencil-alt"></i></button>
<button type="button" class="btn btn-outline-danger"><i class="fas fa-trash"></i></button>
</div>
<img src=${taskData.imageurl} class="card-img-top" alt="...">
<div class="card-body">
<h5 class="card-title fw-bold text-primary">${taskData.tasktitle}</h5>
<p class="card-text">${taskData.taskdescription}</p>
<a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>
  </div>
  `;
};

const saveChanges = () => {
  const taskData = {
    id: `${Date.now()}`,
    imageurl: document.getElementById("imageURL").value ,
    tasktitle: document.getElementById("taskTitle").value,
    tasktype: document.getElementById("taskType").value,
    taskdescription: document.getElementById("taskDescription").value
  };
  taskContainer.insertAdjacentHTML("beforeend", newCard);

  globalStore.push(taskData);

  localStorage.setItem("tasky",JSON.stringyfy({cards: globalStore}));
}

const loadInitialData = () => {
  //localStorage to get tasky card data
  const getCardData = localStorage.getItem("tasky");

  //convert the string to a normal object
  const {cards} = JSON.parse(getCardData);

  //loop over the array of task object to create HTML cards , inject it to our dom
  cards.map((cardObject) => {
    taskContainer.insertAdjacentHTML("beforeend",generateHTML(cardObject));

    //update our global store
    globalStore.push(cardObject);
  })
}

