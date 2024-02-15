const fs = require("fs");

const user = {
    "username": "Javi",
    "password": "1234"
}

fs.writeFileSync("./usuario.json", JSON.stringify(user, null, 2));