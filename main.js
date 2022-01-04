var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");

let post = document.querySelector("#textArea");

function submitHandler(e) {
  e.preventDefault();
  console.log("hit");

  let bodyObject = {
    newPost: post.value,
  };
  console.log(post.value);
  createPost(bodyObject);
  post.value = ""
}

const createPost = (body) =>
  axios
    .post("http://localhost:4500/api/onlydevs", body)
    .then((res) => {
      createPostCard(res.data[0]);

    })

    .catch(errCallback);

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
              <span>December 26 2021, 5:59pm</span>
          </div>
      </div>
      <a href="#"> <i class="fas fa-ellipsis-v"></i></small></a>

  </div>

  <p class="post-text">${post.status}</p>
  

  <div class="post-row">
      <div class="activity-icons">
          <div><img src="images/like-blue.png"> 3</div>
          <div><img src="images/comments.png"> 0</div>
          <div><img src="images/share.png"> 1</div>

      </div>
      <div class="post-profile-icons">
          <img src="images/profile-pic.jpg">  <i class="fas fa-caret-down"></i></small>

      </div>

  </div>
  
</div>`;

  let addPost = document.querySelector(".asdf");
  addPost.appendChild(postCard);
}

// const postCallback = ({ data: post }) => {
//     displayPost(post)
// }
const errCallback = (err) => console.log(err);

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

const postBtn = document.getElementById("post-btn");

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
