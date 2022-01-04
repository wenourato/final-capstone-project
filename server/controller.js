

// const db = require('./db.json');
const posts = [];



module.exports = {

    getPost: (req, res) => {
        res.status(200).send(posts)

    },

    createPost: (req, res) => {
        

        const {status} = req.body 
        console.log(req.body)
        let newPost = {status}
        posts.push(newPost)


    res.status(200).send(posts)

    }

//     createPost: (req, res) => {

//         const {postContent} = req.body
//         let newPost = {
//             postContent
//         }
//         posts.push(newPost)
//         res.status(200).send(posts)
//     }


}