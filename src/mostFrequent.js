const mostFrequent = array => {
  const mapMostFrequent = new Map();
  const maxElements = new Set();
  let maxFrequency = 0;

  array.forEach(key => {
    let valueFrequency = mapMostFrequent.get(key);
    if (valueFrequency === undefined) { // key not found in Map
      mapMostFrequent.set(key, 1);
    } else {
      valueFrequency += 1; // increase frequency by 1 if found in Map
      mapMostFrequent.set(key, valueFrequency); 
      if (valueFrequency > maxFrequency) {
        maxFrequency = valueFrequency; 
        mapMostFrequent.clear(); // clear Map so as to re-set it to the key with the max frequency
        maxElements.clear();
        mapMostFrequent.set(key, valueFrequency);
        maxElements.add(key); // keep track of the max key
      } else if (valueFrequency === maxFrequency) {
        maxElements.add(key);
      }
    }
  });
  return new Set(maxElements); // return max key
};
module.exports = mostFrequent;
