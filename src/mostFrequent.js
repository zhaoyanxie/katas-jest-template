const mostFrequent = array => {
  const mapFrequency = new Map();
  const mostFrequentElement = new Set();
  let maxFrequency = 0;

  array.forEach(key => {
    let valueFrequency = mapFrequency.get(key);
    if (valueFrequency === undefined) {
      // key not found in Map
      mapFrequency.set(key, 1);
    } else {
      valueFrequency += 1; // increase frequency by 1 if found in Map
      mapFrequency.set(key, valueFrequency);
      if (valueFrequency > maxFrequency) {
        maxFrequency = valueFrequency;
        mostFrequentElement.clear(); // clear Map so as to re-set it to the key with the max frequency
        mostFrequentElement.add(key); // keep track of the max key
      } else if (valueFrequency === maxFrequency) {
        mostFrequentElement.add(key);
      }
    }
  });
  return new Set(mostFrequentElement); // return max key
};
module.exports = mostFrequent;
