const http = require("http");
const fs = require("fs");
const path = require("path");

const root = process.cwd();
const port = Number(process.argv[2] || 5174);
const types = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".jsx": "text/babel",
  ".css": "text/css",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp"
};

http
  .createServer((req, res) => {
    let route = decodeURIComponent(req.url.split("?")[0]);
    if (route === "/") route = "/index.html";

    let file = path.join(root, route);
    if (!file.startsWith(root)) {
      res.writeHead(403);
      res.end();
      return;
    }

    fs.readFile(file, (error, data) => {
      if (error) {
        file = path.join(root, "public", route);
        if (!file.startsWith(path.join(root, "public"))) {
          res.writeHead(403);
          res.end();
          return;
        }

        fs.readFile(file, (publicError, publicData) => {
          if (publicError) {
            res.writeHead(404);
            res.end("Not found");
            return;
          }

          res.writeHead(200, { "Content-Type": types[path.extname(file)] || "application/octet-stream" });
          res.end(publicData);
        });
        return;
      }

      res.writeHead(200, { "Content-Type": types[path.extname(file)] || "application/octet-stream" });
      res.end(data);
    });
  })
  .listen(port, "127.0.0.1", () => {
    console.log(`BENVITA preview: http://127.0.0.1:${port}/`);
  });
