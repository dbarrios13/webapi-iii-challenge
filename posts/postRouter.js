const express = require('express')

const postDb = require('./postDb')

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const posts = await postDb.get()
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json({
            message: 'Error retrieving the posts'
        })
    }
});

router.get('/:id', validatePostId, (req, res) => {
    postDb.getById(req.params.id)
        .then(res => {
            res.status()
        })

    
    // try {
    //     const post = await postDb.getById(req.params.id)
    //     res.status(200).json(post)
    // } catch (error) {
    //     res.status(500).json({
    //         message: 'Error retrieving the post'
    //     })
    // }
});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

// custom middleware

function validatePostId(req, res, next) {
    if(req.params.id) {
        next()
    } else {
        res.status(404).json({
            message: 'The post with the specific ID does not exist'
        })
    }
};

module.exports = router;