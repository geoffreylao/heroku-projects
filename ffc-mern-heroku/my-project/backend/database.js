const mongoose = require('mongoose');
const connection = "mongodb+srv://dbuser:dbpassword@fcc-mern-heroku.2aikn.mongodb.net/fcc-mern-heroku-db?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));
