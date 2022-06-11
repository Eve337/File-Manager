import path from 'path';
import os from 'os';


const greetings = () => {
  const username = process.env.npm_config_username;

  if(username) {
    process.env.username = username;
  } else {
    process.env.username = "unknown user";
  }

  process.chdir(os.homedir());
  console.log(`Welcome to the File Manager, ${process.env.username}!`)
}

function cli () {
  greetings();

  process.stdin.on('data', (chunk, _) => {
    let operation = chunk.toString();

    // let result = getResultOfOperation(operation);
  });

  process.on("SIGTERM", () => {
    console.log(`SIGHUP`);
    process.exit();
  });
  
  process.on("SIGINT", () => {
    console.log(`Thank you for using File Manager, ${process.env.username}!`);
    process.exit();
  });
  
}

cli();

