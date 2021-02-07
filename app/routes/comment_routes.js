module.exports=app=>{

    const comments=require('../controllers/comment_controller')

    var router = require('express').Router();

    router.post('/',comments.createComment);

    router.get('/:id',comments.findCommentById);
    
    app.use('/api/comments', router);

};