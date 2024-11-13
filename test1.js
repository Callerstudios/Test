let para = "abc";
let current = "a";
// let next = "b"

function getPermutations(str) {
  const results = [];

  // Base case: if the string is empty, return an empty array
  if (str.length === 0) {
    console.log("Empty");

    return [[]];
  }

  // Recursive case
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    console.log(`Checking: ${char} in ${str}`);

    const remainingChars = str.slice(0, i) + str.slice(i + 1); // Remaining characters
    console.log(`Remains: ${remainingChars || "nothing"}`);

    // Recursively get permutations of the remaining characters
    const remainingPerms = getPermutations(remainingChars);
    console.log(`For ${char} rem perm: ${remainingPerms || "nothing"}`);

    // Prepend the current character to each of the permutations of the remaining characters
    for (const perm of remainingPerms) {
      console.log(`Char: ${char}, perm: ${perm}`);
      console.log(`New: ${[char, ...perm]}`);

      results.push([char, ...perm]);
    }
    console.log(`Result pushed:`);
    console.log(results);
    
    if (char === current) {
      console.log("Done\n");
      current = str[i + 1];
    }
    console.log("\n");
  }

//   console.log(results);
  return results;
}

const permutations = getPermutations(para);
console.log(permutations);

// Convert the array of arrays into an array of strings
const permutationStrings = permutations.map((perm) => perm.join(""));
console.log(permutationStrings);
