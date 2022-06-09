/* 2. */

/* a. calculate the diagonal for a square has 9 for sides length */

const calculateDiagonal = (sideLength) => {
	return Math.sqrt(Math.pow(sideLength, 2) * 2);
};

/* test case 1 */

console.log(
	'diagoal for a square that has 9CM length for its sides: ',
	calculateDiagonal(9)
);

/* ----------------------------------------------------------------------------- */

/* b. area of a triangle using Heron's formula */

const calculateTriangleArea = (side1, side2, side3) => {
	const semiperimeter = (side1 + side2 + side3) / 2;
	return Math.sqrt(
		semiperimeter *
			(semiperimeter - side1) *
			(semiperimeter - side2) *
			(semiperimeter - side3)
	);
};

console.log(
	'calculate the area of a triangle using sides length: ',
	calculateTriangleArea(5, 6, 7)
);

/* ----------------------------------------------------------------------------- */

/* c. calculate the circumference */

const calculateCircumferenceAndArea = (radius) => {
	return `The circumference of a circle with radius ${radius} is ${
		2 * Math.PI * radius
	}, the area is: ${Math.PI * Math.pow(radius, 2)}`;
};

console.log(
	'this circumference for circle with radius 4: ',
	calculateCircumferenceAndArea(4)
);

/* ----------------------------------------------------------------------------- */

/* 3. */

/* a. find the larger number  */

const largerNumber = (num1, num2) => {
	return Math.max(num1, num2);
};

console.log(largerNumber(2, 4));

/* ----------------------------------------------------------------------------- */

/* b. even or odd */

const evenOrOdd = (num) => {
	return num % 2 === 0 ? 'even' : 'odd';
};

console.log(evenOrOdd(2));
