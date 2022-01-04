

var settingsmenu = document.querySelector('.settings-menu');
var darkBtn = document.getElementById("dark-btn");

let post = document.querySelector('#textArea')

function submitHandler(e) {
    e.preventDefault()

    
    let bodyObject = {
        newPost: post.value
    }
    console.log(post.value)
    createPost(bodyObject)
    
}


const createPost = body => axios.post("http://localhost:4500/api/onlydevs", body)
    .then(
        res => {createPostCard(res.data)})
    .catch(errCallback)

function createPostCard (post) {
    console.log(post)
    const postCard = document.createElement('div')
    postCard.classList.add('post-card')

    postCard.innerHTML =`<p>${post.status}</p>`

    
    let addPost = document.querySelector('.post-container')
    addPost.appendChild(postCard)
}



// const postCallback = ({ data: post }) => {
    //     displayPost(post)
    // }
    const errCallback = err => console.log(err)
    
    // const getPost = () => {
        
        //    axios.get("http://localhost:4500/api/onlydevs") 
        //    .then(postCallback)
        // }
        
        // const settingsmenu = document.querySelector('.settings-menu');
        // const darkBtn = document.getElementById("dark-btn");
        
        
        // function createPost(){
            //     let postContent = document.getElementById("textArea").value
            //     axios.post("http://localhost:4500/api/onlydevs", {
                //         postContent
                //     })
                //     .then(res => {
                    //         alert('Successfully Posted!')
                    //     })
                    // }
                    
const postBtn = document.getElementById('post-btn');
                    
postBtn.addEventListener('click', createPost)
                    
function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");

}
darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark");
    }
    else{
        localStorage.setItem("theme", "light")
    }


}

if(localStorage.getItem("theme") == "light"){
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme")
}
 else if(localStorage.getItem("theme") == "dark"){
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add('dark-theme');
 }
else{
    localStorage.setItem("theme", "light");    
}

// localStorage.setItem("theme", "dark");
// localStorage.getItem("theme");