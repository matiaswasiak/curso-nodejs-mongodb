const db = require("mongoose");

db.Promise = global.Promise;

// "mongodb+srv://root:root@cluster0.hau4sfc.mongodb.net/test"
async function connect(url) {
  await db.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "Telegrom",
  });
  console.log("[db] Conectada con éxito");
}

module.exports = connect;
