function isPalindrome(x) {
    let s = x.toLowerCase();
    // let reversed = "";
    // for (let i=s.length-1; i>=0; i--) {
    //   reversed += s[i];
    // }
    // console.log(reversed);
    let reversed = s.split('').reverse().join('');
    return (reversed === s) ? true : false;
  }
  // TEST CASES
  isPalindrome('madam'); // true
  isPalindrome('madman'); // false
  isPalindrome('Madam'); // true (the function is not case sensitice)