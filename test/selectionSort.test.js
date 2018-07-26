const selectionSort = require('../src/selectionSort');

test('should return sorted array for size 1', () => {
	expect(selectionSort([ 1 ])).toEqual([ 1 ]);
});

test('should return sorted array for size 2 for an unsorted array', () => {
	expect(selectionSort([ 2, 1 ])).toEqual([ 1, 2 ]);
});

test('should return sorted array for size 2 for a sorted array', () => {
	expect(selectionSort([ 1, 2 ])).toEqual([ 1, 2 ]);
});

test('should return sorted array for size 3 for an sorted array', () => {
	expect(selectionSort([ 3, 1, 2 ])).toEqual([ 1, 2, 3 ]);
});

test('Array of 3 items, should return sorted array', () => {
	expect(selectionSort([ 2, 3, 1 ])).toEqual([ 1, 2, 3 ]);
});

test('Array of 6 items, should return sorted array', () => {
	expect(selectionSort([ 5, 3, 6, 4, 2, 1 ])).toEqual([ 1, 2, 3, 4, 5, 6 ]);
});
