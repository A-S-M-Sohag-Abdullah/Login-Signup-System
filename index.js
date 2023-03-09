/************************
 * Title: Login Signup System
 * Descrpition: A login Signup system with mongodb database
 * Author: A. S. M. Sohag Abdullah
 * Date: 09 march 2023
 ************************/

//dependencies
const http = require("http");
const url = require("url");
const fs = require("fs");
const qs = require("querystring");
const mime = require("mime");

const server = http.createServer((req, res) => {
  let parsedURL = url.parse(req.url, true);
  let path = parsedURL.path.replace(/^\/+|\/+$/g, ""); //replacing leading and trailing slash with empty string

  path == "" ? (path = "index.html") : (path = path);

  if (req.method === "POST") {
    let body = "";

    // Read request body
    req.on("data", (data) => {
      body += data;
    });

    // Parse form data and handle it
    req.on("end", () => {
      const formData = qs.parse(body);
      console.log(formData);
      res.writeHead(200, { "Content-Type": 'application/json'});
      res.end(JSON.stringify(formData));
    });
    res.writeHead(200);
  }

  let file = __dirname + "/public/" + path;
  let contentType = mime.getType(file);

  //reading files
  fs.readFile(file, (err, data) => {
    if (err) {
      console.log(`File Not Found ${file}`);
      res.writeHead(404);
      res.end();
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.write(data);
      res.end();
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("Listening on port 3000");
});
