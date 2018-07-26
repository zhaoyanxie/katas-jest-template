sortAnimal = animals => {
  if (animals === null) return null;
  if (animals.length === 0) return [];

  // Return sorted animals
  let sortedAnimals = animals;

  sortedAnimals.sort((a, b) => {
    // console.log(a.name, b.name);
    if (a.numberOfLegs > b.numberOfLegs) {
      return 1;
    } else if (a.numberOfLegs === b.numberOfLegs) {
      return a.name > b.name ? 1 : -1;
    }
    return -1;
    // return a.numberOfLegs > b.numberOfLegs;
  });
  console.log(sortedAnimals);
  return sortedAnimals;
};

module.exports = sortAnimal;
