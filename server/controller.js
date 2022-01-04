// const res = require("express/lib/response");


// const db = require('./db.json');
const posts = [];

let index = 1

module.exports = {

    getPost: (req, res) => {
        res.status(200).send(posts)

    },

    createPost: (req, res) => {
        
            const {newPost} = req.body
            const postToAdd = {
                index,
                content: newPost
            }
        // const {newPost: status} = req.body 
        // console.log(req.body)
        // let newPost = {status}
        posts.push(postToAdd)
        index++


    res.status(200).send(posts)

    },

    deletePost: (req, res) => {
        let {id} = req.params
        let location = posts.findIndex((el) => el.index === +id)
        console.log(location)
        posts.splice(location, 1)
        res.status(200).send(posts)
    }




}