import { typesOfOperations } from './types/types.js';
import { moveToTopDir, moveToDir, showAllFilesInDir } from './fs/navigation.js';
import { readFileOp, addNewFile, renameFile, copyFile, moveFile, removeFile } from './fs/basicOperationsWithFile.js';

const { up, cd, ls, cat, add, rn, cp, mv, rm } = typesOfOperations;

export const getResultOfOperation = async (operation) => {
  const [commandWithoutArgs, argumentToCommand, additionalArg] = operation.split(' ');

  switch (commandWithoutArgs) {
    case up:
      moveToTopDir();
      break;
    case cd:
      moveToDir(argumentToCommand);
      break;
    case ls:
      showAllFilesInDir();
      break;
    case cat:
      readFileOp(argumentToCommand);
      break;
    case add:
      addNewFile(argumentToCommand);
      break;
    case rn:
      renameFile(argumentToCommand, additionalArg);
      break;
    case cp:
      copyFile(argumentToCommand, additionalArg);
      break;
    case mv:
      moveFile(argumentToCommand, additionalArg);
      break;
    case rm:
      removeFile(argumentToCommand);
    default:
      console.log('Invalid case');
  }
  
} 