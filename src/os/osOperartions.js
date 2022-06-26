import os from 'os';

export const getEol = () => {
  console.log(os.EOL);
}

export const getCpus = () => {
  const currentOS = os.cpus();
  console.log(`Amount of cores: ${currentOS.length}`)
  currentOS.map((core) => console.log(`Model of core: ${core.model}, speed of core: ${(core.speed / 1000).toFixed(1)} GHz`));
}

export const getHomeDir = () => {
  console.log(`Home dir is: ${os.homedir()}`);
}

export const getUserName = () => {
  console.log(`Username is ${os.hostname()}`);
}

export const getArchitecture = () => {
  console.log(`Architecture is ${os.arch()}`);
}