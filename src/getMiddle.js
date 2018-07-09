const getMiddle = s =>
{
  //Code goes here!
  let firstIndex;
  if (s.length % 2 === 1) { // odd
    firstIndex = Math.floor(s.length/2);
    return s[firstIndex];
  } else { // even
    firstIndex = s.length/2 -1;
    return s[firstIndex] + s[firstIndex + 1];
  }
}

module.exports = getMiddle;