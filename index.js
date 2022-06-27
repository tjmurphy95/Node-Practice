const http = require("http");
const path = require("path");
const fs = require("fs");
const PORT = process.env.PORT || 5001;

const server = http.createServer((req, res) => {
  //   if (req.url === "/") {
  //     fs.readFile(
  //       path.join(__dirname, "public", "index.html"),
  //       (err, content) => {
  //         if (err) throw err;
  //         res.writeHead(200, { "Content-type": "text / html" });
  //         res.end(content);
  //       }
  //     );
  //   }
  //   if (req.url === "/about") {
  //     fs.readFile(
  //       path.join(__dirname, "public", "about.html"),
  //       (err, content) => {
  //         if (err) throw err;
  //         res.writeHead(200, { "Content-type": "text / html" });
  //         res.end(content);
  //       }
  //     );
  //   }

  //Build file path
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );
  console.log(filePath);
  res.end();
});

server.listen(PORT, () => console.log(`server running on port ${PORT}`));
