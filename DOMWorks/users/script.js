// fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json()).then(data=>displayUser(data))


getData()
async function getData(){
    let response=await fetch("https://jsonplaceholder.typicode.com/users")
    let data=await response.json()
    displayUser(data)
}

function displayUser(users){
    htmlData=``
    for (let u of users){
        htmlData+=`<div class="col-4">
                <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${u.name}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">${u.username}</h6>
    <p class="card-text">${u.email}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
            </div>`
    }
    document.querySelector("#root").innerHTML=htmlData
}
displayUser(users)