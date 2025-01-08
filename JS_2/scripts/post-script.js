var postForm = document.getElementById("post-form");

postForm.addEventListener('submit', function(event){
    event.preventDefault();
    sendData();
});

function sendData(){
    const postData = {
        title: document.getElementById("title").ariaValueMax,
        body: document.getElementById("body").value,
        userId:1,
    };

    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: "POST",
        headers:{
            "Content-Type":"application/json",
        }, 
        body: JSON.stringify(postData),
    })
    .then((response)=>response.json())
    .then((data)=>console.log(data))
    .catch((error)=>console.log("Error: ", error))
}