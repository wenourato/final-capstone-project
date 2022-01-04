// const { default: axios } = require("axios");
// const { deletePost } = require("./server/controller");

var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");

let post = document.querySelector("#textArea");

function submitHandler(e) {
  e.preventDefault();

  let bodyObject = {
    newPost: post.value,
  };
  console.log(post.value);
  createPost(bodyObject);
  post.value = "";
}
let addPost = document.querySelector(".new");

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


const createPost = (body) =>
  axios
  .post("http://localhost:4500/api/onlydevs", body)
  .then((res) => {
      removeAllChildNodes(addPost)
      res.data.map((post) => {
          createPostCard(post);
      });

    })

    
function createPostCard(post) {
  console.log(post);
  const postCard = document.createElement("div");
  postCard.classList.add("post-card");

  postCard.innerHTML = `<div class="post-container">
  <div class="post-row">
      <div class="user-profile">
          <img src="images/profile-pic.jpg">
          <div>
              <p>Wyatt Enourato</p>
              <span>January 4 2022, 5:59pm</span>
          </div>
      </div>
      <a href="#"> <i class="fas fa-ellipsis-v"></i></small></a>

  </div>

  <p class="post-text">${post.content}</p>
  

  <div class="post-row">
      <div class="activity-icons">
          <div><img src="images/like-blue.png"> 3</div>
          <div><img src="images/comments.png"> 0</div>
          <div><img src="images/share.png"> 1</div>
          <button id=${post.index} class="delete">X</button>

      </div>
      <div class="post-profile-icons">
          <img src="images/profile-pic.jpg">  <i class="fas fa-caret-down"></i></small>

      </div>

  </div>
  
</div>`;

addPost.appendChild(postCard);

const deleteBtns = document.querySelectorAll(".delete");
for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener("click", deletePost);
}
}

const errCallback = (err) => console.log(err);

const postBtn = document.getElementById("post-btn");

const deletePost = (event) => {
  console.log(event.target.id);

  const id = event.target.id;
  axios
    .delete(`http://localhost:4500/api/onlydevs/${id}`)
    .then((res) => {
        removeAllChildNodes(addPost)
      res.data.map((post) => {
        createPostCard(post);
      });
    })

    .catch((err) => console.log(err));
};



postBtn.addEventListener("click", submitHandler);

function settingsMenuToggle() {
  settingsmenu.classList.toggle("settings-menu-height");
}
darkBtn.onclick = function () {
  darkBtn.classList.toggle("dark-btn-on");
  document.body.classList.toggle("dark-theme");

  if (localStorage.getItem("theme") == "light") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};

if (localStorage.getItem("theme") == "light") {
  darkBtn.classList.remove("dark-btn-on");
  document.body.classList.remove("dark-theme");
} else if (localStorage.getItem("theme") == "dark") {
  darkBtn.classList.add("dark-btn-on");
  document.body.classList.add("dark-theme");
} else {
  localStorage.setItem("theme", "light");
}

// localStorage.setItem("theme", "dark");
// localStorage.getItem("theme");
