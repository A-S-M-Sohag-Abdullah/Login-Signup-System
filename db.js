/************************
 * Title: Data base handler
 * Descrpition: Database handling machanism
 * Author: A. S. M. Sohag Abdullah
 * Date: 10 march 2023
 ************************/

// dependencies
const { MongoClient } = require("mongodb");

let dbConnection;

// exports
module.exports = {
  connectToDb: (callback) => {
    MongoClient.connect("mongodb://localhost:27017/UsersDb")
      .then((client) => {
        dbConnection = client.db();
        return callback();
      })
      .catch((err) => {
        console.log("error : ", err);
        return callback(err);
      });
  },
  getDb: () => dbConnection,
};
