const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://vinnovate_database:VIQQ35aYztUX3wFS@vinnovate-cluster.mx48r7p.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('database connected')).catch(err => console.log(err));

const schemaremind = new mongoose.Schema({
    reminderMsg: String,
    remindAt: String,
    isReminded: Boolean
})


let data = mongoose.model('datareminders', schemaremind);
module.exports = data;