const fs = require("fs");

fs.readFileSync("./usuario.json", "utf-8");
const usuario = JSON.parse(db);

usuario.edad = 20;

fs.writeFileSync("./usuario.json", JSON.stringify(user, null, 2));