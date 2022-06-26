import fs from 'fs';
import { pipeline } from 'stream';
import zlib from 'zlib';

export const getCompressedFiles = (pathToFile, pathToDestination) => {
  const rs = fs.createReadStream(pathToFile);
  const ws = fs.createWriteStream(pathToDestination);

  const brotliCompression = zlib.createBrotliCompress();
  
  pipeline(rs, brotliCompression, ws, (err) => {
    if (err) console.log('Operations fail');
  });
}


export const getDecompressedFiles = (pathToFile, pathToDestination) => {
  const rs = fs.createReadStream(pathToFile);
  const ws = fs.createWriteStream(pathToDestination);

  const brotliDecompression = zlib.createBrotliDecompress();



  pipeline(rs, brotliDecompression, ws, (err) => {
    if (err) console.log('Operations fail');
  });
}