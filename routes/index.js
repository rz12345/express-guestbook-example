var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );
var Message = mongoose.model('Guestbook');

/* Home page. list all messages  */
router.get('/', function(req, res, next) {
    Message.find().sort('-updated_at').exec(function(err, msgs) {
        if (err) return next(err);
        res.render('index', {
            title: 'Guestbook via Node.js & Express',
            msgs: msgs
        });
    });
});

// 新增 message 後, redirect to '/''
router.post('/create', function(req, res, next) {
    new Message({
    	title: req.body.title,
        content: req.body.content,
        updated_at: Date.now()
    }).save(function(err, msg, count) {
        if (err) return next(err);
        res.redirect('/');
    });
});

// 刪除 message 後, redirect to '/''
router.get('/destory/:id', function(req, res, next) {
    Message.findById(req.params.id, function(err, msg) {
        msg.remove(function(err, msg) {
            if (err) return next(err);
            res.redirect('/');
        });
    });
});


module.exports = router;
