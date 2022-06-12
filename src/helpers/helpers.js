import path from 'path';
import os from 'os';

export const exitProcess = () => {
  console.log(`\nThank you for using File Manager, ${process.env.username}!`);
  process.exit();
}

export const greetings = () => {
  const username = process.env.npm_config_username;

  if(username) {
    process.env.username = username;
  } else {
    process.env.username = "unknown user";
  }

  process.chdir(os.homedir());
  console.log(path.resolve());
  console.log(`Welcome to the File Manager, ${process.env.username}!`);
}