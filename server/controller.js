const { send } = require("express/lib/response");

// const db = require('./db.json');
const posts = [];



module.exports = {

    getPost: (req, res) => {
        res.status(200).send(posts)

    },

    createPost: (req, res) => {

        const {postContent} = req.body
        let newPost = {
            postContent
        }
        posts.push(newPost)
        res.status(200).send(posts)
    }


}