import { typesOfOperations } from '../types/types.js';
import { getEol, getCpus, getHomeDir, getUserName, getArchitecture } from './osOperartions.js';


const { EOL, CPUS, HOMEDIR, USERNAME, ARCHITECTURE } = typesOfOperations;

export const osController = async (osOperation) => {

  switch (osOperation) {
    case EOL:
      getEol();
      break;
    case CPUS:
      getCpus();
      break;
    case HOMEDIR:
      getHomeDir();
      break;
    case USERNAME:
      getUserName;
      break;
    case ARCHITECTURE:
      getArchitecture();
      break;
    default:
      console.log('Invalid case');
  }
  
} 