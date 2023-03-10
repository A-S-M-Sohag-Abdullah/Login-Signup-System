/************************
 * Title: Form data handler
 * Descrpition: Form data handling machanism
 * Author: A. S. M. Sohag Abdullah
 * Date: 10 march 2023
 ************************/

// dependencies
const { connectToDb, getDb } = require("./db");

let db;
connectToDb((err) => {
  if (!err) {
    db = getDb();
  }
});

const handleFormData = (formData) => {
  db.collection("Users").insertOne(formData);
};

// exports
module.exports = {
  handleFormData,
};
