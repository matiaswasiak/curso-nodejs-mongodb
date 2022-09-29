const db = require("mongoose");
const Model = require("./model");

db.Promise = global.Promise;
db.connect("mongodb+srv://root:root@cluster0.hau4sfc.mongodb.net/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "Telegrom",
});
console.log("[db] Conectada con éxito");

function addMessage(message) {
  // list.push(message);
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessage() {
  // return list;
  const messages = await Model.find();
  return messages;
}

module.exports = {
  add: addMessage,
  list: getMessage,
  // get
  // update
  // delete
};
