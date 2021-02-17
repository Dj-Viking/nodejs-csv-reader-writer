const csv = require('csv-parser');
const fs = require('fs');

const data = []

fs.createReadStream('./dist/MOCK_DATA1000.csv')
.pipe(csv())
.on('data', (row) => {
  console.log('\x1b[33m', 'pushing row', '\x1b[00m');
  console.log(row);
  data.push(row);
})
.on('end', () => {
  console.log('\x1b[33m', 'data saved into data array', '\x1b[00m');
  console.log(data);
  console.log('\x1b[33m', 'CSV file successfully read', '\x1b[00m');
});
