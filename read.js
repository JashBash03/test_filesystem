const fs = require("fs");

fs.readFileSync("./usuario.json", "utf-8");

const usuario = JSON.parse(db);