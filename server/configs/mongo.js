const mongoose = require("mongoose");

function conetmongo(){
    mongoose
        .connect("mongodb://localhost/app-create", {
            useNewUrlParser: true
        })
        .then(x => {
            console.log(
                `Connected to Mongo! Database name: "${x.connections[0].name}"`
            );
        })
        .catch(err => {
            console.error("Error connecting to mongo", err);
        });
}


module.exports = conetmongo;
