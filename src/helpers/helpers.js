import path from "path";
import { access } from "fs/promises";


export const checkpath = async (path) => {
  try {
    await access(path);
    return true;
  } catch (e) {
    return false;
  }
};


export const createPath = async (newPath, currentDirectory) => {
  if(!newPath) return false;
  if (path.isAbsolute(newPath)) {
    let n = path.normalize(currentDirectory).indexOf(path.normalize(newPath));
    if (n != -1)
      return path.normalize(
        path.join(currentDirectory.substring(0, n), newPath)
      );
    if (path.parse(path.normalize(newPath)).root != "\\") {
      if (await checkpath(newPath)) return newPath;
    }
  } else {
    let tempdir = path.normalize(path.join(currentDirectory, newPath));
    if (await checkpath(tempdir)) return tempdir;
  }
  return false;
};