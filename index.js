import path from 'path';
import { getResultOfOperation } from './src/controller.js';
import { greetings, exitProcess } from './src/helpers/helpers.js';


function cli () {
  greetings();

  process.stdin.on('data', async (chunk, _) => {
    let operation = chunk.toString().trim();

    await getResultOfOperation(operation);
    console.log(path.resolve());
  });

  process.on("SIGTERM", () => {
    console.log(`SIGHUP`);
    process.exit();
  });
  
  process.on("SIGINT", () => {
    exitProcess();
  });
}

cli();

