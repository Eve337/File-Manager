import fs from 'fs';
import { pipeline } from 'stream';
import path from 'path';

export const readFileOp = async (pathToFile) => {
  const rs = fs.createReadStream(pathToFile, {flag: 'a+', encoding: 'UTF-8',});

  pipeline(rs, process.stdout, ((err) => {
    if (err) {
      console.log('Operations fail');
    }
  }));
}

export const addNewFile = (fileName) => {
  const ws = fs.createWriteStream(path.resolve() + '/' + fileName);

  ws.on('error', (e) => {
    console.log('smth went wrong', e);
  });
}

export const renameFile = async (pathToFile, newName) => {
  const newPath = pathToFile.split(path.sep);
  newPath.pop();
  newPath.push(newName);

  fs.rename(pathToFile, newPath.join(path.sep), (e) => {
    if(e) console.log(e)
  });
}

export const copyFile = async (pathToFile, pathToCopyDir) => {
  const rs = fs.createReadStream(pathToFile, 'utf-8');
  const ws = fs.createWriteStream(pathToCopyDir);

  pipeline(rs, ws, (err) => {
    if (err) console.log('Operations fail');
  })
}

export const moveFile = (pathToFile, pathToCopyDir) => {
  const rs = fs.createReadStream(pathToFile, 'utf-8');
  const ws = fs.createWriteStream(pathToCopyDir);

  pipeline(rs, ws, (err) => {
    if (err) console.log('Operations fail');
    fs.unlink(pathToFile, (err) => {
      if (err) console.log('Operations fail');
    });
  })
}

export const removeFile = (pathToFile) => {
  fs.unlink(pathToFile, (err) => {
    if (err) console.log('Operations fail', err);
  });
}