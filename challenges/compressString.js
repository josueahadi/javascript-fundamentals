/*
1. You are given a string containing only uppercase letters. Your task is to implement a function called compressString that compresses the string by counting the consecutive occurrences of each letter and returning a new compressed string.
    
    The compressed string should consist of each letter followed by its count. If a letter appears only once consecutively, you should include the count.

    Example: 
    compressString("AAAABBBCCDAA"); // should return "A4B3C2D1A2"
    compressString("XYZ"); // should return "X1Y1Z1"
*/ 

function compressString(str) {
    result = [];
    const arr = str.split("");
    let count = 1;
    for (i=0; i<arr.length; i++) {
      if (arr[i] === arr[i+1]) {
        count +=1;
      } 
      else {
        result.push(arr[i])
        result.push(count);
        count = 1;
      }
    }
    return result.join('');
  }
  
  compressString('AAAABBBCCDAA');
  compressString('XYZ');