const xlsx = require('node-xlsx');
const fs = require('fs');

const data = xlsx.parse('./data.xlsx');
const vip = data[5];
const row = vip.data;
const oldRow = row.shift();
const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => arr.slice(i * size, i * size + size));
const chunkData = chunk(row, 8000);
const buildData = [];
for (var i = 0; i < chunkData.length; i++) {
  let obj = {
    name: `Sheet${i}`,
    data: chunkData[i]
  };
  buildData.push(obj);
}

let buffer = xlsx.build(buildData);
fs.writeFileSync('./build.xlsx', buffer);
