const db = require('../models/app');
const Comment = db.comments;
const Op = db.Sequelize.Op;
//Create comment

exports.createComment = (req, res, next) => {
    // Validate request
    if (!req.body.name || !req.body.tutorialId) {
        res.status(400).send({
            message: "Fields cannot be empty!"
        });
        return;
    }
    // Create a Tutorial
    const comment = {
        name: req.body.name,
        text: req.body.text,
        tutorialId: req.body.tutorialId
    };

    Comment.create(comment)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Comment."
            });
        });
}

exports.findCommentById = (req,res,next) => {
    const id = req.params.id;
    Comment.findByPk(id, {
            include: ["tutorial"]
        })
        .then((comment) => {
            res.send(comment);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Comment."
            });
        });
};