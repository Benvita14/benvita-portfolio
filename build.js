const fs = require("fs");
const path = require("path");

const root = process.cwd();
const outDir = path.join(root, "dist");

function copyDir(source, destination) {
  fs.mkdirSync(destination, { recursive: true });

  for (const entry of fs.readdirSync(source, { withFileTypes: true })) {
    const sourcePath = path.join(source, entry.name);
    const destinationPath = path.join(destination, entry.name);

    if (entry.isDirectory()) {
      copyDir(sourcePath, destinationPath);
    } else {
      fs.copyFileSync(sourcePath, destinationPath);
    }
  }
}

fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });

fs.copyFileSync(path.join(root, "index.html"), path.join(outDir, "index.html"));
copyDir(path.join(root, "src"), path.join(outDir, "src"));
copyDir(path.join(root, "public"), outDir);

console.log("BENVITA portfolio built to dist/");
