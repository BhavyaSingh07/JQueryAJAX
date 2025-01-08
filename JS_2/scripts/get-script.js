var getByIdButtonElement = document.getElementById("getbyIdButton");
var postIdElement = document.getElementById("postId");
var getAllButtonElement = document.getElementById("getallButton");

getByIdButtonElement.addEventListener('click', function(){
    //get post by id
    getById(postIdElement.value);
})


getAllButtonElement.addEventListener('click', function(){
    //get all posts
    getAll();
})

function getById(postId){
    fetch('https://jsonplaceholder.typicode.com/posts/'+postId)
    .then((response) =>{
        if(!response.ok){
            throw new Error("Network response was not ok" + response.statusText);
        }
        return response.json();
    })
    .then((data) =>{
        console.log(data);
        var title = document.getElementsByClassName('post-title')[0];
        var text = document.getElementsByClassName('post-text')[0];
        title.innerHTML = data.title;
        text.innerHTML = data.body;
    })
    .catch((error)=>console.log("Error: ", error))
}

function getAll(){
    fetch('https://jsonplaceholder.typicode.com/posts/')
    .then((response) =>{
        if(!response.ok){
            throw new Error("Network response was not ok" + response.statusText);
        }
        return response.json();
    })
    .then((data) =>{
        console.log(data);
        var allPosts = document.getElementsByClassName('all-posts')[0];
        var postHtml = '';
        data.forEach((post) => {
            postHtml += `<div>
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            </div>`
        })

        allPosts.innerHTML = postHtml;
    })
    .catch((error)=>console.log("Error: ", error))
}
