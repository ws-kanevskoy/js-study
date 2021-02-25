function toCamelCase(source) {
  let = words = source.split('_');
  let i = 0;
  let result = words[0];
  for (let word of words) {

    if (i == 0) {
      i = 1;
      continue;
    }
    
    word = word[0].toUpperCase() + word.substring(1);
    result += word;

  }
  return result;
}

console.log(toCamelCase("hello_world"));