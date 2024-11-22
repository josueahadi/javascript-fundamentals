function permutation(num) {
  digits = num.toString().split("");
  let result = [];
  let temp = [];
  let used = [];

  function permute() {
    if (temp.length === digits.length) {
      result.push(temp.join(""));
      return;
    }

    for (let i = 0; i < digits.length; i++) {
      if (used[i]) continue;
      temp.push(digits[i]);
      used[i] = true;
      permute();
      temp.pop();
      used[i] = false;
    }
  }
  permute();
  return result;
}

console.log(permutation(301));
console.log(permutation(4071));

function nextBigger(n) {
  const target = n;
  digits = n.toString().split("");
  let permutations = [];
  let temp = [];
  let used = [];

  function permute() {
    if (temp.length === digits.length) {
      permutations.push(temp.join(""));
      return;
    }

    for (let i = 0; i < digits.length; i++) {
      if (used[i]) {
        continue;
      }
      temp.push(digits[i]);
      used[i] = true;
      permute();
      temp.pop();
      used[i] = false;
    }
  }
  permute();

  const biggerNumbers = permutations
    .map((num) => parseInt(num))
    .filter((num) => num > target);

  console.log(biggerNumbers);

  if (biggerNumbers.length === 0) {
    return -1;
  }
  return Math.min(...biggerNumbers);
}

console.log(nextBigger(4071));
console.log(nextBigger(123456798));
