const fs = require('fs');
const path = require('path');


src = path.resolve(__dirname, 'text.txt')
out = path.resolve(__dirname, 'output.txt')
const writableStream = fs.createWriteStream(out);
const readableStream = fs.createReadStream(src, {
  highWaterMark: 15
});

readableStream.on('readable', () => {
  try {
    text = (readableStream.read())
    process.stdout.write(text)
    writableStream.write(`${text}\n`)
  } catch(error) {
      // catch the error when the chunk cannot be read.
      
  }
});

readableStream.on('end', () => {
  console.log('Done');
  writableStream.end('----------------');
});

