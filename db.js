var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Guestbook = new Schema({
    title: String,
    content: String,
    updated_at: Date
});

mongoose.model('Guestbook', Guestbook);
mongoose.connect('mongodb://localhost/express-guestbook');
