module.exports = function check(str, bracketsConfig) {
 let brackets = bracketsConfig.map(br => br.join(""));

  console.log(brackets)

  for (let i = 0; i < brackets.length; i++) {
      console.log(str)
      if (str.includes(brackets[i])) {
        str = str.replace(brackets[i], "");
        i = -1;
      }
    }
  return !str;
}