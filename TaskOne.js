function colorAverage(color1, color2) {
  let averageColor = parseInt(color2, 16) + parseInt(color1, 16) / 2; //12061928
  return Math.floor(averageColor).toString(16);
}

console.log(colorAverage("74A543", "4367A5"));
