var getPermutation = (s1 = "") => {
  let results = [];
  if (s1.length === 0) {
    return [[]];
  }
  for (let i = 0; i < s1.length; i++) {
    let currentChar = s1[i];
    let remChars = s1.slice(0, i) + s1.slice(i + 1);
    let permOfRem = getPermutation(remChars);
    for (const permutation of permOfRem) {
      results.push([currentChar, ...permutation]);
    }
  }

  return results;
};

// console.log(getPermutation("abc"));
var checkInclusion = (s1 = "", s2 = "") => {
  const allPerms = getPermutation(s1);
  const joinedRes = allPerms.map((perm) => {
    return perm.join("");
  });
  for (let x = 0; x < s2.length; x++) {
    // console.log(`${x}: ${s1.includes(s2[x])}, ${s2[x + s1.length - 1]}`);
    if (s1.includes(s2[x]) && s1.includes(s2[x + s1.length - 1])) {
      if (joinedRes.includes(s2.substring(x, x + s1.length))) {
        return true;
      }
    }
  }
  return false;
};
console.log(checkInclusion("abc", "erwfreabc"));
