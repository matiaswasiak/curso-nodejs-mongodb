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
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessage(filterUser) {
  let filter = {};
  if (filterUser !== null) {
    filter = { user: filterUser };
  }
  const messages = await Model.find(filter);
  return messages;
}

async function updateText(id, message) {
  const foundMessage = await Model.findOne({
    _id: id,
  });

  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage;
}

module.exports = {
  add: addMessage,
  list: getMessage,
  updateText,
  // get
  // update
  // delete
};
