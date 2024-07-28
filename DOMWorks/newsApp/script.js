const APIKEY="629efbce093140889b3dab3b620c50a9"

let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=${APIKEY}`

// https://newsapi.org/v2/top-headlines?country=in&apiKey=${api_key}
// fetch(url).then(res=>res.json()).then(data=>displayNews(data))


getData()
async function getData(){
    let resp=await fetch(url)
    let data= await resp.json()
    displayNews(data)
}


const categories=["business","entertainment","general","health","science","sports","technology"]



displayNews(news)
function displayNews(news){
    let htmlData=``

    for(let n of news.articles){
        htmlData+=`<div class="col">
    <div class="card">
      <img src="${n.urlToImage}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${n.title}</h5>
        <p class="card-text">${n.description}</p>
      </div>
    </div>
  </div>`
    }
    document.querySelector("#root").innerHTML=htmlData
}

displayCategories(categories)
function displayCategories(categories){
    let htmlData=``
    for(let c of categories){
        htmlData+=`<button value="${c}" class="btn btn-outline-success">${c}</button>`
    }
    document.querySelector("#category").innerHTML=htmlData
}


function fetchNewsByCategory(event){
    let categoryName=event.target.value
    fetch(`${url}&category=${categoryName}`).then(resp=>resp.json()).then(data=>displayNews(data))
    

}