import path from 'path';
import fs from 'fs';



export const moveToTopDir = () => {
  const currentDir = path.resolve();

  // console.log(path.parse(currentDir).dir);
  process.chdir(path.parse(currentDir).dir);
}

export const moveToDir = (newPath) => {
  if (!newPath) return false;
  
  if (path.isAbsolute(newPath)) {
    process.chdir(newPath);
  }
}

export const showAllFilesInDir = () => {

  const currentDir = path.resolve();
  console.log(currentDir);
  fs.readdir(currentDir, (_, data) => {
    data.map((file) => console.log(file));
  });
}