const fs = require("fs");
const path = require("path");
const {validationResult} = require("express-validator");
const {readJSON,writeJSON} = require("../data")

let usuarios = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/users.json')))

module.exports = {
    index: (req,res) => {
        res.render("register")
    },
    store: (req,res) => {
        let errors = validationResult(req);

        if(errors.isEmpty()){

            let nuevoUsuario = {
                "name":req.body.name,
                "surname":req.body.surname,
                "email":req.body.email,
                "pass":req.body.pass
            }
            usuarios.push(nuevoUsuario);
            writeJSON("users.json",usuarios)
            res.redirect("/users")

        } else {
            res.render("register", {
                errors : errors.mapped(),
                old:req.body
            })
        }


        
    },
}