const express = require("express");
const port = process.env.PORT || 5000;
const app = express();
const schemareminders = require('./model/schemaremind');
const cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
//API routes
app.get("/getAllReminders", (req, res) => {
    schemareminders.find({}, (err, reminderList) => {
        if(err){
            console.log(err)
        }
        if(reminderList){
            res.send(reminderList)
        }
    })
})
app.post("/addReminders", (req, res) => {
    const { reminderMsg, remindAt } = req.body
    const schema = new schemareminders({
        reminderMsg,
        remindAt,
        isReminded: false
    })
    schema.save(err => {
        if(err){
            console.log(err)
        }
        schemareminders.find({}, (err, reminderList) => {
            if(err){
                console.log(err)
            }
            if(reminderList){
                res.send(reminderList)
            }
        })
    })

})
app.post("/deleteReminder", (req, res) => {
    schemareminders.deleteOne({ _id: req.body.id }, () => {
        schemareminders.find({}, (err, reminderList) => {
            if (err) {
                console.log(err)
            }
            if (reminderList) {
                res.send(reminderList)
            }
        })
    })

});




app.listen(port, () => console.log("app listening at " + port));
