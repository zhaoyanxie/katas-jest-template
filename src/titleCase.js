// function to capitalise the first character
const capitaliseFirstChar = string => {
  return string[0].toUpperCase() + string.slice(1);
};

// find string within minorWords, return true if found
const findInMinorWords = (string, minorWords) => {
  const arrayMinorWords = minorWords.toLowerCase().split(" ");
  if (arrayMinorWords.find(minorWord => minorWord === string)) return true;

  return false;
};

const titleCase = (title, minorWords) => {
  if (title === "") return "";
  
  // convert all characters to lower case and split the words into an array
  const arrayTitle = title.toLowerCase().split(" ");
  let arrayCapitalised;

  arrayCapitalised = arrayTitle.map((word, index) => {
    // if there is no input for minorWords, capitalise all first char
    if (minorWords === undefined) return capitaliseFirstChar(word)
    else {
      // capitalise the first char of the first word regardless whether it is found in minorWords
      if (index === 0) return capitaliseFirstChar(word) 
      else {
        // For the remaining words, if word is not found in minorWords, capitalise first char and concatenate to the string to be returned
        if (!findInMinorWords(word, minorWords))
          return capitaliseFirstChar(word);
        else 
          return word;
      }
    }
  });
  return arrayCapitalised.join(" ");
};

module.exports = titleCase;
