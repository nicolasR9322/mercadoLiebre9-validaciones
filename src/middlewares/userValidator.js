const {check} = require("express-validator");

const userValidator = [

    check("name")
        .notEmpty().withMessage("el nombre no puede estar vacio").bail()
        .isLength({min:3}).withMessage("no puede contener menos de 3 caracteres"),
    
    check("surname")
        .notEmpty().withMessage("el apellidno no puede estar vacio").bail()
        .isLength({min:3}).withMessage("no puede contener menos de 3 caracteres"),

    check("email")
        .notEmpty().withMessage("el nombre no puede estar vacio").bail()
        .isEmail().withMessage("debe ser un email"),

    check("pass")
        .notEmpty().withMessage("la contraseña no puede estar vacia").bail()
        .isLength({min:3}).withMessage("no puede contener menos de 3 caracteres")
]

module.exports = userValidator