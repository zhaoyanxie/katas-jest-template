const splitTheBill = people => {
  const values = Object.values(people);
  const average = values.reduce((a, b) => a + b) / values.length;

  let billSplit = {};

  for (let i in people) {
    let result = people[i] - average;

    if (result % 1 !== 0) {
      result = Number.parseFloat(result).toFixed(2);
    }
    billSplit[i] = result;
  }
  return billSplit;
};

module.exports = splitTheBill;
