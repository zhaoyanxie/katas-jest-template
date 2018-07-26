const swap = (arr, index1, index2) => {
	const arrCopy = arr.slice();

	[ arrCopy[index1], arrCopy[index2] ] = [ arrCopy[index2], arrCopy[index1] ];
	return arrCopy;
};

const findMinIndex = (array) => {
	let minElement = {
		value: array[0],
		index: 0
	};

	array.forEach((number, index) => {
		if (number < minElement.value) {
			minElement.value = number;
			minElement.index = index;
		}
	});
	return minElement.index;
};

const selectionSort = (array) => {
	let minIndex;
	let swappedArray = [];
	let sortedArray = [];

	if (array.length === 0) return [];

	if (array.length === 1) return array;

	minIndex = findMinIndex(array);
	swappedArray = swap(array, 0, minIndex);
	sortedArray.push(swappedArray[0]);
	return sortedArray.concat(selectionSort(swappedArray.slice(1)));
};

module.exports = selectionSort;
