let theName = "Elzero";

console.log([...theName]);
console.log(Array.from(theName));
console.log(theName.split(''));
console.log([...new Set(theName)]);
console.log(Object.values(theName));

// Needed Output
['E', 'l', 'z', 'e', 'r', 'o']