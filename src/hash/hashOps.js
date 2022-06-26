import fs from 'fs';
import crypto from 'crypto';

export const createHash = (pathToFile) => {
  const rs = fs.createReadStream(pathToFile, 'utf-8');

  const hashSum = crypto.createHash('sha256');

  rs.on('data', (chunk) => {
    hashSum.update(chunk);
  });

  rs.on('end', () => {
    console.log(hashSum.digest('hex'))
  });

  rs.on('error', (e) => {
    console.log(e, 'Error msg');
  });
}