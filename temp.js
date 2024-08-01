// let data;

// // preload table data
// function preload() {
//     data = loadTable(
//       'Data/pal.csv',
// 			'csv',
// 			'header');
// }

// // using a p5js table object, return an object having
// // the values of the given column, plus the minimum value
// // and maximum value from that column
// function colValsMinMax(tab, colName) {
//   let vals = data.getColumn(colName);
//   let obj = {
//     values: vals,
//     min: min(vals),
//     max: max(vals),
//   }
//   return obj;
// }

// function setup() { 
//   createCanvas(640, 480);
//   // how many rows?
//   console.log(data.getRowCount());
//   // what are the columns?
//   console.log(data.columns);

//   background(50);
  
//   // fetch values and min/max for pm2.5
//   let pm = colValsMinMax(data, "pm2.5");
//   console.log(pm.min);
//   console.log(pm.max);
  
//   // fetch values and min/max for temperature
//   let temps = colValsMinMax(data, "TEMP");
//   console.log(temps.min);
//   console.log(temps.max);

//   // noprotect
//   for (var i = 0; i < data.getRowCount(); i++) {
    
//     // draw pm2.5
//     stroke(255, 128, 128);
//     let pmXpos = map(i, 0, data.getRowCount(), 0, width);
//     let pmYpos = map(pm.values[i], pm.min, pm.max, height, 0);
//     point(pmXpos, pmYpos);   
    
//     // draw temps
//     stroke(128, 128, 255);
//     let tempXpos = map(i, 0, data.getRowCount(), 0, width);
//     let tempYpos = map(temps.values[i], temps.min, temps.max,
//                        height, 0);
//     point(tempXpos, tempYpos);

//   }
// }