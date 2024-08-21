// ZL-TASK:

// Shunday function yozing, u parametrda berilgan stringni kebab casega otkazib qaytarsin. Bosh harflarni kichik harflarga ham otkazsin.
// MASALAN: stringToKebab(“I love Kebab”) return “i-love-kebab”

function stringToKebab(str) {
	return str
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');
}

console.log(stringToKebab('I love Kebab'));

// // ZK-TASK:

// // Shunday function yozing, u har soniyada bir marta consolega 1 dan 5 gacha bolgan raqamlarni chop etsin va 5 soniyadan keyin ishini toxtatsin.
// // MASALAN: printNumbers()

// function printNumbers() {
// 	let number = 1;
// 	const intervalId = setInterval(() => {
// 		console.log(number);
// 		if (number === 5) {
// 			clearInterval(intervalId);
// 		}
// 		number++;
// 	}, 1000);
// }

// printNumbers();

// // ZJ-TASK:

// // Shunday function yozing, u berilgan arrayni ichidagi numberlarni qiymatini hisoblab qaytarsin.
// // MASALAN: reduceNestedArray([1, [1, 2, [4]]]) return 8

// function reduceNestedArray(arr) {
// 	return arr.flat(Infinity).reduce((sum, num) => sum + num, 0);
// }
// console.log(reduceNestedArray([1, [1, 2, [4]]]));
